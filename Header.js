import Link from "next/link";
function Header() {
    return (
        <nav className="bg-gray-800 p-4 shadow-md fixed top-0 left-0 right-0 z-50">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-lg font-bold">MyWebsite</div>
                <div className="md:hidden">
                    <button className="text-white focus:outline-none">
                        {/* You can add a hamburger menu icon here if needed */}
                    </button>
                </div>
                <ul className="hidden md:flex md:items-center md:space-x-4">
                    <li>
                        <Link href="#MainSection" className="text-white hover:text-blue-400 transition duration-200">Home</Link>
                    </li>
                    <li>
                        <Link href="../section/About" className="text-white hover:text-blue-400 transition duration-200">About</Link>
                    </li>
                    <li>
                        <Link href="../section/Service" className="text-white hover:text-blue-400 transition duration-200">Services</Link>
                    </li>
                    <li>
                        <Link href="../section/Contact" className="text-white hover:text-blue-400 transition duration-200">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;
