import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>LiquidWing — Coming Real Soon</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="LiquidWing — Coming Real Soon" />
        <p className="description">
          Get started by editing the team
        </p>
      </main>

      <Footer />
    </div>
  )
}
