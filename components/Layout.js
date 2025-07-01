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

      {/* Full-screen video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="fixed inset-0 w-full h-full object-cover -z-10"
      >
        <source
          src="/videos/earth-from-space-moewalls-com.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Optional dark overlay for legibility */}
      <div className="fixed inset-0 bg-black/30 -z-5"></div>

      {/* Site header */}
      <Navbar />

      {/* Page content */}
      <main className="relative z-10 pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="relative z-10 mt-16 py-6 text-center text-gray-300">
        <p className="text-sm">&copy; {currentYear} Sachin Yoganandham. All rights reserved.</p>
      </footer>
    </>
  )
}
