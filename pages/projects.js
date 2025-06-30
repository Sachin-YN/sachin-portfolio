// pages/projects.js
import Layout from '../components/Layout'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

const sampleData = [
  { name: 'Jan', value: 30 },
  { name: 'Feb', value: 45 },
  { name: 'Mar', value: 60 },
]

export default function Projects() {
  return (
    <Layout title="Projects">
      <h1 className="text-4xl font-bold mb-6 text-neon-blue text-center">
        My Projects
      </h1>
      <div className="w-full h-64">
        <ResponsiveContainer>
          <LineChart data={sampleData}>
            <XAxis dataKey="name" stroke="#fff" />
            <YAxis stroke="#fff" />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#00ffff" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Layout>
  )
}
