// pages/_app.js
import '../styles/globals.css'   // must import global styles

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
