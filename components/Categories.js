import Link from "next/link";

const Categories = () => {
    return (
        <div className={`bg-gray-900 rounded-lg w-full my-5`} >
            <h3 className="text-left p-5 text-white">Categories</h3>
            <div className="grid grid-cols-2 grid-rows-2 gap-1 md:grid-cols-4 md:grid-rows-1">

                <Link href="/"><a className="m-3"><section className=" p-5 text-white flex items-center justify-center rounded-lg bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 hover:transform hover:scale-105">Music</section></a></Link>
                <Link href="/"><a className="m-3"><section className=" p-5 text-white flex items-center justify-center rounded-lg bg-gradient-to-r from-green-400 to-blue-500 hover:transform hover:scale-105">Art</section></a></Link>
                <Link href="/"><a className="m-3"><section className=" p-5 text-white flex items-center justify-center rounded-lg bg-gradient-to-r from-red-400  to-yellow-500 hover:transform hover:scale-105">Gaming</section></a></Link>
                <Link href="/"><a className="m-3"><section className=" p-5 text-white flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-400 to-indigo-500 hover:transform hover:scale-105">Sports</section></a></Link>
            </div>
        </div>
    )
}

export default Categories;