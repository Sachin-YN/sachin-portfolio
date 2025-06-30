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
      <main className="container mx-auto p-4">{children}</main>
    </>
  )
}
