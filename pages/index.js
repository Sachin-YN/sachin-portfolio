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
import { FaProjectDiagram, FaMicrosoft, FaChartLine } from 'react-icons/fa'

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
              strings: ["I’m Sachin Yoganandham", "Data-Driven Business Analyst"],
              autoStart: true,
              loop: true,
              pauseFor: 2000,
            }}
          />
        </h1>
       <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl">
  <span className="font-semibold block">
    Turning complex metrics into clear stories
  </span>
  <span className="block">
    Transforming ERP, CRM & cloud data into actionable dashboards for strategic insights.
  </span>
</p>


        <motion.button
          type="button"
          aria-label="Scroll to Data Stack"
          onClick={() =>
            document.getElementById('data-stack').scrollIntoView({ behavior: 'smooth' })
          }
          className="px-6 py-3 bg-accent text-white rounded-md hover:bg-accent-dark transition text-base font-medium"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore My Data Stack
        </motion.button>
      </section>

      {/* DATA STACK GRID */}
     {/* TECH STACK GRID */}
<motion.section
  id="tech-stack"
  className="py-16 bg-transparent px-4 sm:px-6 md:px-8"
  aria-labelledby="tech-stack-heading"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
>
  <h2
    id="tech-stack-heading"
    className="text-3xl sm:text-4xl font-semibold text-center mb-10"
  >
    <span className="text-accent">Tech</span>{' '}
    <span className="text-white">Stack</span>
    <div className="mt-2 mx-auto w-16 h-1 bg-accent"></div>
  </h2>

  <div className="max-w-5xl mx-auto grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-8">
    {dataStack.map((item) => (
      <div
        key={item.name}
        role="button"
        tabIndex={0}
        aria-label={item.name}
        className="w-16 h-16 sm:w-20 sm:h-20 bg-white/5 hover:bg-white/10 transition-colors flex items-center justify-center rounded-lg"
      >
        {item.useImg ? (
          <img
            src={item.imgSrc}
            alt={`${item.name} logo`}
            width={32}
            height={32}
            className="object-contain"
          />
        ) : (
          <item.Icon size={32} color="white" />
        )}
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
            className="inline-block px-6 py-3 bg-accent text-white font-medium rounded-md shadow hover:bg-accent-dark transition text-base"
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
            aria-label="Drop me a line"
          >
            Drop Me a Line
          </a>
        </Link>
      </section>
    </Layout>
  )
}
