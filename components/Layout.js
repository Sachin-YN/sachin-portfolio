// components/Layout.js
import Head from 'next/head'
import Navbar from './Navbar'

export default function Layout({ children, title = 'Sachin Yoganandham' }) {
  const currentYear = new Date().getFullYear()
  const siteUrl = 'https://sachiny.me'
  const pageUrl = `${siteUrl}${typeof window !== 'undefined' ? window.location.pathname : ''}`
  const siteTitle = `${title} | Portfolio`
  const description = 'Portfolio of Sachin Yoganandham, Data Analyst'
  const ogImage = `${siteUrl}/og-image.png`  // generate a 1200x630 PNG for sharing

  return (
    <>
      <Head>
        {/* Basic metadata */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{siteTitle}</title>
        <meta name="description" content={description} />

        {/* Favicon */}
        <link rel="icon" href="/favicon.png" type="image/png" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:title" content={siteTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={siteTitle} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Sachin Yoganandham",
              "url": siteUrl,
              "jobTitle": "Data Analyst",
              "sameAs": [
                "https://www.linkedin.com/in/ing-sachin-yoganandham-a06b88117/",
                "https://github.com/Sachin-YN"
              ],
              "image": ogImage,
              "description": description
            })
          }}
        />
      </Head>

      {/* Accessibility: skip straight to content */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-white text-black px-2 py-1 rounded"
      >
        Skip to content
      </a>

      {/* Full-screen video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="/videos/earth-from-space-poster.jpg"
        aria-hidden="true"
        className="fixed inset-0 w-full h-full object-cover z-[-10]"
      >
        <source
          src="/videos/earth-from-space-moewalls-com.mp4"
          type="video/mp4"
        />
        {/* Fallback text is intentionally empty for screen readers */}
      </video>

      {/* Semi-dark overlay for legibility */}
      <div className="fixed inset-0 bg-black/30 z-[-5]" />

      {/* Site header */}
      <Navbar />

      {/* Page content */}
      <main id="main-content" className="relative z-10 pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="relative z-10 mt-16 py-6 text-center text-gray-300">
        <p className="text-sm">
          Designed &amp; Built by Sachin Yoganandham. &copy; {currentYear}
        </p>
      </footer>
    </>
  )
}
