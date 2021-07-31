import Head from 'next/head'
import Nav from '../../components/Nav'
import Main from '../../components/Main'
import Link from 'next/link'
import Footer from '../../components/Footer'


export default function Signup() {


    return (
        <div className="flex flex-col min-h-screen bg-gray-900">
            <Head>
                <title>Login</title>
                <link rel="icon" href="/favicon.ico" />

                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
            </Head>

            <Nav />
            <Main>


                <div className="w-full pb-4" >
                    <h3 className="font-bold py-2 text-2xl text-white">Sign up</h3>

                    <section className="border-2 border-gray-700 px-4">

                        <div className="text-left py-4 px-4 bg-gray-900 flex flex-col flex-wrap">

                            <h3 className="font-bold py-2 text-xl text-white">Name</h3>

                            <input type="text" required className="py-2 px-2 my-2 rounded-md" placeholder="Your name" />

                            <h3 className="font-bold py-2 text-xl text-white">Lastname</h3>

                            <input type="text" required className="py-2 px-2 my-2 rounded-md" placeholder="Your lastname" />

                            <h3 className="font-bold py-2 text-xl text-white">Username</h3>

                            <input type="text" required className="py-2 px-2 my-2 rounded-md" placeholder="Your username" />

                            <h3 className="font-bold py-2 text-xl text-white">Password</h3>

                            <input type="password" required className="py-2 px-2 my-2 rounded-md" placeholder="Your password" />

                            <button className="bg-blue-600 mt-4 py-2 px-8 text-white rounded-md">Sign Up</button>
                            <p className="text-gray-100 py-4 mx-auto">Do you have an account? <Link href="/login"><span className="cursor-pointer text-yellow-300">Login</span></Link></p>


                        </div>
                    </section>

                </div>
            </Main>

            <Footer />
        </div>
    )
}
