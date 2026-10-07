import Head from 'next/head'
import Navbar from './Navbar'
import AuroraCircuitBackground from './AuroraCircuitBackground'
import CustomCursor from './CustomCursor'
import ScrollProgress from './ScrollProgress'

export default function Layout({ children, title = 'Sachin Yoganandham' }) {
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
      <AuroraCircuitBackground />

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
