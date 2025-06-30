// components/Layout.js
import Head from 'next/head'
import Navbar from './Navbar'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import { useCallback } from 'react'

export default function Layout({ children, title = 'Sachin Yoganandham' }) {
  // initialize tsparticles
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
      {/* Particle background */}
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
            links: { color: '#61DAFB', enable: true, distance: 150 },
            move: { enable: true, speed: 1, outModes: 'bounce' },
            number: { density: { enable: true, area: 800 }, value: 60 },
            size: { value: { min: 1, max: 4 } },
          },
        }}
      />

      <Navbar />

      {/* Main content; z-10 to appear above particles */}
      <main className="relative z-10 pt-20">
        {children}
      </main>
    </>
  )
}
