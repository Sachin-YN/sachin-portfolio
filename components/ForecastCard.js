import { useEffect, useMemo, useRef, useState } from 'react'
import { motion } from 'framer-motion'

/*
  Real data: the classic "international airline passengers" series
  (Box, Jenkins & Reinsel), monthly totals in thousands, Jan 1949 - Dec 1960.
  Everything else (trend, seasonality, forecast) is computed from it below.
*/
const D = [
  112,118,132,129,121,135,148,148,136,119,104,118,
  115,126,141,135,125,149,170,170,158,133,114,140,
  145,150,178,163,172,178,199,199,184,162,146,166,
  171,180,193,181,183,218,230,242,209,191,172,194,
  196,196,236,235,229,243,264,272,237,211,180,201,
  204,188,235,227,234,264,302,293,259,229,203,229,
  242,233,267,269,270,315,364,347,312,274,237,278,
  284,277,317,313,318,374,413,405,355,306,271,306,
  315,301,356,348,355,422,465,467,404,347,305,336,
  340,318,362,348,363,435,491,505,404,359,310,337,
  360,342,406,396,420,472,548,559,463,407,362,405,
  417,391,419,461,472,535,622,606,508,461,390,432,
]
const L = 12
const H_AHEAD = 24
const MONTHS = ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D']

// Holt-Winters (multiplicative); parameters were fitted offline by minimising one-step error
function holtWinters(y, a, b, g, h) {
  const n = y.length
  const m1 = y.slice(0, L).reduce((p, c) => p + c, 0) / L
  const m2 = y.slice(L, 2 * L).reduce((p, c) => p + c, 0) / L
  let lev = m1, tr = (m2 - m1) / L
  const s = y.slice(0, L).map(v => v / m1)
  let sse = 0, cnt = 0
  for (let t = L; t < n; t++) {
    const f = (lev + tr) * s[t - L]
    sse += (y[t] - f) ** 2; cnt++
    const nl = a * (y[t] / s[t - L]) + (1 - a) * (lev + tr)
    tr = b * (nl - lev) + (1 - b) * tr
    s.push(g * (y[t] / nl) + (1 - g) * s[t - L])
    lev = nl
  }
  const fc = []
  for (let k = 1; k <= h; k++) fc.push((lev + k * tr) * s[n - L + ((k - 1) % L)])
  return { fc, rmse: Math.sqrt(sse / cnt) }
}

function analyse() {
  const n = D.length
  const trend = []
  for (let i = 6; i <= n - 7; i++) {
    let s = 0
    for (let k = -6; k <= 6; k++) s += (k === -6 || k === 6 ? 0.5 : 1) * D[i + k]
    trend.push([i, s / 12])
  }
  const idx = Array(12).fill(0), cnt = Array(12).fill(0)
  trend.forEach(([i, t]) => { idx[i % 12] += D[i] / t; cnt[i % 12]++ })
  const raw = idx.map((v, i) => v / cnt[i])
  const mean = raw.reduce((a, b) => a + b, 0) / 12
  const seasonal = raw.map(v => v / mean)
  const { fc, rmse } = holtWinters(D, 0.25, 0.04, 0.8, H_AHEAD)
  return { trend, seasonal, fc, rmse }
}

const W = 360, H = 150, PL = 8, PR = 8, PT = 10, PB = 18
const TOTAL = D.length + H_AHEAD
const X = i => PL + (i * (W - PL - PR)) / (TOTAL - 1)
const Y = v => PT + (1 - v / 700) * (H - PT - PB)
const line = pts => pts.map((p, i) => `${i ? 'L' : 'M'}${X(p[0]).toFixed(1)},${Y(p[1]).toFixed(1)}`).join(' ')

const STEPS = ['Actuals', 'Trend', 'Seasonality', 'Forecast']

export default function ForecastCard() {
  const { trend, seasonal, fc, rmse } = useMemo(analyse, [])
  const [step, setStep] = useState(0)
  const touched = useRef(false)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setStep(3); return }
    const id = setInterval(() => {
      if (!touched.current) setStep(s => (s + 1) % STEPS.length)
    }, 3600)
    return () => clearInterval(id)
  }, [])

  const actual = D.map((v, i) => [i, v])
  const fcPts = [[D.length - 1, D[D.length - 1]], ...fc.map((v, k) => [D.length + k, v])]
  const upper = fc.map((v, k) => [D.length + k, v + 1.28 * rmse * Math.sqrt(k + 1)])
  const lower = fc.map((v, k) => [D.length + k, v - 1.28 * rmse * Math.sqrt(k + 1)])
  const band = `${line([[D.length - 1, D[D.length - 1]], ...upper])} ${[...lower].reverse().map(p => `L${X(p[0]).toFixed(1)},${Y(p[1]).toFixed(1)}`).join(' ')} Z`

  const summer = Math.round(((seasonal[6] + seasonal[7]) / 2 - 1) * 100)
  const nov = Math.round((1 - seasonal[10]) * 100)
  const insights = [
    `Monthly airline passengers, 1949–1960: demand grew about ${Math.round(D[D.length - 1] / D[0])}× in twelve years.`,
    'A 12-month moving average smooths out the seasonal swings and reveals the underlying growth trend.',
    `The pattern repeats every year: July and August run about ${summer}% above the yearly average, November about ${nov}% below.`,
    'Holt-Winters learns level, trend and seasonality, then projects 24 months ahead with an approximate 80% range.',
  ]

  const pick = i => { touched.current = true; setStep(i) }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 0.9, duration: 0.8, ease: 'easeOut' }}
      className="section-card w-full max-w-md mx-auto p-4 shadow-2xl shadow-cyan-500/10"
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-300/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
        </div>
        <span className="text-[10px] font-mono text-cyan-300 border border-cyan-400/30 rounded-full px-2 py-0.5">
          real data · forecasting demo
        </span>
      </div>

      <div className="text-left mb-2">
        <div className="text-sm font-semibold text-white">Air passengers per month</div>
        <div className="text-[11px] text-gray-400">thousands · Jan 1949 – Dec 1960, then a 24-month forecast</div>
      </div>

      <div className="flex gap-1.5 mb-2" role="group" aria-label="Forecasting steps">
        {STEPS.map((s, i) => (
          <button
            key={s}
            onClick={() => pick(i)}
            aria-pressed={step === i}
            className={`flex-1 text-[11px] py-1 rounded-md border transition ${
              step === i
                ? 'bg-cyan-400 text-slate-900 border-cyan-300 font-semibold'
                : 'bg-white/5 text-gray-300 border-white/15 hover:border-cyan-400/60'
            }`}
          >
            {i + 1}. {s}
          </button>
        ))}
      </div>

      <div className="rounded-lg bg-black/30 border border-white/10 p-2">
        <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" role="img"
          aria-label="Line chart of monthly airline passengers from 1949 to 1960 with trend, seasonality and a 24-month forecast">
          {[0, 200, 400, 600].map(v => (
            <line key={v} x1={PL} x2={W - PR} y1={Y(v)} y2={Y(v)} stroke="rgba(255,255,255,.07)" />
          ))}
          {[[12, '1950'], [72, '1955'], [132, '1960']].map(([i, t]) => (
            <text key={t} x={X(i)} y={H - 4} textAnchor="middle" fontSize="9" fill="#94a3b8">{t}</text>
          ))}

          {step === 3 && (
            <>
              <line x1={X(D.length - 1)} x2={X(D.length - 1)} y1={PT} y2={H - PB} stroke="rgba(251,191,36,.35)" strokeDasharray="3 3" />
              <motion.path key="band" d={band} fill="rgba(251,191,36,.18)" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 0.8 }} />
              <motion.path key="fc" d={line(fcPts)} fill="none" stroke="#fbbf24" strokeWidth="2" strokeDasharray="5 3"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.2 }} />
            </>
          )}

          <motion.path d={line(actual)} fill="none" stroke="#22d3ee" strokeWidth="1.8" strokeLinejoin="round"
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.6, ease: 'easeOut' }} />

          {step >= 1 && (
            <motion.path key={`trend-${step === 1}`} d={line(trend)} fill="none" stroke="#a5b4fc" strokeWidth="2.6" strokeLinecap="round"
              initial={{ pathLength: step === 1 ? 0 : 1 }} animate={{ pathLength: 1 }} transition={{ duration: 1.2 }} />
          )}
        </svg>

        <div className="flex items-center gap-3 px-1 text-[10px] text-gray-300 font-mono flex-wrap">
          <span><i className="inline-block w-3 h-0.5 bg-cyan-400 align-middle mr-1" />actual</span>
          {step >= 1 && <span><i className="inline-block w-3 h-0.5 bg-indigo-300 align-middle mr-1" />trend</span>}
          {step === 3 && <span><i className="inline-block w-3 h-0.5 bg-amber-400 align-middle mr-1" />forecast</span>}
        </div>
      </div>

      {/* seasonal profile: average month vs. yearly average */}
      <div className={`mt-2 rounded-lg bg-black/30 border border-white/10 px-2 pt-1 pb-1 transition-opacity duration-500 ${step === 2 ? 'opacity-100' : 'opacity-40'}`}>
        <svg viewBox="0 0 360 52" className="w-full h-auto" aria-hidden="true">
          <line x1="8" x2="352" y1="16" y2="16" stroke="rgba(255,255,255,.35)" strokeDasharray="3 3" />
          {seasonal.map((v, i) => {
            const h = v * 28
            return (
              <g key={i}>
                <rect
                  x={14 + i * 28.5} y={44 - h} width="20" height={h} rx="3"
                  fill={i === 6 || i === 7 ? '#fbbf24' : '#22d3ee'}
                  style={{
                    transform: `scaleY(${step === 2 ? 1 : 0.15})`,
                    transformOrigin: '50% 100%',
                    transformBox: 'fill-box',
                    transition: `transform .8s ease-out ${i * 40}ms`,
                  }}
                />
                <text x={24 + i * 28.5} y="50" textAnchor="middle" fontSize="8" fill="#94a3b8">{MONTHS[i]}</text>
              </g>
            )
          })}
        </svg>
        <div className="text-[10px] text-gray-400 font-mono px-1">typical month vs. yearly average (dashed)</div>
      </div>

      <p className="text-xs text-gray-200 text-left mt-3 min-h-[3.2rem]" aria-live="polite">{insights[step]}</p>
      <p className="text-[10px] text-gray-500 text-left mt-1">
        Data: Box, Jenkins &amp; Reinsel, monthly international airline passengers. Trend, seasonality and forecast computed in your browser.
      </p>
    </motion.div>
  )
}
