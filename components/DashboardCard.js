import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const W = 320
const H = 110
const N = 24

function useCount(to, ms = 1400) {
  const [n, setN] = useState(0)
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setN(to); return }
    let raf
    const start = performance.now()
    const step = t => {
      const p = Math.min((t - start) / ms, 1)
      setN(to * (1 - Math.pow(1 - p, 3)))
      if (p < 1) raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [to, ms])
  return n
}

function Kpi({ label, value, decimals = 0, prefix = '', suffix = '', delta }) {
  const n = useCount(value)
  return (
    <div className="rounded-lg bg-white/5 border border-white/10 p-3 text-left">
      <div className="text-[10px] uppercase tracking-wider text-gray-400">{label}</div>
      <div className="text-xl font-bold text-white mt-1 tabular-nums">
        {prefix}{n.toFixed(decimals)}{suffix}
      </div>
      <div className="text-[11px] text-emerald-400 mt-0.5">▲ {delta}%</div>
    </div>
  )
}

// Illustrative only: every number here is sample data, not real results.
export default function DashboardCard() {
  const [series, setSeries] = useState(() => {
    let v = 50
    return Array.from({ length: N }, () => {
      v = Math.max(25, Math.min(90, v + (Math.random() - 0.4) * 14))
      return v
    })
  })
  const timer = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    timer.current = setInterval(() => {
      setSeries(s => {
        const next = Math.max(25, Math.min(90, s[s.length - 1] + (Math.random() - 0.4) * 14))
        return [...s.slice(1), next]
      })
    }, 1300)
    return () => clearInterval(timer.current)
  }, [])

  const pts = series.map((v, i) => [(i * W) / (N - 1), H - (v / 100) * H])
  const line = pts.map((p, i) => `${i ? 'L' : 'M'}${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(' ')
  const area = `${line} L${W},${H} L0,${H} Z`
  const last = pts[pts.length - 1]

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 0.9, duration: 0.8, ease: 'easeOut' }}
      className="section-card w-full max-w-md mx-auto p-4 shadow-2xl shadow-cyan-500/10"
      role="img"
      aria-label="Illustrative sample dashboard with animated sample data"
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-300/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
        </div>
        <span className="text-[10px] font-mono text-cyan-300 border border-cyan-400/30 rounded-full px-2 py-0.5">
          sample data
        </span>
      </div>

      <div className="grid grid-cols-3 gap-2 mb-3">
        <Kpi label="Revenue" prefix="$" value={1.28} decimals={2} suffix="M" delta="8.2" />
        <Kpi label="Forecast fit" value={94} suffix="%" delta="2.1" />
        <Kpi label="Orders" value={3.4} decimals={1} suffix="K" delta="5.7" />
      </div>

      <div className="rounded-lg bg-black/30 border border-white/10 p-2">
        <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-28" aria-hidden="true">
          <defs>
            <linearGradient id="dcFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#818cf8" stopOpacity="0" />
            </linearGradient>
          </defs>
          {[0.25, 0.5, 0.75].map(f => (
            <line key={f} x1="0" x2={W} y1={H * f} y2={H * f} stroke="rgba(255,255,255,.07)" />
          ))}
          <path d={area} fill="url(#dcFill)" />
          <path d={line} fill="none" stroke="#22d3ee" strokeWidth="2" strokeLinejoin="round" />
          <circle cx={last[0] - 2} cy={last[1]} r="6" fill="rgba(34,211,238,.25)" />
          <circle cx={last[0] - 2} cy={last[1]} r="3" fill="#e0ffff" />
        </svg>
        <div className="flex justify-between text-[10px] text-gray-400 px-1 mt-1 font-mono">
          <span>live trend</span>
          <span>illustrative</span>
        </div>
      </div>
    </motion.div>
  )
}
