import { useEffect, useState } from "react";
import Link from "next/link";

const ItemsList = [
    {
        id: 1,
        title: 'Name of the picture',
        price: 260,
        category: "art",
        author: "username",
        url: "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2021/04/NFT.jpeg.jpg"
    },
    {
        id: 2,
        title: 'Name of the picture',
        price: 1343,
        category: "art",
        author: "username",
        url: "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2021/04/NFT.jpeg.jpg"
    },
    {
        id: 3,
        title: 'Name of the picture',
        price: 134,
        category: "art",
        author: "username",
        url: "https://api.time.com/wp-content/uploads/2021/03/nft-art-4.jpg"
    },
    {
        id: 4,
        title: 'Name of the picture',
        price: 1200,
        category: "art",
        author: "username",
        url: "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2021/04/NFT.jpeg.jpg"
    },
    {
        id: 5,
        title: 'Name of the picture',
        price: 120,
        category: "art",
        author: "username",
        url: "https://api.time.com/wp-content/uploads/2021/03/nft-art-4.jpg"
    }, {
        id: 6,
        title: 'Name of the picture',
        price: 755,
        category: "art",
        author: "username",
        url: "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2021/04/NFT.jpeg.jpg"
    },
    {
        id: 7,
        title: 'Name of the picture',
        price: 75,
        category: "art",
        author: "username",
        url: "https://cdn.shopify.com/s/files/1/0020/2958/4453/products/Vakseen-Frida_20x20_Acrylic_on_canvas_2019_43e78ecf-c0ba-4338-97c7-b12a386590c8_grande.jpg?v=1607645544"
    }, {
        id: 8,
        title: 'Name of the picture',
        price: 175,
        category: "art",
        author: "username",
        url: "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2021/04/NFT.jpeg.jpg"
    },
    {
        id: 9,
        title: 'Name of the picture',
        price: 260,
        category: "art",
        author: "username",
        url: "https://static.coindesk.com/wp-content/uploads/2021/03/Vakseen-His-Royal-Airness-Mar.-2021-scaled-e1617145474132.jpg"
    }
]

const Items = () => {
    const [items, setItems] = useState([])
    /* const [filterItems, setFilterItems] = useState([]) */

    useEffect(() => {
        setItems(ItemsList)

    }, [])

    return (
        <div className="py-10 flex" >

            <div className="hidden lg:block">
                <div className="text-white px-10 mx-5 py-5 bg-gray-900 text-left rounded-md">
                    <h3 className="text-left pt-6 pb-2  text-white font-bold text-xl">Categories</h3>
                    <ul className="">
                        <li className="flex items-center gap-2"><input type="checkbox" className="checked:bg-blue-600 checked:border-none" id="category1" name="category1" value="art" /><label htmlFor="category1">Art</label></li>
                        <li className="flex items-center gap-2"><input type="checkbox" className="checked:bg-blue-600 checked:border-none" id="category2" name="category2" value="gaming" /><label htmlFor="category2">Gaming</label></li>
                        <li className="flex items-center gap-2"><input type="checkbox" className="checked:bg-blue-600 checked:border-none" id="category3" name="category3" value="sports" /><label htmlFor="category3">Sports</label></li>
                    </ul>

                    <h3 className="text-left pt-6 pb-2  text-white font-bold text-xl">Price</h3>
                    <ul className="">
                        <li className="flex items-center gap-2"><input type="checkbox" className="checked:bg-blue-600 checked:border-none" /><label htmlFor="category">1-10</label></li>
                        <li className="flex items-center gap-2"><input type="checkbox" className="checked:bg-blue-600 checked:border-none" /><label htmlFor="category">10-50</label></li>
                        <li className="flex items-center gap-2"><input type="checkbox" className="checked:bg-blue-600 checked:border-none" /><label htmlFor="category">50-100</label></li>
                    </ul>
                </div>
            </div>



            <div>
                {/* <h3 className="text-left pb-6  text-white font-bold text-xl">Discover</h3> */}
                <div className={`grid grid-cols-1 grid-rows-9 gap-4 md:grid-cols-3 md:grid-rows-3 `}>
                    {items?.map(item =>
                        <Link href={`/products/${item.id}`} key={item.id}>
                            <section className="border border-yellow-300 cursor-pointer hover:transform hover:scale-105">
                                <div className="px-4 py-3 flex justify-end">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                                    </svg>
                                </div>
                                <img src={item.url} alt="nft" className="object-cover h-60 w-full " />
                                <div className="text-left py-4 px-4 bg-gray-900 ">
                                    <p className={`py-1 text-sm text-gray-400 `}>{item.author}</p>
                                    <h3 className={`font-bold text-xl text-white`}>{item.title}</h3>

                                    <p className={`font-bold text-3xl text-yellow-300`}>{item.price} ETH</p>
                                </div>
                            </section>
                        </Link>
                    )}

                </div>
                <div className="flex justify-end text-white py-4 gap-4">
                    <button className="p-2 bg-gray-700 px-3 rounded-md">Previous</button>
                    <button className="p-2 bg-gray-700 px-3 rounded-md">Next</button>
                </div>
            </div>
        </div>
    )
}

export default Items;