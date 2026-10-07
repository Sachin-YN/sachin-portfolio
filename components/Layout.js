import Head from 'next/head'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from './Navbar'
import ParticleBackground from './ParticleBackground'
import TechBackground from './TechBackground'
import CustomCursor from './CustomCursor'
import ScrollProgress from './ScrollProgress'

export default function Layout({ children, title = 'Sachin Yoganandham' }) {
  const [launched, setLaunched] = useState(false)
  const [rocketKey, setRocketKey] = useState(0)

  const currentYear = new Date().getFullYear()
  const siteTitle = `${title} | Portfolio`
  const description = 'Portfolio of Sachin Yoganandham, Data-Driven Business Analyst'

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{siteTitle}</title>
        <meta name="description" content={description} />
        <meta name="theme-color" content="#020617" />
        <meta property="og:title" content={siteTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content="https://sachiny.me" />
        <meta name="twitter:card" content="summary" />
        <link rel="icon" href="/favicon.png" type="image/png" />
      </Head>

      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-white text-black px-2 py-1 rounded z-[70]"
      >
        Skip to content
      </a>

      <ScrollProgress />
      <CustomCursor />

      <TechBackground />

      <ParticleBackground />

      {/* Twinkling stars */}
      <div className="fixed top-14 left-0 w-full flex justify-between px-10 z-10 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="w-[3px] h-[3px] bg-white rounded-full opacity-70 animate-pulse"
            style={{ animationDelay: `${i * 0.1}s`, filter: 'drop-shadow(0 0 4px white)', marginTop: `${(i * 37) % 30}px` }}
          />
        ))}
      </div>

      {/* Click the rocket to launch it */}
      <motion.div
        key={rocketKey}
        initial={{ x: 0 }}
        animate={launched ? { x: '100vw' } : { x: 0 }}
        transition={{ duration: 3, ease: 'easeInOut' }}
        onAnimationComplete={() => { if (launched) { setLaunched(false); setRocketKey(k => k + 1) } }}
        className="fixed top-16 left-2 z-20 cursor-pointer"
        onClick={() => setLaunched(true)}
        role="button"
        aria-label="Launch rocket"
      >
        <div className="relative flex items-center space-x-1 -rotate-12">
          <span className="text-2xl">🚀</span>
          {launched && <div className="w-2 h-4 bg-orange-400 rounded-full animate-pulse blur-sm" />}
        </div>
      </motion.div>

      <Navbar />

      <main id="main-content" className="relative z-10 pt-20">
        {children}
      </main>

      <footer className="relative z-10 mt-16 py-6 text-center text-gray-300">
        <p className="text-sm">Designed &amp; Built by Sachin Yoganandham. &copy; {currentYear}</p>
      </footer>
    </>
  )
}
