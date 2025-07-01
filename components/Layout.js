// components/Layout.js
import Head from 'next/head'
import Navbar from './Navbar'

// ▶ Starfield video background (or swap for any video URL you prefer)
export default function Layout({ children, title = 'Sachin Yoganandham' }) {
  const currentYear = new Date().getFullYear()

  return (
    <>
      <Head>
        <title>{title} | Portfolio</title>
        <meta name="description" content="Portfolio of Sachin Yoganandham, Data Analyst" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Full‐screen looping video behind everything */}
      <video
        autoPlay muted loop playsInline
        className="fixed inset-0 w-full h-full object-cover -z-10"
      >
        <source
          src="https://assets.mixkit.co/videos/preview/mixkit-stars-shining-in-the-night-sky-18180-640x360.mp4"
          type="video/mp4"
        />
      </video>
      {/* Dark overlay so text remains legible */}
      <div className="fixed inset-0 bg-black/50 -z-5"></div>

      <Navbar />
      <main className="relative z-10 pt-20">
        {children}
      </main>
      <footer className="relative z-10 mt-16 py-6 bg-gray-800/60 text-center text-gray-300">
        <p className="text-sm">&copy; {currentYear} Sachin Yoganandham. All rights reserved.</p>
      </footer>
    </>
  )
}
