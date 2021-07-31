import Link from 'next/link'
import { useState } from 'react';

const Nav = () => {

    const [displayMenu, setDisplayMenu] = useState(false);
    const [displayCategories, setDisplayCategories] = useState(false)
    return (
        <>
            <nav className="flex justify-between items-center py-4 px-5 lg:px-10 mx-auto w-full bg-gray-800 ">
                <Link href="/"><a className="font-bold text-lg text-white hover:transform hover:scale-105"> Aerocoin</a></Link>
                {!displayMenu ?
                    <button onClick={() => setDisplayMenu(!displayMenu)} >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white lg:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16" />
                        </svg>
                    </button>
                    :
                    <button onClick={() => setDisplayMenu(!displayMenu)} className="lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                }

                <div className="hidden lg:block">
                    <div className="flex justify-center py-1 px-2 items-center bg-gray-700 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <input className="p-2 text-white bg-gray-700 outline-none" type="text" placeholder="Search" />
                    </div>
                </div>

                <div className="hidden lg:block">
                    <ul className="flex items-center gap-5 text-white">
                        <li className="hover:text-gray-400">

                            <button onClick={() => setDisplayCategories(!displayCategories)} className="flex justify-center gap-1 items-center" href="/">
                                Categories
                                {!displayCategories ?
                                    <svg xmlns="http://www.w3.org/2000/svg" className="pt-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                    :
                                    <svg xmlns="http://www.w3.org/2000/svg" className="pt-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
                                    </svg>}
                            </button>
                        </li>
                        <li className="hover:text-gray-400"><Link href="/signup">Sign Up</Link></li>
                        <li className="hover:transform hover:scale-105"><Link href="/login"><a className="bg-blue-600 text-gray-100 py-2 px-5 rounded-md">Login</a></Link></li>
                        <li className="border border-yellow-300 text-yellow-300 rounded-lg p-2 hover:transform hover:scale-105"><Link href="/">Connect Wallet </Link></li>

                    </ul>
                </div>
            </nav>
            {displayMenu ?
                <div className="text-left">
                    <ul className="flex flex-col px-4 gap-5 text-white py-4">
                        <li>
                            <div className="flex  py-1 px-2 items-center bg-gray-800 rounded-lg ">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                                <input className="p-2 text-white bg-gray-800 outline-none" type="text" placeholder="Search" />
                            </div>
                        </li>
                        <li>

                            <button onClick={() => setDisplayCategories(!displayCategories)} className="flex justify-center gap-1 items-center" href="/">
                                Categories
                                {!displayCategories ?
                                    <svg xmlns="http://www.w3.org/2000/svg" className="pt-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                    :
                                    <svg xmlns="http://www.w3.org/2000/svg" className="pt-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
                                    </svg>}
                            </button>


                            {displayCategories ?
                                <ul className="">
                                    <li className="py-2 text-gray-400"><Link href="/"> Art</Link></li>
                                    <li className="py-2 text-gray-400"><Link href="/"> Music</Link></li>
                                    <li className="py-2 text-gray-400"><Link href="/"> Gaming </Link></li>
                                    <li className="py-2 text-gray-400"><Link href="/"> Sports </Link></li>

                                </ul> : ""}
                        </li>
                        <li className="pb-2"><Link href="/signup">Sign up</Link></li>
                        <li ><Link href="/login"><a className="bg-blue-600 text-gray-100 py-3 px-5 rounded-md">Login</a></Link></li>
                    </ul>
                </div>
                : ""}
        </>
    )
}

export default Nav;