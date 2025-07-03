// pages/index.js
import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import Layout from '../components/Layout'
import { motion } from 'framer-motion'
import Typewriter from 'typewriter-effect'
import Link from 'next/link'
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

// Tech‐stack data
const dataStack = [
  { name: 'MySQL',          useImg: true,       imgSrc: '/icons/mysql.png'     },
  { name: 'Snowflake',      Icon: SiSnowflake,   color: '#28A8E0'               },
  { name: 'Oracle',         Icon: SiOracle,      color: '#FF0000'               },
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
  const cardsRef = useRef(null)

  // GSAP hover glow on tech cards
  useEffect(() => {
    const cards = cardsRef.current?.querySelectorAll('.tech-card')
    if (!cards) return

    cards.forEach((card) => {
      const enter = () => {
        gsap.to(card, {
          scale: 1.05,
          boxShadow: '0 0 12px rgba(16,185,129,0.6)',
          duration: 0.3,
          ease: 'power1.out',
        })
      }
      const leave = () => {
        gsap.to(card, {
          scale: 1,
          boxShadow: '0 0 4px rgba(0,0,0,0.2)',
          duration: 0.3,
          ease: 'power1.in',
        })
      }
      card.addEventListener('mouseenter', enter)
      card.addEventListener('mouseleave', leave)
      // cleanup
      card.__cleanup = () => {
        card.removeEventListener('mouseenter', enter)
        card.removeEventListener('mouseleave', leave)
      }
    })

    return () => {
      cards.forEach((card) => card.__cleanup && card.__cleanup())
    }
  }, [])

  return (
    <Layout title="Home">
      {/* HERO with Type & Fade */}
      <section
        id="hero"
        className="min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8 space-y-6"
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white"
        >
          I’m Sachin Yoganandham
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="max-w-2xl text-gray-300 text-base sm:text-lg md:text-xl"
        >
          Turning complex metrics into clear stories
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          <Typewriter
            options={{
              strings: ['Data-Driven Business Analyst'],
              autoStart: true,
              loop: false,
              cursor: '',
              delay: 75,
            }}
          />
        </motion.div>

        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.6, duration: 0.4, ease: 'backOut' }}
          onClick={() =>
            document.getElementById('data-stack')?.scrollIntoView({ behavior: 'smooth' })
          }
          className="px-6 py-3 bg-accent text-white rounded-md hover:bg-accent-dark transition text-base font-medium"
        >
          Explore My Tech Stack
        </motion.button>
      </section>

      {/* TECH STACK */}
      <motion.section
        id="data-stack"
        className="py-12 px-4 sm:px-6 md:px-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl sm:text-3xl text-center text-white font-semibold mb-6">
          Tech Stack
        </h2>
        <div
          ref={cardsRef}
          className="max-w-4xl mx-auto grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-6"
        >
          {dataStack.map((item) => (
            <div
              key={item.name}
              className="tech-card flex flex-col items-center p-3 bg-slate-900/50 backdrop-blur-xs rounded-lg"
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
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className="text-3xl font-semibold text-white mb-6">Certifications</h2>
        <Link
          href="https://www.coursera.org/account/accomplishments/professional-cert/VD5HGNFKPBA4"
          passHref
        >
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-accent text-white font-medium rounded-md shadow hover:bg-accent-dark transition text-base"
          >
            Google Data Analytics Professional Certificate
          </a>
        </Link>
      </motion.section>

      {/* CONTACT CTA */}
      <section id="contact" className="py-16 text-center px-4 sm:px-6 md:px-8">
        <h2 className="text-3xl font-semibold text-white mb-6">
          Got an idea or just want to chat tech?
        </h2>
        <Link href="mailto:contact@sachiny.me" passHref>
          <a className="inline-block px-6 py-3 bg-accent text-white rounded-md hover:bg-accent-dark transition text-base font-medium">
            Drop Me a Line
          </a>
        </Link>
      </section>
    </Layout>
  )
}
