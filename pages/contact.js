import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Contact() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter! Contact Us</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Contact us" />
        <p className="description">
        Contact us page
        </p>
      </main>

      <Footer />
    </div>
  )
}
