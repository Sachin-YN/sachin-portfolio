import { useEffect, useRef, useState } from 'react'
import { geoOrthographic, geoPath, geoGraticule10, geoDistance } from 'd3-geo'
import { feature } from 'topojson-client'

const TN = [78.7, 11.1] // Tamil Nadu, approximate centre [lon, lat]

// Live sources (all free, no API key, called straight from the visitor's browser)
const QUAKES_URL = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_day.geojson'
const ISS_URL = 'https://api.wheretheiss.at/v1/satellites/25544'
const WX_URL =
  'https://api.open-meteo.com/v1/forecast?latitude=13.08&longitude=80.27&current=temperature_2m,relative_humidity_2m,weather_code&timezone=auto'
// Open-Meteo's free tier is for non-commercial use. Set NEXT_PUBLIC_DISABLE_WEATHER=1 in Vercel to switch that layer off.
const WEATHER_ON = process.env.NEXT_PUBLIC_DISABLE_WEATHER !== '1'

function wxText(c) {
  if (c === 0) return 'Clear'
  if (c <= 3) return 'Partly cloudy'
  if (c === 45 || c === 48) return 'Fog'
  if (c >= 51 && c <= 57) return 'Drizzle'
  if (c >= 61 && c <= 67) return 'Rain'
  if (c >= 71 && c <= 77) return 'Snow'
  if (c >= 80 && c <= 82) return 'Showers'
  if (c >= 95) return 'Thunderstorm'
  return 'Cloudy'
}

async function getJSON(url, ms = 8000) {
  const ctl = new AbortController()
  const id = setTimeout(() => ctl.abort(), ms)
  try {
    const r = await fetch(url, { signal: ctl.signal, cache: 'no-store' })
    if (!r.ok) throw new Error(String(r.status))
    return await r.json()
  } finally {
    clearTimeout(id)
  }
}

async function loadWorld() {
  try {
    const m = await import('world-atlas/countries-110m.json')
    return m.default || m
  } catch (e) {
    return getJSON('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json', 15000)
  }
}

function Ago({ at }) {
  const [now, setNow] = useState(Date.now())
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(id)
  }, [])
  if (!at) return <span>waiting</span>
  const s = Math.max(0, Math.round((now - at) / 1000))
  return <span>{s < 60 ? `${s}s ago` : `${Math.round(s / 60)}m ago`}</span>
}

const DOT = { live: 'bg-emerald-400', loading: 'bg-amber-300', offline: 'bg-gray-500' }

function Stat({ label, status, value, sub }) {
  return (
    <div className="rounded-lg bg-black/35 border border-white/10 p-2.5 text-left min-w-0">
      <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-wide text-gray-400">
        <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${DOT[status]} ${status === 'live' ? 'animate-pulse' : ''}`} />
        <span className="truncate">{label}</span>
      </div>
      <div className="text-base font-semibold text-white mt-1 truncate">{value}</div>
      <div className="text-[10px] text-gray-400 mt-0.5 leading-snug">{sub}</div>
    </div>
  )
}

export default function GlobeHero() {
  const wrap = useRef(null)
  const cvRef = useRef(null)
  const api = useRef({})
  const [paused, setPaused] = useState(false)
  const [ready, setReady] = useState(false)
  const [hover, setHover] = useState(null)
  const [st, setSt] = useState({ q: 'loading', i: 'loading', w: WEATHER_ON ? 'loading' : 'off' })
  const [qInfo, setQInfo] = useState(null)
  const [issInfo, setIssInfo] = useState(null)
  const [wxInfo, setWxInfo] = useState(null)

  useEffect(() => { api.current.paused = paused }, [paused])

  useEffect(() => {
    const cv = cvRef.current
    const ctx = cv.getContext('2d')
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const proj = geoOrthographic().clipAngle(90)
    const path = geoPath(proj, ctx)
    const sphere = { type: 'Sphere' }
    const grat = geoGraticule10()

    let size = 400, lam = -TN[0], phi = -14, tl = null, tp = null
    let hold = 150, t = 0, drag = null, land = null, india = null, mouse = null, lastHit = null
    let raf = 0, looping = false, visible = true, dead = false
    let quakes = [], temp = null
    const iss = { cur: null, vel: null, at: 0, trail: [] }
    const setStat = (k, v) => setSt(s => (s[k] === v ? s : { ...s, [k]: v }))

    const resize = () => {
      size = Math.max(240, Math.min(480, wrap.current.clientWidth))
      const dpr = window.devicePixelRatio || 1
      cv.width = size * dpr
      cv.height = size * dpr
      cv.style.width = size + 'px'
      cv.style.height = size + 'px'
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      proj.translate([size / 2, size / 2]).scale(size / 2 - 22)
      if (reduce) draw()
    }

    const visibleAt = c => geoDistance(c, [-lam, -phi]) < Math.PI / 2 - 0.04

    function issNow() {
      if (!iss.cur) return null
      const age = Math.min(10, (Date.now() - iss.at) / 1000)
      if (!iss.vel) return iss.cur
      let lon = iss.cur[0] + iss.vel[0] * age
      lon = ((lon + 540) % 360) - 180
      return [lon, Math.max(-85, Math.min(85, iss.cur[1] + iss.vel[1] * age))]
    }

    function draw() {
      const c = size / 2, r = size / 2 - 22
      proj.rotate([lam, phi])
      ctx.clearRect(0, 0, size, size)

      const glow = ctx.createRadialGradient(c, c, r * 0.96, c, c, r * 1.22)
      glow.addColorStop(0, 'rgba(34,211,238,.28)')
      glow.addColorStop(1, 'rgba(34,211,238,0)')
      ctx.fillStyle = glow
      ctx.fillRect(0, 0, size, size)

      ctx.beginPath(); path(sphere); ctx.fillStyle = '#071530'; ctx.fill()
      ctx.beginPath(); path(grat); ctx.strokeStyle = 'rgba(255,255,255,.07)'; ctx.lineWidth = 0.6; ctx.stroke()

      if (land) {
        ctx.fillStyle = '#12304a'; ctx.strokeStyle = 'rgba(34,211,238,.35)'; ctx.lineWidth = 0.6
        land.forEach(f => { ctx.beginPath(); path(f); ctx.fill(); ctx.stroke() })
        ctx.fillStyle = '#0e7490'; ctx.strokeStyle = 'rgba(165,243,252,.85)'; ctx.lineWidth = 0.9
        india.forEach(f => { ctx.beginPath(); path(f); ctx.fill(); ctx.stroke() })
      }

      ctx.beginPath(); path(sphere); ctx.strokeStyle = 'rgba(34,211,238,.5)'; ctx.lineWidth = 1.5; ctx.stroke()

      if (iss.trail.length > 2) {
        ctx.beginPath(); path({ type: 'LineString', coordinates: iss.trail })
        ctx.strokeStyle = 'rgba(165,243,252,.55)'; ctx.lineWidth = 1.4; ctx.stroke()
      }

      let hit = null, hd = 14
      quakes.forEach((q, i) => {
        const cc = [q.lon, q.lat]
        if (!visibleAt(cc)) return
        const p = proj(cc)
        const base = Math.max(2, (q.mag - 4) * 5 + 3)
        const k = reduce ? 0.3 : ((t + i * 13) % 100) / 100
        ctx.beginPath(); ctx.arc(p[0], p[1], base + k * 16, 0, 7)
        ctx.strokeStyle = `rgba(248,113,113,${0.8 * (1 - k)})`; ctx.lineWidth = 1.3; ctx.stroke()
        ctx.beginPath(); ctx.arc(p[0], p[1], Math.max(2, base * 0.45), 0, 7)
        ctx.fillStyle = '#f87171'; ctx.fill()
        if (mouse) {
          const d = Math.hypot(mouse[0] - p[0], mouse[1] - p[1])
          if (d < hd) { hd = d; hit = q }
        }
      })
      if (hit !== lastHit) {
        lastHit = hit
        setHover(hit ? `M${hit.mag.toFixed(1)} · ${hit.place}` : null)
      }

      const ip = issNow()
      if (ip && visibleAt(ip)) {
        const q = proj(ip)
        ctx.beginPath(); ctx.arc(q[0], q[1], 8, 0, 7); ctx.fillStyle = 'rgba(165,243,252,.25)'; ctx.fill()
        ctx.beginPath(); ctx.arc(q[0], q[1], 3.5, 0, 7); ctx.fillStyle = '#e0ffff'; ctx.fill()
        ctx.font = '600 11px sans-serif'; ctx.fillStyle = '#a5f3fc'; ctx.fillText('ISS', q[0] + 10, q[1] + 4)
      }

      if (visibleAt(TN)) {
        const p = proj(TN), k = reduce ? 0.4 : (t % 90) / 90
        ctx.beginPath(); ctx.arc(p[0], p[1], 4 + k * 22, 0, 7)
        ctx.strokeStyle = `rgba(251,191,36,${0.8 * (1 - k)})`; ctx.lineWidth = 1.5; ctx.stroke()
        ctx.beginPath(); ctx.arc(p[0], p[1], 5, 0, 7)
        ctx.fillStyle = '#fbbf24'; ctx.fill(); ctx.strokeStyle = '#fff'; ctx.lineWidth = 1.5; ctx.stroke()
        ctx.font = '600 12px sans-serif'
        const label = temp === null ? 'Tamil Nadu' : `Tamil Nadu · ${Math.round(temp)}°C`
        const lw = ctx.measureText(label).width
        const lx = Math.min(p[0] + 10, size - lw - 18)
        ctx.fillStyle = 'rgba(5,8,22,.88)'; ctx.fillRect(lx, p[1] - 28, lw + 14, 20)
        ctx.fillStyle = '#fde68a'; ctx.fillText(label, lx + 7, p[1] - 14)
      }
    }

    function step() {
      t++
      if (tl !== null) {
        lam += (tl - lam) * 0.07; phi += (tp - phi) * 0.07
        if (Math.abs(lam - tl) < 0.2 && Math.abs(phi - tp) < 0.2) { tl = null; hold = 150 }
      } else if (hold > 0) hold--
      else if (!api.current.paused && !drag) lam += 0.2
      draw()
    }

    function loop() {
      if (dead || !visible || document.hidden || reduce) { looping = false; return }
      step()
      raf = requestAnimationFrame(loop)
    }
    function start() { if (!looping && !reduce) { looping = true; raf = requestAnimationFrame(loop) } }

    api.current.center = () => { tl = -TN[0]; tp = -TN[1]; if (reduce) { lam = tl; phi = tp; draw() } }

    // ---- live data ----
    async function pullQuakes() {
      if (document.hidden) return
      try {
        const j = await getJSON(QUAKES_URL)
        if (dead) return
        quakes = j.features.map(f => ({
          mag: f.properties.mag, place: f.properties.place || 'Unknown location',
          lon: f.geometry.coordinates[0], lat: f.geometry.coordinates[1],
        })).filter(q => typeof q.mag === 'number')
        const top = quakes.reduce((a, b) => (!a || b.mag > a.mag ? b : a), null)
        setQInfo({ count: quakes.length, top, at: Date.now() })
        setStat('q', 'live')
        if (reduce) draw()
      } catch (e) { if (!dead) setStat('q', 'offline') }
    }

    async function pullISS() {
      if (document.hidden) return
      try {
        const j = await getJSON(ISS_URL)
        if (dead) return
        const pos = [j.longitude, j.latitude]
        const prev = iss.cur, prevTs = iss.ts
        if (prev && j.timestamp > prevTs) {
          const dt = j.timestamp - prevTs
          iss.vel = [(((pos[0] - prev[0] + 540) % 360) - 180) / dt, (pos[1] - prev[1]) / dt]
        }
        iss.cur = pos; iss.ts = j.timestamp; iss.at = Date.now()
        iss.trail.push(pos)
        if (iss.trail.length > 90) iss.trail.shift()
        setIssInfo({ lat: j.latitude, lon: j.longitude, alt: j.altitude, vel: j.velocity })
        setStat('i', 'live')
        if (reduce) draw()
      } catch (e) { if (!dead) setStat('i', 'offline') }
    }

    async function pullWeather() {
      if (!WEATHER_ON || document.hidden) return
      try {
        const j = await getJSON(WX_URL)
        if (dead) return
        const c = j.current
        temp = c.temperature_2m
        setWxInfo({ t: c.temperature_2m, rh: c.relative_humidity_2m, text: wxText(c.weather_code), at: Date.now() })
        setStat('w', 'live')
        if (reduce) draw()
      } catch (e) { if (!dead) setStat('w', 'offline') }
    }

    pullQuakes(); pullISS(); pullWeather()
    const iq = setInterval(pullQuakes, 60000)
    const ii = setInterval(pullISS, 5000)
    const iw = setInterval(pullWeather, 600000)
    const onVis = () => {
      if (!document.hidden) { start(); pullQuakes(); pullISS(); pullWeather() }
    }
    document.addEventListener('visibilitychange', onVis)

    const ro = new ResizeObserver(resize)
    ro.observe(wrap.current)
    resize()

    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; if (visible) start() }, { threshold: 0.05 })
    io.observe(cv)

    loadWorld().then(w => {
      if (dead) return
      const f = feature(w, w.objects.countries).features
      india = f.filter(x => Number(x.id) === 356)
      land = f.filter(x => Number(x.id) !== 356)
      setReady(true)
      if (reduce) draw(); else start()
    }).catch(() => { if (!dead) draw() })

    const down = e => { drag = { x: e.clientX, y: e.clientY }; tl = null; cv.setPointerCapture(e.pointerId) }
    const move = e => {
      const rc = cv.getBoundingClientRect()
      mouse = [e.clientX - rc.left, e.clientY - rc.top]
      if (reduce) draw()
      if (!drag) return
      lam += (e.clientX - drag.x) * 0.4
      if (e.pointerType === 'mouse') phi = Math.max(-70, Math.min(70, phi - (e.clientY - drag.y) * 0.4))
      drag = { x: e.clientX, y: e.clientY }
    }
    const leave = () => { mouse = null }
    const up = () => { drag = null; hold = 120 }
    cv.addEventListener('pointerdown', down)
    cv.addEventListener('pointermove', move)
    cv.addEventListener('pointerleave', leave)
    cv.addEventListener('pointerup', up)
    cv.addEventListener('pointercancel', up)

    return () => {
      dead = true
      cancelAnimationFrame(raf)
      clearInterval(iq); clearInterval(ii); clearInterval(iw)
      ro.disconnect(); io.disconnect()
      document.removeEventListener('visibilitychange', onVis)
      cv.removeEventListener('pointerdown', down)
      cv.removeEventListener('pointermove', move)
      cv.removeEventListener('pointerleave', leave)
      cv.removeEventListener('pointerup', up)
      cv.removeEventListener('pointercancel', up)
    }
  }, [])

  const dir = (v, pos, neg) => `${Math.abs(v).toFixed(1)}°${v >= 0 ? pos : neg}`
  const defaultLine = qInfo && qInfo.top ? `Strongest: M${qInfo.top.mag.toFixed(1)} · ${qInfo.top.place}` : 'Hover a red pulse for details'

  return (
    <div ref={wrap} className="w-full max-w-lg mx-auto text-center">
      <canvas
        ref={cvRef}
        role="img"
        aria-label="Rotating globe with a pin on Tamil Nadu, India, showing recent earthquakes and the International Space Station"
        className={`mx-auto cursor-grab active:cursor-grabbing transition-opacity duration-700 ${ready ? 'opacity-100' : 'opacity-0'}`}
        style={{ touchAction: 'pan-y' }}
      />

      <div className="flex items-center justify-center gap-2 mt-3 text-sm flex-wrap">
        <span className="inline-flex items-center gap-2 text-amber-200 font-mono text-xs">
          <span className="w-2 h-2 rounded-full bg-amber-300" aria-hidden="true" />
          Tamil Nadu, India
        </span>
        <button
          onClick={() => api.current.center && api.current.center()}
          className="text-xs px-3 py-1 rounded-full border border-white/25 text-gray-200 hover:border-cyan-400 hover:text-cyan-300 transition"
        >
          Center on Tamil Nadu
        </button>
        <button
          onClick={() => setPaused(p => !p)}
          aria-pressed={paused}
          className="text-xs px-3 py-1 rounded-full border border-white/25 text-gray-200 hover:border-cyan-400 hover:text-cyan-300 transition"
        >
          {paused ? 'Resume' : 'Pause'}
        </button>
      </div>

      <div className={`grid gap-2 mt-3 ${st.w === 'off' ? 'grid-cols-2' : 'grid-cols-3'}`}>
        <Stat
          label="Quakes 24h · M4.5+"
          status={st.q}
          value={qInfo ? qInfo.count : '…'}
          sub={st.q === 'offline' ? 'feed unavailable' : <>USGS · <Ago at={qInfo && qInfo.at} /></>}
        />
        <Stat
          label="ISS position"
          status={st.i}
          value={issInfo ? `${dir(issInfo.lat, 'N', 'S')} ${dir(issInfo.lon, 'E', 'W')}` : '…'}
          sub={st.i === 'offline' ? 'feed unavailable' : issInfo ? `${Math.round(issInfo.vel).toLocaleString()} km/h · ${Math.round(issInfo.alt)} km up` : 'locating'}
        />
        {st.w !== 'off' && (
          <Stat
            label="Chennai now"
            status={st.w}
            value={wxInfo ? `${Math.round(wxInfo.t)}°C` : '…'}
            sub={st.w === 'offline' ? 'feed unavailable' : wxInfo ? `${wxInfo.text} · ${Math.round(wxInfo.rh)}% humidity` : 'loading'}
          />
        )}
      </div>

      <p className="text-[11px] text-gray-300 mt-2 min-h-[1.1rem] truncate" aria-live="off">{hover || defaultLine}</p>
      <p className="text-[10px] text-gray-500 mt-1">
        Live data: USGS, wheretheiss.at{st.w !== 'off' ? ', Open-Meteo' : ''} · borders from Natural Earth · drag to spin
      </p>
    </div>
  )
}
