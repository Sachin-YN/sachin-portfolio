// components/Layout.js
import Head from 'next/head'
import Navbar from './Navbar'

export default function Layout({ children, title = 'Sachin Yadav' }) {
  return (
    <>
      <Head>
        <title>{title} | Portfolio</title>
        <meta name="description" content="Portfolio of Sachin Yadav, Data Analyst" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      {/* pt-20 gives enough space for the fixed navbar */}
      <main className="pt-20">{children}</main>
    </>
  )
}
