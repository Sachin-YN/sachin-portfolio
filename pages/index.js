// pages/index.js
import { useRef, useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { motion } from 'framer-motion'
import Typewriter from 'typewriter-effect'
import Tilt from 'react-parallax-tilt'
import Layout from '../components/Layout'
import Link from 'next/link'
import useDarkMode from '../hooks/useDarkMode'

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

// Framer Motion variants
const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
}
const childVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
}

const dataStack = [
  { name: 'MySQL',          useImg: true, imgSrc: '/icons/mysql.png' },
  { name: 'Snowflake',      Icon: SiSnowflake, color: '#56B9EB' },
  { name: 'Oracle',         Icon: SiOracle, color: '#F80000' },
  { name: 'Python',         useImg: true, imgSrc: '/icons/python.jpg' },
  { name: 'Pandas',         Icon: SiPandas, color: '#150458' },
  { name: 'NumPy',          Icon: SiNumpy, color: '#013243' },
  { name: 'SAP HANA',       Icon: SiSap, color: '#0C66E4' },
  { name: 'SAP CRM',        Icon: SiSap, color: '#0C66E4' },
  { name: 'Dynamics 365',   useImg: true, imgSrc: '/icons/dynamics365.jpg' },
  { name: 'Power Automate', useImg: true, imgSrc: '/icons/power automate.png' },
  { name: 'Power BI',       Icon: SiPowerbi, color: '#F2C811' },
  { name: 'Tableau',        Icon: SiTableau, color: '#E97627' },
  { name: 'Qlik',           Icon: SiQlik, color: '#009645' },
  { name: 'Excel',          Icon: SiMicrosoftexcel, color: '#217346' },
  { name: 'Forecasting',    Icon: SiPlotly, color: '#3F4F75' },
]

export default function Home() {
  const cardsRef = useRef(null)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [theme, toggleTheme] = useDarkMode()

  // Scroll progress effect
  useEffect(() => {
    const handleScroll = () => {
      const total = document.documentElement.scrollTop
      const max = document.documentElement.scrollHeight - document.documentElement.clientHeight
      setScrollProgress((total / max) * 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // GSAP hover
  useEffect(() => {
    const cards = cardsRef.current?.querySelectorAll('.tech-card')
    if (!cards) return
    cards.forEach(card => {
      const enter = () =>
        gsap.to(card, {
          scale: 1.05,
          boxShadow: '0 0 12px rgba(16,185,129,0.6)',
          duration: 0.3,
        })
      const leave = () =>
        gsap.to(card, {
          scale: 1,
          boxShadow: '0 0 4px rgba(0,0,0,0.2)',
          duration: 0.3,
        })
      card.addEventListener('mouseenter', enter)
      card.addEventListener('mouseleave', leave)
      card.__cleanup = () => {
        card.removeEventListener('mouseenter', enter)
        card.removeEventListener('mouseleave', leave)
      }
    })
    return () => cards.forEach(c => c.__cleanup?.())
  }, [])

  return (
    <Layout title="Home">
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 z-50 bg-transparent">
        <div
          className="h-full bg-cyan-400 origin-left transition-all duration-200 ease-linear"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      {/* Theme Toggle */}
      <div className="absolute top-5 right-5 z-50">
        <button
          onClick={toggleTheme}
          className="text-sm px-3 py-1 bg-slate-700 text-white rounded hover:bg-slate-600 transition"
        >
          {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
        </button>
      </div>

      {/* HERO */}
      <section
        id="hero"
        className="min-h-screen flex flex-col items-center justify-center text-center px-4 py-12 space-y-6 bg-slate-900 text-white transition-colors duration-500"
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold"
        >
          I’m Sachin Yoganandham
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="max-w-2xl text-gray-300 text-lg"
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

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.6, duration: 0.4, ease: 'backOut' }}
          className="mt-8 inline-block bg-cyan-500/20 backdrop-blur-sm rounded-lg p-1"
        >
          <motion.button
            onClick={() =>
              document.getElementById('data-stack')?.scrollIntoView({ behavior: 'smooth' })
            }
            className="px-6 py-3 bg-cyan-400 text-white rounded-md font-medium hover:bg-cyan-500 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore My Tech Stack
          </motion.button>
        </motion.div>
      </section>

      {/* Remaining sections unchanged... */}
      {/* Include your TECH STACK, CERTIFICATIONS, CONTACT CTA sections here as in previous code */}
    </Layout>
  )
}
