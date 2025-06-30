import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout title="Home">
      <h1 className="text-4xl font-bold mb-4">Welcome to Sachiny.me!</h1>
      <p className="mb-2">
        Hi, I’m Sachin Yoganandham, a Data Analyst specializing in interactive dashboards and data storytelling.
      </p>
      <p>
        Check out my <a href="/projects" className="text-blue-600 hover:underline">Projects</a> below.
      </p>
    </Layout>
  )
}
