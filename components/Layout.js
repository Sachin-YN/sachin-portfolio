// components/Layout.js
import Head from 'next/head'
import Navbar from './Navbar'

export default function Layout({ children, title = 'Sachin Yoganandham' }) {
  const currentYear = new Date().getFullYear()

  return (
    <>
      <Head>
        <title>{title} | Portfolio</title>
        <meta
          name="description"
          content="Portfolio of Sachin Yoganandham, Data Analyst"
        />
        {/* use your new PNG favicon */}
        <link rel="icon" href="/favicon.png" type="image/png" />
      </Head>

      {/* Full-screen video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="fixed inset-0 w-full h-full object-cover z-[-10]"
      >
        <source
          src="/videos/earth-from-space-moewalls-com.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Semi-dark overlay for legibility */}
      <div className="fixed inset-0 bg-black/30 z-[-5]" />

      {/* Site header */}
      <Navbar />

      {/* Page content */}
      <main className="relative z-10 pt-20">{children}</main>

      {/* Footer */}
      <footer className="relative z-10 mt-16 py-6 text-center text-gray-300">
        <p className="text-sm">
          Designed &amp; Built by Sachin Yoganandham. &copy; {currentYear}
        </p>
      </footer>
    </>
  )
}
