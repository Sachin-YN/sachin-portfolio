// components/Layout.js
import Head from 'next/head'
import Navbar from './Navbar'

export default function Layout({ children, title = 'Sachin Yoganandham' }) {
  const currentYear = new Date().getFullYear()

  return (
    <>
      <Head>
        <title>{title} | Portfolio</title>
        <meta name="description" content="Portfolio of Sachin Yoganandham, Data Analyst" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Starfield video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="fixed inset-0 w-full h-full object-cover -z-10"
      >
        <source
          src="https://assets.mixkit.co/videos/preview/mixkit-stars-shining-in-the-night-sky-18180-640x360.mp4"
          type="video/mp4"
        />
      </video>

      {/* Semi-dark overlay so text stays legible */}
      <div className="fixed inset-0 bg-black/50 -z-5"></div>

      {/* Site header */}
      <Navbar />

      {/* Main content */}
      <main className="relative z-10 pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="relative z-10 mt-16 py-6 bg-gray-800/60 text-center text-gray-300">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-sm">&copy; {currentYear} Sachin Yoganandham. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}
