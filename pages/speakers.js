import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Speakers() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter! Speakers</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Speakers" />
        <p className="description">
        Speakers page
        </p>
      </main>

      <Footer />
    </div>
  )
}
