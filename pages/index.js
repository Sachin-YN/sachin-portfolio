// pages/index.js
import Layout from '../components/Layout'
import { motion } from 'framer-motion'
import Typewriter from 'typewriter-effect'
import Link from 'next/link'

// React-Icon imports
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
  FaMicrosoft,
  FaChartLine,
} from 'react-icons/fa'

const dataStack = [
  { name: 'Python', useImg: true, imgSrc: '/icons/python.jpg' },
  { name: 'SQL', useImg: true, imgSrc: '/icons/sql.png' },
  { name: 'R', Icon: FaChartLine, color: '#276DC3' },
  { name: 'Excel', Icon: SiMicrosoftexcel, color: '#217346' },
  { name: 'Power BI', Icon: SiPowerbi, color: '#F2C811' },
  { name: 'Qlik', Icon: SiQlik, color: '#0066CC' },
  { name: 'Tableau', Icon: SiTableau, color: '#E97627' },
  { name: 'SAP HANA', Icon: SiSap, color: '#1CABE2' },
  { name: 'Snowflake', Icon: SiSnowflake, color: '#28A8E0' },
  { name: 'Oracle', Icon: SiOracle, color: '#FF0000' },
  { name: 'Data Mapping', Icon: FaProjectDiagram, color: '#6c757d' },
  { name: 'Power Automate', useImg: true, imgSrc: '/icons/power automate.png' },
  { name: 'Dynamics 365', Icon: FaMicrosoft, color: '#107C10' },
  { name: 'SAP CRM', Icon: SiSap, color: '#1CABE2' },
  { name: 'Forecasting', Icon: FaChartLine, color: '#6c757d' },
  { name: 'PostgreSQL', Icon: SiPostgresql, color: '#336791' },
]

export default function Home() {
  return (
    <Layout title="Home">
      {/* HERO */}
      <section
        id="hero"
        className="min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8 space-y-6"
        aria-labelledby="hero-heading"
      >
        <h1
          id="hero-heading"
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white"
        >
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
        <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl">
          Leveraging ERP/CRM systems, cloud-data platforms & automated reporting to
          optimize workflows, inform C-suite strategy, and power better sourcing
          outcomes.
        </p>
        <motion.button
          type="button"
          aria-label="Scroll to Data Stack"
          onClick={() =>
            document
              .getElementById('data-stack')
              .scrollIntoView({ behavior: 'smooth' })
          }
          className="px-6 py-3 bg-accent text-white rounded-md hover:bg-accent-dark transition text-base font-medium"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore My Data Stack
        </motion.button>
      </section>

      {/* DATA STACK GRID */}
      <motion.section
        id="data-stack"
        className="py-16 bg-white/10 backdrop-blur-md px-4 sm:px-6 md:px-8"
        aria-labelledby="data-stack-heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2
          id="data-stack-heading"
          className="text-3xl text-center text-white font-semibold mb-8"
        >
          Data Stack
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {dataStack.map(item => (
            <div
              key={item.name}
              role="button"
              tabIndex={0}
              aria-label={item.name}
              className="flex flex-col items-center p-4 bg-white/20 rounded-lg border-2 border-accent hover:bg-white/30 transition focus:outline-none focus:ring-2 focus:ring-accent"
            >
              {item.useImg ? (
                <img
                  src={item.imgSrc}
                  alt={`${item.name} logo`}
                  width={48}
                  height={48}
                  className="mb-2"
                />
              ) : (
                <item.Icon size={48} color={item.color} className="mb-2" />
              )}
              <span className="text-white font-medium text-base">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </motion.section>

      {/* ACHIEVEMENTS */}
      <motion.section
        id="achievements"
        className="py-16 px-4 sm:px-6 md:px-8 max-w-xl mx-auto text-center"
        aria-labelledby="achievements-heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2
          id="achievements-heading"
          className="text-3xl font-semibold text-white mb-6"
        >
          Achievements
        </h2>
        <Link
          href="https://www.coursera.org/account/accomplishments/professional-cert/VD5HGNFKPBA4"
          passHref
        >
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-green-500 text-white font-medium rounded-md shadow hover:bg-green-600 transition text-base"
            aria-label="View Google Data Analytics Professional Certificate"
          >
            Google Data Analytics Professional Certificate
          </a>
        </Link>
      </motion.section>

      {/* CONTACT CTA */}
      <section
        id="contact"
        className="py-16 px-4 sm:px-6 md:px-8 text-center"
        aria-labelledby="contact-heading"
      >
        <h2
          id="contact-heading"
          className="text-3xl font-semibold text-white mb-6"
        >
          Got an idea or just want to chat tech?
        </h2>
        <Link href="mailto:contact@sachiny.me" passHref>
          <a
            className="inline-block px-6 py-3 bg-accent text-white rounded-md hover:bg-accent-dark transition text-base font-medium"
            aria-label="Email Sachin"
          >
            Drop Me a Line
          </a>
        </Link>
      </section>
    </Layout>
  )
}
