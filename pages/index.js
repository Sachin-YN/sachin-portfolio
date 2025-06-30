// pages/index.js
import Layout from '../components/Layout'
import Link from 'next/link'
import {
  FaDatabase,
  FaChartBar,
  FaPaintBrush
} from 'react-icons/fa'

export default function Home() {
  return (
    <Layout title="Home">
      {/* Hero */}
      <section className="text-center py-12">
        <h1 className="text-5xl font-extrabold mb-4 text-neon-blue">
          Welcome to Sachiny.me!
        </h1>
        <p className="mb-6">
          I’m Sachin Yadav, a Data Analyst who turns raw numbers into interactive stories.
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            href="/projects"
            className="px-6 py-3 bg-neon-blue text-black font-semibold rounded hover:bg-neon-blue-dark"
          >
            Projects
          </Link>
          <Link
            href="#contact"
            className="px-6 py-3 bg-neon-blue-light text-black font-semibold rounded hover:bg-neon-blue"
          >
            Contact Me
          </Link>
        </div>
      </section>

      {/* Skills & Data Stack */}
      <section className="py-8 px-4 max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4 text-neon-blue">
          Skills & Data Stack
        </h2>
        <ul className="list-none space-y-4">
          <li className="flex items-start space-x-3">
            <FaDatabase className="mt-1 text-neon-blue" />
            <div>
              <strong>Programming & Analysis:</strong>{' '}
              SQL (MySQL, PostgreSQL), Python (BeautifulSoup, Pandas, NumPy), R (Basic), Excel (PivotTables, VLOOKUP, Conditional Formatting)
            </div>
          </li>
          <li className="flex items-start space-x-3">
            <FaChartBar className="mt-1 text-neon-blue" />
            <div>
              <strong>Data Visualization:</strong> Tableau, Power BI, Matplotlib, Seaborn
            </div>
          </li>
          <li className="flex items-start space-x-3">
            <FaPaintBrush className="mt-1 text-neon-blue" />
            <div>
              <strong>Design & Productivity:</strong> Figma, Adobe Illustrator, Photoshop, Notion, Asana
            </div>
          </li>
        </ul>
      </section>

      {/* Contact */}
      <section id="contact" className="py-8 text-center">
        <h2 className="text-3xl font-semibold mb-4 text-neon-blue">
          Get in Touch
        </h2>
        <div className="flex justify-center space-x-6">
          <a
            href="mailto:you@sachiny.me"
            className="px-6 py-3 bg-neon-blue-light text-black font-semibold rounded hover:bg-neon-blue"
          >
            Email Me
          </a>
          <a
            href="https://linkedin.com/in/ing-sachin-yoganandham"
            className="text-neon-blue hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Sachin-YN"
            className="text-neon-blue hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </section>
    </Layout>
)
}
