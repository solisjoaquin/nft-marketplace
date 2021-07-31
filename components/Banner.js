import Link from 'next/link'

const Banner = () => {
    return (
        <div className=" h-80 flex justify-between items-center py-4 px-5 lg:px-10 mx-auto w-full bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
            <div className=" sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                    <span className="inline xl:block pr-2">Discover, collect, and sell</span>
                    <span className="inline text-indigo-100 xl:block">extraordinary NFTs</span>
                </h1>
            </div>
        </div>

    )
}

export default Banner;