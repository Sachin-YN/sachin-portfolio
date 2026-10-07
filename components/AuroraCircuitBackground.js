import { useEffect, useRef } from 'react'

// Aurora glows + circuit traces with data pulses + live chart ribbons + cursor spotlight
export default function AuroraCircuitBackground() {
  const ref = useRef(null)

  useEffect(() => {
    const cv = ref.current
    const x = cv.getContext('2d')
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const G = 28
    let W = 0, H = 0, t = 0, raf, paths = []
    let mx = -999, my = -999, sx = -999, sy = -999

    const build = () => {
      W = cv.width = window.innerWidth
      H = cv.height = window.innerHeight
      const count = Math.max(8, Math.min(22, Math.floor(W / 70)))
      paths = Array.from({ length: count }, () => {
        let px = Math.floor((Math.random() * W) / G) * G
        let py = Math.floor((Math.random() * H * 0.8) / G) * G
        let horiz = Math.random() > 0.5
        const pts = [[px, py]]
        for (let s = 0; s < 9; s++) {
          const d = (Math.floor(Math.random() * 5) + 2) * G * (Math.random() > 0.5 ? 1 : -1)
          if (horiz) px += d; else py += d
          pts.push([px, py])
          horiz = !horiz
        }
        return { pts, t: Math.random() * 8, sp: 0.015 + Math.random() * 0.02 }
      })
    }

    const blob = (cx, cy, r, col) => {
      const g = x.createRadialGradient(cx, cy, 0, cx, cy, r)
      g.addColorStop(0, col)
      g.addColorStop(1, 'rgba(0,0,0,0)')
      x.fillStyle = g
      x.fillRect(0, 0, W, H)
    }

    const ribbon = (off, amp, col, a) => {
      x.beginPath()
      x.moveTo(0, H)
      for (let px = 0; px <= W; px += 10) {
        const y = H - 60 - off + Math.sin(px * 0.008 + t * 1.2 + off) * amp + Math.sin(px * 0.025 - t * 2 + off * 2) * amp * 0.35
        x.lineTo(px, y)
      }
      x.lineTo(W, H)
      x.closePath()
      const g = x.createLinearGradient(0, H - 200, 0, H)
      g.addColorStop(0, col + a + ')')
      g.addColorStop(1, col + '0)')
      x.fillStyle = g
      x.fill()
    }

    const draw = () => {
      t += 0.01
      x.fillStyle = '#050816'
      x.fillRect(0, 0, W, H)

      const m = Math.max(W, H)
      blob(W * 0.2 + Math.sin(t) * 80, H * 0.25 + Math.cos(t * 0.8) * 50, m * 0.5, 'rgba(8,145,178,.5)')
      blob(W * 0.8 + Math.cos(t * 0.7) * 80, H * 0.45 + Math.sin(t) * 60, m * 0.5, 'rgba(79,70,229,.45)')
      blob(W * 0.5 + Math.sin(t * 0.5) * 100, H * 0.98, m * 0.45, 'rgba(124,58,237,.38)')

      x.strokeStyle = 'rgba(255,255,255,.035)'
      x.lineWidth = 1
      for (let i = 0; i < W; i += G) { x.beginPath(); x.moveTo(i, 0); x.lineTo(i, H); x.stroke() }
      for (let j = 0; j < H; j += G) { x.beginPath(); x.moveTo(0, j); x.lineTo(W, j); x.stroke() }

      x.lineWidth = 1.2
      paths.forEach(p => {
        x.strokeStyle = 'rgba(34,211,238,.13)'
        x.beginPath()
        p.pts.forEach((q, i) => (i ? x.lineTo(q[0], q[1]) : x.moveTo(q[0], q[1])))
        x.stroke()
        if (!reduce) p.t += p.sp
        const n = p.pts.length - 1
        const i = Math.floor(p.t % n), f = p.t % 1
        const a = p.pts[i], b = p.pts[i + 1]
        const px = a[0] + (b[0] - a[0]) * f, py = a[1] + (b[1] - a[1]) * f
        x.fillStyle = 'rgba(165,180,252,.28)'
        x.beginPath(); x.arc(px, py, 7, 0, 7); x.fill()
        x.fillStyle = 'rgba(224,255,255,.9)'
        x.beginPath(); x.arc(px, py, 2, 0, 7); x.fill()
      })

      ribbon(34, 16, 'rgba(34,211,238,', 0.3)
      ribbon(12, 20, 'rgba(129,140,248,', 0.24)

      if (fine && mx > -900) {
        sx += (mx - sx) * 0.15; sy += (my - sy) * 0.15
        blob(sx, sy, 190, 'rgba(34,211,238,.17)')
      }

      const v = x.createRadialGradient(W / 2, H / 2, H * 0.35, W / 2, H / 2, m * 0.7)
      v.addColorStop(0, 'rgba(2,6,23,0)')
      v.addColorStop(1, 'rgba(2,6,23,.7)')
      x.fillStyle = v
      x.fillRect(0, 0, W, H)

      if (!reduce) raf = requestAnimationFrame(draw)
    }

    const move = e => { mx = e.clientX; my = e.clientY; if (sx < -900) { sx = mx; sy = my } }
    const resize = () => { build(); if (reduce) draw() }
    const vis = () => {
      if (reduce) return
      cancelAnimationFrame(raf)
      if (!document.hidden) draw()
    }

    build()
    draw()
    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', move)
    document.addEventListener('visibilitychange', vis)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', move)
      document.removeEventListener('visibilitychange', vis)
    }
  }, [])

  return <canvas ref={ref} aria-hidden="true" className="fixed inset-0 w-full h-full -z-10 bg-[#050816]" />
}
