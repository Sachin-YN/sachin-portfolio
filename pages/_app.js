// pages/_app.js
import '../styles/globals.css'    // 🔥 required for Tailwind
import { useEffect } from 'react'
import { useRouter } from 'next/router'

function App({ Component, pageProps }) {
  const router = useRouter()
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID

  useEffect(() => {
    if (!GA_ID) return

    const handleRouteChange = (url) => {
      window.gtag('config', GA_ID, { page_path: url })
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => router.events.off('routeChangeComplete', handleRouteChange)
  }, [router.events, GA_ID])

  return <Component {...pageProps} />
}

export default App
