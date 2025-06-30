// pages/projects.js
import Layout from '../components/Layout'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'
import { motion } from 'framer-motion'

const sampleData = [
  { name: 'Jan', value: 30 },
  { name: 'Feb', value: 45 },
  { name: 'Mar', value: 60 },
  { name: 'Apr', value: 75 },
  { name: 'May', value: 50 },
  { name: 'Jun', value: 90 },
]

export default function Projects() {
  return (
    <Layout title="Projects">
      <motion.section
        className="section-card max-w-4xl mx-auto p-6 my-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl font-bold mb-4">My Projects</h1>
        <p className="mb-6">
          Here’s a snapshot of performance metrics from a recent dashboard project.
        </p>
        <div className="w-full h-64">
          <ResponsiveContainer>
            <LineChart data={sampleData}>
              <XAxis dataKey="name" stroke="#333" />
              <YAxis stroke="#333" />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#1D4ED8" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </motion.section>
    </Layout>
  )
}
