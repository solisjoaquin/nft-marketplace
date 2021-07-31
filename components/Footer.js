import Link from "next/link";

const Footer = () => {
    return (
        <footer className="flex justify-between items-center text-gray-300 max-w-6xl pt-6 pb-6 px-3 w-full mx-auto">
            <div>
                <p>© 2021 Devsar</p>
            </div>

            <ul className="flex gap-4">
                <li className="hover:text-gray-400"><Link href="/"> Privacy Policy</Link></li>
                <li className="hover:text-gray-400"><Link href="/"> Terms of Service</Link></li>
            </ul>
        </footer>
    )
}

export default Footer;