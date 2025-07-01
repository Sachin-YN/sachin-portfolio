// components/Layout.js
import Head from 'next/head'
import Navbar from './Navbar'

export default function Layout({ children, title = 'Sachin Yoganandham' }) {
  const currentYear = new Date().getFullYear()
  const siteUrl = 'https://sachiny.me'
  const pageUrl =
    typeof window !== 'undefined'
      ? `${siteUrl}${window.location.pathname}`
      : siteUrl
  const siteTitle = `${title} | Portfolio`
  const description = 'Portfolio of Sachin Yoganandham, Data Analyst'
  const ogImage = `${siteUrl}/og-image.png` // 1200×630 share image

  return (
    <>
      <Head>
        {/* Responsive viewport */}
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
        <meta name="twitter:url" content={pageUrl} />
        <meta name="twitter:title" content={siteTitle} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />

        {/* JSON-LD structured data */}
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
      </Head>

      {/* Accessibility: skip to main content */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-white text-black px-2 py-1 rounded"
      >
        Skip to content
      </a>

      {/* Background video + overlay */}
     <video
  autoPlay
  muted
  loop
  preload="auto"
  playsInline
  webkit-playsinline="true"
  disablePictureInPicture
  onEnded={(e) => e.currentTarget.play()}    // fallback if loop ever glitches
  aria-hidden="true"
  className="fixed inset-0 w-full h-full object-cover z-[-10]"
>
  <source
    src="/videos/earth-from-space-moewalls-com.mp4"
    type="video/mp4"
  />
  {/* No fallback text needed for screen readers, since aria-hidden="true" */}
</video>

      <div className="fixed inset-0 bg-black/30 z-[-5]" />

      <Navbar />

      <main id="main-content" className="relative z-10 pt-20">
        {children}
      </main>

      <footer className="relative z-10 mt-16 py-6 text-center text-gray-300">
        <p className="text-sm">
          Designed &amp; Built by Sachin Yoganandham. &copy; {currentYear}
        </p>
      </footer>
    </>
  )
}
