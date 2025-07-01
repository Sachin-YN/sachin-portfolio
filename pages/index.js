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
  SiPandas,
  SiNumpy,
  SiPlotly,
} from 'react-icons/si'
import { FaMicrosoft, FaChartLine } from 'react-icons/fa'

const dataStack = [
  // front-loaded as requested
  { name: 'MySQL',          useImg: true,       imgSrc: '/icons/mysql.png'     },
  { name: 'Snowflake',      Icon: SiSnowflake,   color: '#28A8E0'               },
  { name: 'Oracle',         Icon: SiOracle,      color: '#FF0000'               },

  // then the rest
  { name: 'Python',         useImg: true,       imgSrc: '/icons/python.jpg'    },
  { name: 'Pandas',         Icon: SiPandas,      color: '#150458'               },
  { name: 'NumPy',          Icon: SiNumpy,       color: '#013243'               },
  { name: 'SAP HANA',       Icon: SiSap,         color: '#1CABE2'               },
  { name: 'SAP CRM',        Icon: SiSap,         color: '#1CABE2'               },
  { name: 'Dynamics 365',   useImg: true,       imgSrc: '/icons/dynamics365.jpg' },
  { name: 'Power Automate', useImg: true,       imgSrc: '/icons/power automate.png' },
  { name: 'Power BI',       Icon: SiPowerbi,     color: '#F2C811'               },
  { name: 'Tableau',        Icon: SiTableau,     color: '#E97627'               },
  { name: 'Qlik',           Icon: SiQlik,        color: '#0066CC'               },
  { name: 'Excel',          Icon: SiMicrosoftexcel, color: '#217346'            },
  { name: 'Forecasting',    Icon: SiPlotly,      color: '#3F4C6B'               },
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
        <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl space-y-1">
          <span className="font-semibold block">
            Turning complex metrics into clear stories
          </span>
          <span className="block">
            Transforming ERP, CRM & cloud data into actionable dashboards for strategic insights.
          </span>
        </p>
        <motion.button
          type="button"
          aria-label="Scroll to Tech Stack"
          onClick={() =>
            document.getElementById('data-stack').scrollIntoView({ behavior: 'smooth' })
          }
          className="px-6 py-3 bg-accent text-white rounded-md hover:bg-accent-dark transition text-base font-medium"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore My Tech Stack
        </motion.button>
      </section>

      {/* TECH STACK GRID */}
      <motion.section
        id="data-stack"
        className="py-12 px-4 sm:px-6 md:px-8"
        aria-labelledby="data-stack-heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2
          id="data-stack-heading"
          className="text-2xl sm:text-3xl text-center text-white font-semibold mb-6"
        >
          Tech Stack
        </h2>
        <div className="max-w-4xl mx-auto grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-6">
          {dataStack.map(item => (
            <div
              key={item.name}
              role="button"
              tabIndex={0}
              aria-label={item.name}
              className="
                flex flex-col items-center
                p-3
                bg-slate-900/50 backdrop-blur-xs
                rounded-lg
                hover:scale-105 transition-transform
                focus:outline-none focus:ring-2 focus:ring-accent
              "
            >
              {item.useImg ? (
                <img
                  src={item.imgSrc}
                  alt={`${item.name} logo`}
                  width={40}
                  height={40}
                  className="mb-1 object-contain"
                />
              ) : (
                <item.Icon size={40} color={item.color} className="mb-1" />
              )}
              <span className="text-white font-medium text-xs">{item.name}</span>
            </div>
          ))}
        </div>
      </motion.section>

      {/* CERTIFICATIONS */}
      <motion.section
        id="certifications"
        className="py-16 px-4 sm:px-6 md:px-8 max-w-xl mx-auto text-center"
        aria-labelledby="certifications-heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2
          id="certifications-heading"
          className="text-3xl font-semibold text-white mb-6"
        >
          Certifications
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
