import Head from 'next/head'
import Nav from '../components/Nav'
import Main from '../components/Main'
import Categories from '../components/Categories'
import Items from '../components/Items'
import Banner from '../components/Banner'
import Footer from '../components/Footer'


export default function Home() {
  return (
    <div className="flex flex-col justify-center min-h-screen bg-gray-900">
      <Head>
        <title>Aerolab NFT</title>
        <link rel="icon" href="/favicon.ico" />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </Head>

      <Nav />
      <Banner />
      <Main>

        {/* <Categories /> */}

        <Items />
      </Main>
      <Footer />

    </div>
  )
}
