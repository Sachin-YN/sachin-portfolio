// components/Layout.js
import Head from 'next/head'
import Navbar from './Navbar'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Layout({ children, title = 'Sachin Yoganandham' }) {
  const [launched, setLaunched] = useState(false)

  const currentYear = new Date().getFullYear()
  const siteUrl = 'https://sachiny.me'
  const siteTitle = `${title} | Portfolio`
  const description = 'Portfolio of Sachin Yoganandham, Data Analyst'
  const ogImage = `${siteUrl}/og-image.png`

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{siteTitle}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.png" type="image/png" />
      </Head>

      {/* Skip to content for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-white text-black px-2 py-1 rounded"
      >
        Skip to content
      </a>

      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="fixed inset-0 w-full h-full object-cover -z-10"
      >
        <source src="/videos/earth-from-space-moewalls-com.mp4" type="video/mp4" />
      </video>

      {/* STARS - aligned path */}
      <div className="fixed top-8 left-0 w-full flex justify-between px-10 z-10 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="w-[3px] h-[3px] bg-white rounded-full opacity-70 animate-pulse"
            style={{
              animationDelay: `${i * 0.1}s`,
              filter: 'drop-shadow(0 0 4px white)',
              marginTop: `${Math.random() * 30}px`
            }}
          ></div>
        ))}
      </div>

      {/* Rocket */}
      <motion.div
        initial={{ x: 0 }}
        animate={launched ? { x: '100vw' } : {}}
        transition={{ duration: 3, ease: 'easeInOut' }}
        onAnimationComplete={() => setLaunched(false)}
        className="fixed top-6 left-2 z-20 cursor-pointer"
        onClick={() => setLaunched(true)}
      >
        <div className="relative flex items-center space-x-1 -rotate-12">
          <span className="text-2xl">🚀</span>
          {launched && (
            <div className="w-2 h-4 bg-orange-400 rounded-full animate-pulse blur-sm"></div>
          )}
        </div>
      </motion.div>

      <Navbar />

      <main id="main-content" className="relative z-10 pt-20">
        {children}
      </main>

      <footer className="relative z-10 mt-16 py-6 text-center text-gray-300">
        <p className="text-sm">
          Designed & Built by Sachin Yoganandham. &copy; {currentYear}
        </p>
      </footer>
    </>
  )
}
