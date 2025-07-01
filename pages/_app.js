// pages/_app.js
import '../styles/globals.css'    // 🔥 This line is required

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
