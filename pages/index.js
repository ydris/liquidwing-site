import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>LiquidWing</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="LiquidWing — where AI meets velocity" />
        <p className="description">
          Get started by contacting the team - once i setup the emails
        </p>
      </main>

      <Footer />
    </div>
  )
}
