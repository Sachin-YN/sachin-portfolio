// pages/index.js
import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import InertiaPlugin from 'gsap/dist/InertiaPlugin'
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
import { FaMicrosoft, FaChartLine } from 'react-icons/fa'

// 1) Register the InertiaPlugin
gsap.registerPlugin(InertiaPlugin)

// 2) Declare your dataStack at top-level so it's always in scope
const dataStack = [
  { name: 'MySQL',          useImg: true,  imgSrc: '/icons/mysql.png'     },
  { name: 'Snowflake',      Icon: SiSnowflake,  color: '#28A8E0'         },
  { name: 'Oracle',         Icon: SiOracle,      color: '#FF0000'         },
  { name: 'Python',         useImg: true,  imgSrc: '/icons/python.jpg'   },
  { name: 'Pandas',         Icon: SiPandas,      color: '#150458'         },
  { name: 'NumPy',          Icon: SiNumpy,       color: '#013243'         },
  { name: 'SAP HANA',       Icon: SiSap,         color: '#1CABE2'         },
  { name: 'SAP CRM',        Icon: SiSap,         color: '#1CABE2'         },
  { name: 'Dynamics 365',   useImg: true,  imgSrc: '/icons/dynamics365.jpg' },
  { name: 'Power Automate', useImg: true,  imgSrc: '/icons/power automate.png' },
  { name: 'Power BI',       Icon: SiPowerbi,     color: '#F2C811'         },
  { name: 'Tableau',        Icon: SiTableau,     color: '#E97627'         },
  { name: 'Qlik',           Icon: SiQlik,        color: '#0066CC'         },
  { name: 'Excel',          Icon: SiMicrosoftexcel, color: '#217346'     },
  { name: 'Forecasting',    Icon: SiPlotly,      color: '#3F4C6B'         },
]

export default function Home() {
  const stackRef = useRef(null)

  useEffect(() => {
    const root = stackRef.current
    if (!root) return

    let oldX = 0, oldY = 0, deltaX = 0, deltaY = 0

    // Track mouse move deltas
    const onMouseMove = (e) => {
      deltaX = e.clientX - oldX
      deltaY = e.clientY - oldY
      oldX = e.clientX
      oldY = e.clientY
    }
    root.addEventListener('mousemove', onMouseMove)

    // Bind hover/inertia effect on each card
    root.querySelectorAll('.tech-card').forEach((el) => {
      el.addEventListener('mouseenter', () => {
        const media = el.querySelector('img, svg')
        const tl = gsap.timeline({
          onComplete: () => tl.kill(),
        })
        tl.timeScale(1.2)
          .to(media, {
            inertia: {
              x: deltaX * 30,
              y: deltaY * 30,
              end: true,
            },
          })
          .fromTo(
            media,
            { rotate: 0 },
            {
              duration: 0.4,
              rotate: (Math.random() - 0.5) * 30,
              yoyo: true,
              repeat: 1,
              ease: 'power1.inOut',
            },
            '<'
          )
      })
    })

    return () => {
      root.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

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
        ref={stackRef}
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
          {dataStack.map((item) => (
            <div
              key={item.name}
              className="tech-card flex flex-col items-center p-3 bg-slate-900/50 backdrop-blur-xs rounded-lg hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-accent"
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
              <span className="text-white font-medium text-xs">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </motion.section>

      {/* CERTIFICATIONS */}
      {/* … */}
    </Layout>
  )
}
