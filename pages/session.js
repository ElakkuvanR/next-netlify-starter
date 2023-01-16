import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Session() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter! session</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Session Page" />
        <p className="description">
        session page
        </p>
      </main>

      <Footer />
    </div>
  )
}
