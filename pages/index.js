// pages/index.js
import Layout from '../components/Layout'
import { motion } from 'framer-motion'
import Typewriter from 'typewriter-effect'
import Link from 'next/link'
import Image from 'next/image'

// React-Icon imports for the rest
import {
  SiMicrosoftexcel,
  SiPowerbi,
  SiQlik,
  SiTableau,
  SiSap,
  SiSnowflake,
  SiOracle,
  SiPostgresql,
} from 'react-icons/si'
import {
  FaProjectDiagram,
  FaRobot,
  FaMicrosoft,
  FaChartLine,
  FaBrain,
  FaFlask,
} from 'react-icons/fa'

// Define your data stack
const dataStack = [
  {
    name: 'Python',
    useImg: true,
    imgSrc: '/icons/python.png',
  },
  {
    name: 'SQL',
    useImg: true,
    imgSrc: '/icons/sql.png',
  },
  {
    name: 'R',
    Icon: FaChartLine,
    color: '#276DC3',
  },
  {
    name: 'Excel',
    Icon: SiMicrosoftexcel,
    color: '#217346',
  },
  {
    name: 'Power BI',
    Icon: SiPowerbi,
    color: '#F2C811',
  },
  {
    name: 'Qlik',
    Icon: SiQlik,
    color: '#0066CC',
  },
  {
    name: 'Tableau',
    Icon: SiTableau,
    color: '#E97627',
  },
  {
    name: 'SAP HANA',
    Icon: SiSap,
    color: '#1CABE2',
  },
  {
    name: 'Snowflake',
    Icon: SiSnowflake,
    color: '#28A8E0',
  },
  {
    name: 'Oracle',
    Icon: SiOracle,
    color: '#FF0000',
  },
  {
    name: 'Data Mapping',
    Icon: FaProjectDiagram,
    color: '#6c757d',
  },
  {
    name: 'Power Automate',
    useImg: true,
    imgSrc: '/icons/power-automate.png',
  },
  {
    name: 'Dynamics 365',
    useImg: true,
    imgSrc: '/icons/dynamics-365.png',
  },
  {
    name: 'SAP CRM',
    Icon: SiSap,
    color: '#1CABE2',
  },
  {
    name: 'Forecasting',
    Icon: FaChartLine,
    color: '#6c757d',
  },
  {
    name: 'PostgreSQL',
    Icon: SiPostgresql,
    color: '#336791',
  },
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
                "Data-Driven Business Analyst",
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
          onClick={() =>
            document.getElementById('data-stack').scrollIntoView({ behavior: 'smooth' })
          }
          className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore My Data Stack
        </motion.button>
      </div>

      {/* DATA STACK GRID */}
      <motion.section
        id="data-stack"
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
          {dataStack.map((item) => (
            <div
              key={item.name}
              className="flex flex-col items-center p-4 bg-white/20 rounded-lg border-2 border-[#00ffff] hover:bg-white/30 transition"
            >
              {item.useImg ? (
                <Image
                  src={item.imgSrc}
                  alt={item.name}
                  width={48}
                  height={48}
                  className="mb-2"
                />
              ) : (
                <item.Icon size={48} color={item.color} className="mb-2" />
              )}
              <span className="text-white font-medium">{item.name}</span>
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
