// components/Layout.js
import React, { useRef, useEffect } from 'react'
import Head from 'next/head'
import Navbar from './Navbar'

export default function Layout({ children, title = 'Sachin Yoganandham' }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let w = canvas.width = window.innerWidth
    let h = canvas.height = window.innerHeight

    // Create a field of stars
    const numStars = 200
    const stars = Array.from({ length: numStars }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.5 + 0.5,
      alpha: Math.random(),
      delta: (Math.random() * 0.02 + 0.005) * (Math.random() < 0.5 ? 1 : -1),
    }))

    function draw() {
      ctx.clearRect(0, 0, w, h)
      for (const s of stars) {
        s.alpha += s.delta
        if (s.alpha <= 0) { s.alpha = 0; s.delta = -s.delta }
        if (s.alpha >= 1) { s.alpha = 1; s.delta = -s.delta }

        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255,255,255,${s.alpha})`
        ctx.fill()
      }
      requestAnimationFrame(draw)
    }

    draw()

    // Handle resize
    function onResize() {
      w = canvas.width = window.innerWidth
      h = canvas.height = window.innerHeight
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const currentYear = new Date().getFullYear()

  return (
    <>
      <Head>
        <title>{title} | Portfolio</title>
        <meta name="description" content="Portfolio of Sachin Yoganandham, Data Analyst" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Canvas Starfield */}
      <canvas ref={canvasRef} className="fixed inset-0 -z-10" />

      {/* Semi-opaque overlay for readability */}
      <div className="fixed inset-0 bg-black/50 -z-5" />

      {/* Header */}
      <Navbar />

      {/* Main content */}
      <main className="relative z-10 pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="relative z-10 mt-16 py-6 bg-gray-800/60 text-center text-gray-300">
        <p className="text-sm">&copy; {currentYear} Sachin Yoganandham. All rights reserved.</p>
      </footer>
    </>
  )
}
