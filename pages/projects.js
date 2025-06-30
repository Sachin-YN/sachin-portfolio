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
      <h1 className="text-3xl font-semibold mb-4">My Projects</h1>
      <div className="w-full h-64">
        <ResponsiveContainer>
          <LineChart data={sampleData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#3182ce" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Layout>
  )
}
