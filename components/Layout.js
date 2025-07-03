import Head from 'next/head'
import Navbar from './Navbar'
import { useState, useEffect } from 'react'

export default function Layout({ children, title = 'Sachin Yoganandham' }) {
  const currentYear = new Date().getFullYear()
  const siteUrl = 'https://sachiny.me'
  const pageUrl = typeof window !== 'undefined'
    ? `${siteUrl}${window.location.pathname}`
    : siteUrl
  const siteTitle = `${title} | Portfolio`
  const description = 'Portfolio of Sachin Yoganandham, Data Analyst'
  const ogImage = `${siteUrl}/og-image.png`
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID

  const [dark, setDark] = useState(false)
  useEffect(() => {
    const stored = localStorage.getItem('theme')
    setDark(stored === 'dark')
  }, [])
  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  return (
    <>
      <Head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8612329739653505"
          crossOrigin="anonymous"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{siteTitle}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:title" content={siteTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={pageUrl} />
        <meta name="twitter:title" content={siteTitle} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Sachin Yoganandham',
              url: siteUrl,
              jobTitle: 'Data Analyst',
              sameAs: [
                'https://www.linkedin.com/in/ing-sachin-yoganandham-a06b88117/',
                'https://github.com/Sachin-YN',
              ],
              image: ogImage,
              description,
            }),
          }}
        />
        {GA_ID && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_ID}', { page_path: window.location.pathname });
                `,
              }}
            />
          </>
        )}
      </Head>

      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-white text-black px-2 py-1 rounded"
      >
        Skip to content
      </a>

      {/* 🎨 Optionally add a toggle button for dark/light mode */}
      <header className="absolute top-4 right-4 z-50">
        <button
          onClick={() => setDark(!dark)}
          className="px-4 py-2 bg-cyan-500 text-white rounded-md hover:bg-cyan-600 transition"
        >
          {dark ? '☀ Light' : '🌙 Dark'}
        </button>
      </header>

      {/* Removed background video and blur overlay */}
      <Navbar />

      <main id="main-content" className="relative z-10 pt-20">
        {children}
      </main>

      <footer className="relative z-10 mt-16 py-6 text-center text-gray-400 dark:text-gray-500">
        <p className="text-sm">
          Designed &amp; Built by Sachin Yoganandham. &copy; {currentYear}
        </p>
      </footer>
    </>
  )
}
