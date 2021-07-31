import Head from 'next/head'
import Nav from '../../components/Nav'
import Main from '../../components/Main'
import { useRouter } from 'next/router'
import Items from '../../components/Items'
import Footer from '../../components/Footer'

export default function Home() {


    const router = useRouter()
    const { username } = router.query
    return (
        <div className="flex flex-col justify-center min-h-screen bg-gray-900">
            <Head>
                <title>{username}</title>
                <link rel="icon" href="/favicon.ico" />

                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
            </Head>

            <Nav />
            <Main>
                <div className="px-3 bg-gradient-to-r from-blue-900 via-indigo-500 to-blue-900 w-full rounded-md">
                    <div className="py-4">
                        <img src="https://pbs.twimg.com/profile_images/759557613445001216/6M2E1l4q_400x400.jpg"
                            alt="profile"
                            className="w-32 h-32 rounded-full mx-auto" />
                        <h1 className="text-white text-xl py-2">{username}</h1>
                    </div>
                </div>
                <Items />
            </Main>

            <Footer />
        </div>
    )
}
