import Head from 'next/head'
import Nav from '../../components/Nav'
import Main from '../../components/Main'
import { useRouter } from 'next/router'
import { useState } from 'react'
import Link from 'next/link'

const ItemsList = [
    {
        id: 1,
        title: 'Name of the picture',
        username: 'username956',
        price: 260,
        category: "Art",
        url: "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2021/04/NFT.jpeg.jpg"
    },
    {
        id: 2,
        title: 'Name of the picture',
        username: 'username956',
        price: 260,
        category: "Art",
        url: "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2021/04/NFT.jpeg.jpg"
    },
    {
        id: 3,
        title: 'Name of the picture',
        username: 'username956',
        price: 260,
        category: "Art",
        url: "https://api.time.com/wp-content/uploads/2021/03/nft-art-4.jpg"
    },
    {
        id: 4,
        title: 'Name of the picture',
        username: 'username956',
        price: 260,
        category: "Art",
        url: "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2021/04/NFT.jpeg.jpg"
    },
    {
        id: 5,
        title: 'Name of the picture',
        username: 'username956',
        price: 260,
        category: "Art",
        url: "https://api.time.com/wp-content/uploads/2021/03/nft-art-4.jpg"
    }, {
        id: 6,
        title: 'Name of the picture',
        username: 'username956',
        price: 260,
        category: "Art",
        url: "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2021/04/NFT.jpeg.jpg"
    },
    {
        id: 7,
        title: 'Name of the picture',
        username: 'username956',
        price: 260,
        category: "Art",
        url: "https://cdn.shopify.com/s/files/1/0020/2958/4453/products/Vakseen-Frida_20x20_Acrylic_on_canvas_2019_43e78ecf-c0ba-4338-97c7-b12a386590c8_grande.jpg?v=1607645544"
    }, {
        id: 8,
        title: 'Name of the picture',
        username: 'username956',
        price: 260,
        category: "Art",
        url: "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2021/04/NFT.jpeg.jpg"
    },
    {
        id: 9,
        title: 'Name of the picture',
        username: 'username956',
        price: 260,
        category: "Art",
        url: "https://static.coindesk.com/wp-content/uploads/2021/03/Vakseen-His-Royal-Airness-Mar.-2021-scaled-e1617145474132.jpg"
    }
]

export default function Product() {

    const router = useRouter()
    const { id } = router.query
    const position = id - 1

    const [item, setItem] = useState(ItemsList[position])

    return (
        <div className="flex flex-col min-h-screen bg-gray-900">
            <Head>
                <title>Product</title>
                <link rel="icon" href="/favicon.ico" />

                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
            </Head>

            <Nav />
            <Main>


                <div className="w-full pb-4" >
                    {/*                     <h3 className="text-left py-4 pt-10 text-white text-sm">Category: <span className="text-blue-200"> {item.category}</span></h3>
 */}                    <div className="grid grid-cols-1 grid-rows-2 gap-3 md:grid-cols-2 md:grid-rows-1 p-1">
                        <img src={item.url} alt="nft" className="object-cover h-80 w-full" />

                        <section className="border-2 border-gray-700 ">

                            <div className="text-left py-4 px-4 bg-gray-900 flex flex-col flex-wrap content-between">
                                <div className="flex justify-between items-center">
                                    <h3 className="font-bold py-2 text-2xl text-white">{item.title}</h3>

                                    <button>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                        </svg>
                                    </button>

                                </div>
                                <p className="py-2 text-gray-400">Owned by <Link href={`/user/${item.username}`}><span className="text-yellow-300"><a className="cursor-pointer">{item.username}</a> </span></Link></p>
                                <p className="text-gray-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, magnam debitis recusandae ducimus, eum veritatis veniam facilis architecto ut repellendus, nesciunt rerum. Totam esse atque a sunt itaque in et.</p>
                                <div className="flex justify-between items-center pt-12">
                                    <p className="font-bold text-xl text-yellow-300 py-3">{item.price} ETH</p>
                                    <button className="bg-blue-600 py-2 px-8 text-white rounded-md">Buy Now</button>
                                </div>

                            </div>
                        </section>
                    </div>
                </div>
            </Main>

        </div>
    )
}

