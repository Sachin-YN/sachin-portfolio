// pages/index.js
import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { InertiaPlugin } from 'gsap/InertiaPlugin'
import Layout from '../components/Layout'
import { motion } from 'framer-motion'
import Typewriter from 'typewriter-effect'
import Link from 'next/link'

// … your React-Icon imports …

gsap.registerPlugin(InertiaPlugin)

export default function Home() {
  const stackRef = useRef(null)

  useEffect(() => {
    const root = stackRef.current
    if (!root) return

    let oldX = 0,
      oldY = 0,
      deltaX = 0,
      deltaY = 0

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
              // When inertia ends, it will return to 0
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
      {/* HERO SECTION */}
      {/* … */}

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

      {/* … rest of your page … */}
    </Layout>
  )
}
