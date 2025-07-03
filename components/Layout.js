import Head from 'next/head'
import Navbar from './Navbar'
import { useEffect, useState } from 'react'

export default function Layout({ children, title = 'Sachin Yoganandham' }) {
  const currentYear = new Date().getFullYear()
  const siteUrl = 'https://sachiny.me'
  const pageUrl =
    typeof window !== 'undefined'
      ? `${siteUrl}${window.location.pathname}`
      : siteUrl
  const siteTitle = `${title} | Portfolio`
  const description = 'Portfolio of Sachin Yoganandham, Data Analyst'
  const ogImage = `${siteUrl}/og-image.png`
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID

  const [dark, setDark] = useState(true)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    setDark(savedTheme === 'dark')
  }, [])

  useEffect(() => {
    const root = window.document.documentElement
    if (dark) {
      root.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      root.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [dark])

  return (
    <div className={dark ? 'dark' : ''}>
      <Head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8612329739653505"
          crossOrigin="anonymous"
        ></script>

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{siteTitle}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.png" type="image/png" />

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
                'https://github.com/Sachin-YN'
              ],
              image: ogImage,
              description
            })
          }}
        />

        {GA_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_ID}', {
                    page_path: window.location.pathname,
                  });
                `
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

      <video
        autoPlay
        muted
        loop
        preload="auto"
        playsInline
        webkit-playsinline="true"
        disablePictureInPicture
        onEnded={(e) => e.currentTarget.play()}
        aria-hidden="true"
        className="fixed inset-0 w-full h-full object-cover -z-10"
      >
        <source
          src="/videos/earth-from-space-moewalls-com.mp4"
          type="video/mp4"
        />
      </video>
      <div className="fixed inset-0 bg-black/30 -z-5" />

      <header className="absolute top-4 right-4 z-50">
        <button
          onClick={() => setDark(!dark)}
          className="px-4 py-2 text-sm rounded-md bg-cyan-500 text-white hover:bg-cyan-600 transition"
        >
          {dark ? '☀ Light Mode' : '🌙 Dark Mode'}
        </button>
      </header>

      <Navbar />

      <main id="main-content" className="relative z-10 pt-20">
        {children}
      </main>

      <footer className="relative z-10 mt-16 py-6 text-center text-gray-300">
        <p className="text-sm">
          Designed &amp; Built by Sachin Yoganandham. &copy; {currentYear}
        </p>
      </footer>
    </div>
  )
}
