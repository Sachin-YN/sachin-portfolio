// components/Layout.js
import Head from 'next/head'
import Navbar from './Navbar'

export default function Layout({ children, title = 'Sachin Yoganandham' }) {
  return (
    <>
      <Head>
        <title>{title} | Portfolio</title>
        <meta name="description" content="Portfolio of Sachin Yoganandham, Data Analyst" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      {/* pt-20 offsets the fixed navbar; no fixed height so page can scroll */}
      <main className="pt-20">
        {children}
      </main>
    </>
  )
}
