import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const stages = [
  {
    n: '01',
    title: 'Source',
    text: 'Pull data from the systems the business actually runs on.',
    tools: ['SAP HANA', 'SAP CRM', 'Oracle', 'MySQL', 'Dynamics 365'],
  },
  {
    n: '02',
    title: 'Model',
    text: 'Clean, join and shape it into something people can trust.',
    tools: ['Snowflake', 'SQL', 'Python', 'Pandas', 'NumPy'],
  },
  {
    n: '03',
    title: 'Visualize',
    text: 'Turn it into dashboards that people actually open.',
    tools: ['Power BI', 'Tableau', 'Qlik', 'Excel'],
  },
  {
    n: '04',
    title: 'Decide',
    text: 'Forecast, automate and hand over a clear next step.',
    tools: ['Forecasting', 'Power Automate'],
  },
]

export default function PipelineSection() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = setInterval(() => setActive(a => (a + 1) % stages.length), 2200)
    return () => clearInterval(id)
  }, [])

  return (
    <section id="how-i-work" className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <p className="font-mono text-cyan-300 text-sm mb-2">how I work</p>
        <h2 className="text-3xl font-semibold text-white">
          From raw data to <span className="gradient-text">a clear decision</span>
        </h2>
      </motion.div>

      {/* progress track (desktop) */}
      <div className="hidden md:block relative h-1 rounded-full bg-white/10 mb-6 mx-[12.5%]" aria-hidden="true">
        <div
          className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-cyan-400 to-indigo-400 transition-all duration-700"
          style={{ width: `${(active / (stages.length - 1)) * 100}%` }}
        />
        {stages.map((s, i) => (
          <span
            key={s.n}
            className={`absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full border-2 transition-colors duration-500 ${
              i <= active ? 'bg-cyan-300 border-white' : 'bg-slate-800 border-white/30'
            }`}
            style={{ left: `${(i / (stages.length - 1)) * 100}%` }}
          />
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        {stages.map((s, i) => (
          <motion.div
            key={s.n}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            onMouseEnter={() => setActive(i)}
            className={`section-card p-5 text-left transition-all duration-500 ${
              i === active ? 'border-cyan-400/70 shadow-lg shadow-cyan-500/20 -translate-y-1' : ''
            }`}
          >
            <div className="font-mono text-xs text-cyan-300 mb-1">{s.n}</div>
            <h3 className="text-xl font-semibold text-white mb-2">{s.title}</h3>
            <p className="text-sm text-gray-300 mb-4">{s.text}</p>
            <div className="flex flex-wrap gap-1.5">
              {s.tools.map(t => (
                <span key={t} className="text-[11px] px-2 py-1 rounded-full bg-cyan-400/10 text-cyan-200 border border-cyan-400/20">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
