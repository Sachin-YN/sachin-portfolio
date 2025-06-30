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
      {/* HERO */}
      <section className="max-w-4xl mx-auto p-6 bg-navy/80 backdrop-blur-sm rounded-xl my-8">
        <h1 className="text-4xl font-extrabold mb-4 text-electric-blue">
          Welcome to Sachiny.me!
        </h1>
        <p className="mb-6 text-white">
          I’m Sachin Yadav, a Data Analyst who turns raw numbers into interactive stories.
        </p>
        <div className="flex space-x-4">
          <Link
            href="/projects"
            className="px-5 py-2 bg-electric-blue text-black rounded hover:bg-electric-blue/80"
          >
            Projects
          </Link>
          <Link
            href="#contact"
            className="px-5 py-2 bg-electric-blue/50 text-white rounded hover:bg-electric-blue/70"
          >
            Contact Me
          </Link>
        </div>
      </section>

      {/* SKILLS & DATA STACK */}
      <section className="max-w-4xl mx-auto p-6 bg-navy/80 backdrop-blur-sm rounded-xl my-8">
        <h2 className="text-3xl font-semibold mb-4 text-electric-blue">
          Skills & Data Stack
        </h2>
        <ul className="list-none space-y-4">
          <li className="flex items-start space-x-3">
            <FaDatabase className="mt-1 text-electric-blue" />
            <div className="text-white">
              <strong>Programming &amp; Analysis:</strong> SQL (MySQL, PostgreSQL), Python
              (BeautifulSoup, Pandas, NumPy), R (Basic), Excel (PivotTables, VLOOKUP,
              Conditional Formatting)
            </div>
          </li>
          <li className="flex items-start space-x-3">
            <FaChartBar className="mt-1 text-electric-blue" />
            <div className="text-white">
              <strong>Data Visualization:</strong> Tableau, Power BI, Matplotlib, Seaborn
            </div>
          </li>
          <li className="flex items-start space-x-3">
            <FaPaintBrush className="mt-1 text-electric-blue" />
            <div className="text-white">
              <strong>Design &amp; Productivity:</strong> Figma, Adobe Illustrator,
              Photoshop, Notion, Asana
            </div>
          </li>
        </ul>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="max-w-4xl mx-auto p-6 bg-navy/80 backdrop-blur-sm rounded-xl my-8 text-center"
      >
        <h2 className="text-3xl font-semibold mb-4 text-electric-blue">
          Get in Touch
        </h2>
        <div className="flex justify-center space-x-6">
          <a
            href="mailto:you@sachiny.me"
            className="px-6 py-2 bg-electric-blue text-black rounded hover:bg-electric-blue/80"
          >
            Email Me
          </a>
          <a
            href="https://linkedin.com/in/ing-sachin-yoganandham"
            className="text-electric-blue hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Sachin-YN"
            className="text-electric-blue hover:underline"
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
