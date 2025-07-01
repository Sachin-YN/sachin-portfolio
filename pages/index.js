// pages/index.js
import Layout from '../components/Layout'
import { motion } from 'framer-motion'
import Typewriter from 'typewriter-effect'
import Link from 'next/link'

// Logos from react-icons
import {
  SiPython,
  SiPostgresql,
  SiMicrosoftexcel,
  SiPowerbi,
  SiQlik,
  SiTableau,
  SiSap,
  SiSnowflake,
  SiOracle,
  SiMicrosoftpowerautomate,
} from 'react-icons/si'
import {
  FaDatabase,
  FaProjectDiagram,
  FaCogs,
  FaBrain,
  FaChartLine,
  FaFlask,
} from 'react-icons/fa'

// Flattened list of skills with logos
const skills = [
  { name: 'Python',        Icon: SiPython },
  { name: 'SQL',           Icon: FaDatabase },
  { name: 'R',             Icon: FaChartLine },
  { name: 'Excel',         Icon: SiMicrosoftexcel },
  { name: 'Power BI',      Icon: SiPowerbi },
  { name: 'Qlik',          Icon: SiQlik },
  { name: 'Tableau',       Icon: SiTableau },
  { name: 'SAP HANA',      Icon: SiSap },
  { name: 'Snowflake',     Icon: SiSnowflake },
  { name: 'Oracle R12',    Icon: SiOracle },
  { name: 'Data Mapping',  Icon: FaProjectDiagram },
  { name: 'Master-Data',   Icon: FaCogs },
  { name: 'Power Automate',Icon: SiMicrosoftpowerautomate },
  { name: 'Regression',    Icon: FaChartLine },
  { name: 'Predictive',    Icon: FaBrain },
  { name: 'A/B Testing',   Icon: FaFlask },
]

export default function Home() {
  return (
    <Layout title="Home">
      {/* HERO */}
      <div className="h-screen flex flex-col items-center justify-center text-center px-4">
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
          Explore My Data Stack
        </motion.button>
      </div>

      {/* DATA STACK GRID */}
      <motion.section
        id="skills"
        className="py-16 bg-white/10 backdrop-blur-md"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl text-center text-white font-semibold mb-8">
          Data Stack
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 px-4">
          {skills.map(({ name, Icon }) => (
            <div
              key={name}
              className="flex flex-col items-center p-4 bg-white/20 rounded-lg border-2 border-[#00ffff] hover:bg-white/30 transition"
            >
              <Icon size={48} className="text-[#00ffff] mb-2" />
              <span className="text-white font-medium">{name}</span>
            </div>
          ))}
        </div>
      </motion.section>

      {/* ACHIEVEMENTS */}
      <motion.section
        id="achievements"
        className="py-16 max-w-4xl mx-auto text-center"
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
