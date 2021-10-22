import Link from 'next/link';
import {ShoppingCartIcon} from '@heroicons/react/outline'

function Header() {
    return (
        <div className="shadow-md sticky top-0 z-50 bg-white">
            <div className="flex items-center justify-between bg-white py-4 px-4 z-50 max-w-6xl mx-auto">
                <Link href="/">
                    <div className="flex items-center cursor-pointer">
                        <div>
                            <img className="w-10 h-10 cursor-pointer" src="/porabay-logo.jpg" alt="logo" />
                        </div>
                        <div className="items-center px-1 text-2xl"><b>Porabay</b></div>
                    </div>
                </Link>
                <div className="flex items-center space-x-4">
                    <Link href="/cart">
                        <div className="relative w-full cursor-pointer">
                            <div className="absolute -mt-2 ml-3 justify-center bg-red-500 items-center text-xs text-center rounded-full w-4">0</div>
                            <ShoppingCartIcon className="w-6"/>
                        </div>
                    </Link>
                    <Link href="/signup">
                        <div className="border-solid items-center border-2 border-red-800 p-2 cursor-pointer text-sm md:text-lg lg:text-xl font-bold rounded-lg hover:underline ">
                                <span className="mx-2">SignIn</span>
                        </div>
                    </Link>
                </div>
                
                
            </div>
        </div>
    )
}

export default Header

