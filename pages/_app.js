// pages/_app.js
import '../styles/globals.css'  // ← must import your global CSS

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
