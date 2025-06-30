// pages/index.js
import Layout from '../components/Layout'
import Link from 'next/link'
import { 
  FaDatabase,     // for Programming & Analysis
  FaChartBar,     // for Data Visualization
  FaPaintBrush    // for Design & Productivity
} from 'react-icons/fa'

export default function Home() {
  return (
    <Layout title="Home">
      {/* Hero Section */}
      <section className="text-center py-12">
        <h1 className="text-5xl font-extrabold mb-4 text-neon-pink">
          Welcome to Sachiny.me!
        </h1>
        <p className="mb-6">
          I’m Sachin Yadav, a Data Analyst who turns raw numbers into interactive stories.
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            href="/projects"
            className="px-6 py-3 bg-neon-blue text-black font-semibold rounded hover:bg-neon-blue/80"
          >
            Projects
          </Link>
          <Link
            href="#contact"
            className="px-6 py-3 bg-neon-green text-black font-semibold rounded hover:bg-neon-green/80"
          >
            Contact Me
          </Link>
        </div>
      </section>

      {/* Skills & Data Stack (with icons) */}
      <section className="py-8 px-4 max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4 text-neon-green">
          Skills & Data Stack
        </h2>
        <ul className="space-y-4">
          <li className="flex items-start space-x-3">
            <FaDatabase className="mt-1 text-neon-pink w-6 h-6 flex-shrink-0" />
            <div>
              <strong>Programming &amp; Analysis:</strong>{' '}
              SQL (MySQL, PostgreSQL), Python (BeautifulSoup, Pandas, NumPy), R (Basic), Excel (PivotTables, VLOOKUP, Conditional Formatting)
            </div>
          </li>
          <li className="flex items-start space-x-3">
            <FaChartBar className="mt-1 text-neon-pink w-6 h-6 flex-shrink-0" />
            <div>
              <strong>Data Visualization:</strong>{' '}
              Tableau, Power BI, Matplotlib, Seaborn
            </div>
          </li>
          <li className="flex items-start space-x-3">
            <FaPaintBrush className="mt-1 text-neon-pink w-6 h-6 flex-shrink-0" />
            <div>
              <strong>Design &amp; Productivity:</strong>{' '}
              Figma, Adobe Illustrator, Photoshop, Notion, Asana
            </div>
          </li>
        </ul>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-8 text-center">
        <h2 className="text-3xl font-semibold mb-4 text-neon-orange">
          Get in Touch
        </h2>
        <div className="flex justify-center space-x-6">
          <a
            href="mailto:you@sachiny.me"
            className="px-6 py-3 bg-neon-pink text-black font-semibold rounded hover:bg-neon-pink/80"
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
