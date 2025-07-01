// pages/index.js
import Layout from '../components/Layout'
import { motion } from 'framer-motion'
import Typewriter from 'typewriter-effect'
import Tilt from 'react-parallax-tilt'
import Link from 'next/link'

// Import logos
import { 
  SiPython, SiPostgresql, SiMicrosoftexcel, SiPowerbi, SiQlik, SiTableau,
  SiSap, SiSnowflake, SiOracle 
} from 'react-icons/si'
import { 
  FaDatabase, FaProjectDiagram, FaCogs, FaRobot, FaChartLine, FaBrain, FaFlask 
} from 'react-icons/fa'

// Define your skill categories and items (with icons!)
const skillCategories = [
  {
    title: 'Languages & Scripting',
    items: [
      { name: 'Python', Icon: SiPython },
      { name: 'SQL',    Icon: FaDatabase },
      { name: 'R',      Icon: FaChartLine },
    ],
  },
  {
    title: 'Spreadsheet & Modeling',
    items: [
      { name: 'Excel', Icon: SiMicrosoftexcel },
    ],
  },
  {
    title: 'Data Visualization & BI',
    items: [
      { name: 'Power BI', Icon: SiPowerbi },
      { name: 'Qlik',     Icon: SiQlik },
      { name: 'Tableau',  Icon: SiTableau },
    ],
  },
  {
    title: 'Databases & Data Warehousing',
    items: [
      { name: 'SAP HANA', Icon: SiSap },
      { name: 'Snowflake',Icon: SiSnowflake },
      { name: 'Oracle R12', Icon: SiOracle },
    ],
  },
  {
    title: 'ETL & Data Management',
    items: [
      { name: 'Data Mapping', Icon: FaProjectDiagram },
      { name: 'Master-Data Governance', Icon: FaCogs },
    ],
  },
  {
    title: 'Automation & Integration',
    items: [
      { name: 'Power Automate', Icon: FaRobot },
      { name: 'Python scripting', Icon: SiPython },
    ],
  },
  {
    title: 'Statistical & Predictive Analytics',
    items: [
      { name: 'Regression Analysis', Icon: FaChartLine },
      { name: 'Predictive Modeling', Icon: FaBrain },
      { name: 'A/B Testing', Icon: FaFlask },
    ],
  },
]

export default function Home() {
  return (
    <Layout title="Home">
      {/* HERO WITH TYPEWRITER */}
      <div className="h-screen flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
          <Typewriter
            options={{
              strings: [
                "I’m Sachin Yoganandham",
                "Data-Driven Business Analyst"
              ],
              autoStart: true,
              loop: true,
              pauseFor: 2000,
            }}
          />
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mb-8">
          Leveraging ERP/CRM systems, cloud-data platforms & automated reporting to optimize workflows, inform C-suite strategy, and power better sourcing outcomes.
        </p>
        <motion.button
          onClick={() => {
            document.getElementById('skills').scrollIntoView({ behavior: 'smooth' })
          }}
          className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore My Skills
        </motion.button>
      </div>

      {/* SKILLS & DATA STACK */}
      <motion.section
        id="skills"
        className="py-16 bg-white/10 backdrop-blur-md"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl text-center text-white font-semibold mb-12">
          Skills &amp; Data Stack
        </h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {skillCategories.map(({ title, items }) => (
            <Tilt key={title} tiltMaxAngleX={10} tiltMaxAngleY={10}>
              <div className="p-6 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition">
                <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
                <ul className="space-y-3">
                  {items.map(({ name, Icon }) => (
                    <li key={name} className="flex items-center text-gray-100">
                      <Icon size={24} style={{ color: '#00ffff' }} className="mr-2" />
                      {name}
                    </li>
                  ))}
                </ul>
              </div>
            </Tilt>
          ))}
        </div>
      </motion.section>

      {/* ACHIEVEMENTS */}
      <motion.section
        id="achievements"
        className="py-16 max-w-4xl mx-auto px-6 md:px-0 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className="text-3xl font-semibold text-white mb-6">Achievements</h2>
        <a
          href="https://www.coursera.org/account/accomplishments/professional-cert/VD5HGNFKPBA4"
          target="_blank"
          rel="noreferrer"
          className="inline-block px-6 py-3 bg-green-500 text-white font-medium rounded-md shadow hover:bg-green-600 transition"
        >
          Google Data Analytics Professional Certificate
        </a>
      </motion.section>

      {/* CONTACT CTA */}
      <section className="py-16 text-center">
        <h2 className="text-3xl text-white font-semibold mb-4">Let’s Talk Data</h2>
        <Link href="mailto:contact@sachiny.me">
          <a className="inline-block px-8 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
            Email Me
          </a>
        </Link>
      </section>
    </Layout>
  )
}
