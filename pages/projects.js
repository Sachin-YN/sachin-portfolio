// pages/projects.js
import { useRef } from 'react'
import Layout from '../components/Layout'
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'
import { motion, useInView } from 'framer-motion'
import Tilt from 'react-parallax-tilt'

/*
  ADD YOUR CASE STUDIES HERE. Each one becomes an animated card.
  Example:
  {
    title: 'Sales Forecasting Dashboard',
    problem: 'Reporting was manual and slow.',
    action: 'Built an automated Power BI model fed by Snowflake.',
    result: 'Report prep time dropped from days to minutes.',
    tools: ['Power BI', 'Snowflake', 'SQL'],
    link: 'https://github.com/Sachin-YN/...',
  }
*/
const projects = []

const sampleData = [
  { name: 'Jan', value: 30 }, { name: 'Feb', value: 45 }, { name: 'Mar', value: 60 },
  { name: 'Apr', value: 75 }, { name: 'May', value: 50 }, { name: 'Jun', value: 90 },
]

export default function Projects() {
  const chartRef = useRef(null)
  const inView = useInView(chartRef, { once: true, amount: 0.4 })

  return (
    <Layout title="Projects">
      <motion.section
        className="section-card max-w-4xl mx-auto p-6 my-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl font-bold mb-2 gradient-text inline-block">My Projects</h1>
        <p className="mb-6 text-gray-300">
          A snapshot of performance metrics from a recent dashboard project (sample data).
        </p>
        <div ref={chartRef} className="w-full h-64">
          {inView && (
            <ResponsiveContainer>
              <AreaChart data={sampleData}>
                <defs>
                  <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#22d3ee" stopOpacity={0.6} />
                    <stop offset="100%" stopColor="#818cf8" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" stroke="#cbd5e1" />
                <YAxis stroke="#cbd5e1" />
                <Tooltip contentStyle={{ background: '#0f172a', border: '1px solid #334155', color: '#fff' }} />
                <Area type="monotone" dataKey="value" stroke="#22d3ee" strokeWidth={2} fill="url(#g)" animationDuration={1800} />
              </AreaChart>
            </ResponsiveContainer>
          )}
        </div>
      </motion.section>

      <section className="max-w-4xl mx-auto px-4 grid gap-6 sm:grid-cols-2">
        {projects.map((p, i) => (
          <Tilt key={p.title} tiltMaxAngleX={5} tiltMaxAngleY={5} glareEnable glareMaxOpacity={0.05}>
            <motion.article
              className="section-card p-6 h-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <h2 className="text-xl font-semibold mb-3">{p.title}</h2>
              <p className="text-sm text-gray-300 mb-1"><b className="text-cyan-400">Problem:</b> {p.problem}</p>
              <p className="text-sm text-gray-300 mb-1"><b className="text-cyan-400">Action:</b> {p.action}</p>
              <p className="text-sm text-gray-300 mb-3"><b className="text-cyan-400">Result:</b> {p.result}</p>
              <div className="flex flex-wrap gap-2">
                {p.tools?.map(t => <span key={t} className="text-xs px-2 py-1 rounded-full bg-cyan-400/15 text-cyan-300">{t}</span>)}
              </div>
              {p.link && <a href={p.link} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 text-sm text-cyan-400 hover:underline">View project →</a>}
            </motion.article>
          </Tilt>
        ))}
        {projects.length === 0 && (
          <div className="section-card p-6 text-center text-gray-300 sm:col-span-2">
            More case studies are on the way. Check back soon.
          </div>
        )}
      </section>
    </Layout>
  )
}
