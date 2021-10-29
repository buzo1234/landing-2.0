import Link from 'next/link';
import {ShoppingCartIcon, HomeIcon} from '@heroicons/react/outline'
import { CartItemState } from '../../context/CartContext';
import { useEffect, useState } from 'react';

function Header() {
    const {cartstate} = CartItemState();
    const [subqty, setSubqty] = useState(0);
    useEffect(() => {
        if(cartstate){
            setSubqty(cartstate.cart.reduce((qty, item) => Number(item.qty) + qty, 0));
        }
    },[cartstate])
    return (
        <div className="shadow-md sticky top-0 z-50 bg-white">
            <div className="flex items-center justify-between bg-white py-5 px-2 z-50 max-w-5xl mx-auto">
                <Link href="/">
                    <div className="flex items-center cursor-pointer">
                        
                        <div className="font-serif items-center px-1 text-2xl"><b>Local&#x0915;&#x092E;&#x093E;&#x0932;</b></div>
                    </div>
                </Link>
                <div className="flex items-center justify-center">
                    <Link href="/">
                        <HomeIcon className="w-12" />
                    </Link>
                    <Link href="/cartarea">
                        <div className="relative w-full cursor-pointer ">
                            <div className="absolute -mt-1 ml-9 justify-center bg-red-400 items-center text-xs text-center rounded-full w-4">{subqty}</div>
                            <ShoppingCartIcon className="w-8 ml-4 -mr-2"/>
                        </div>
                    </Link>
                    
                </div>
                
                
            </div>
        </div>
    )
}

export default Header

