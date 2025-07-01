// components/Layout.js
import Head from 'next/head'
import Navbar from './Navbar'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import { useCallback } from 'react'

export default function Layout({ children, title = 'Sachin Yoganandham' }) {
  const particlesInit = useCallback(async engine => {
    await loadFull(engine)
  }, [])

  return (
    <>
      <Head>
        <title>{title} | Portfolio</title>
        <meta name="description" content="Portfolio of Sachin Yoganandham, Data Analyst" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Particles Background */}
      <Particles
        className="fixed inset-0 -z-10"
        init={particlesInit}
        options={{
          background: { color: { value: '#0a0f1c' } },
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: { enable: true, mode: 'push' },
              onHover: { enable: true, mode: 'repulse' },
            },
            modes: { push: { quantity: 4 }, repulse: { distance: 100 } },
          },
          particles: {
            color: { value: '#61DAFB' },
            links: { enable: true, color: '#61DAFB', distance: 150 },
            move: { enable: true, speed: 1, outModes: 'bounce' },
            number: { density: { enable: true, area: 800 }, value: 60 },
            size: { value: { min: 1, max: 4 } },
          },
        }}
      />

      {/* Navbar */}
      <Navbar />

      {/* Main content */}
      <main className="relative z-10 pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="mt-16 py-6 bg-gray-800 text-center text-gray-400">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-sm">&copy; {new Date().getFullYear()} Sachin Yoganandham. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}
