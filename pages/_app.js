// pages/_app.js
import '../styles/globals.css'    // 🔥 keep this
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Script from 'next/script'   // ← add this

function App({ Component, pageProps }) {
  const router = useRouter()
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID

  useEffect(() => {
    if (!GA_ID) return

    const handleRouteChange = (url) => {
      window.gtag('config', GA_ID, {
        page_path: url,
      })
    }

    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events, GA_ID])

  return (
    <>
      {/* —————————————————————————— */}
      {/* Google Analytics (if configured) */}
      {GA_ID && (
        <Script
          id="gtag-base"
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        />
      )}
      {GA_ID && (
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      )}

      {/* —————————————————————————— */}
      {/* Google AdSense */}
      <Script
        id="adsense-script"
        strategy="afterInteractive"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8612329739653505"
        crossOrigin="anonymous"
      />

      {/* —————————————————————————— */}
      {/* Render the page component */}
      <Component {...pageProps} />
    </>
  )
}

export default App
