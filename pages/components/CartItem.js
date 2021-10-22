import Image from 'next/image';
import {TrashIcon} from '@heroicons/react/solid'
import Link from 'next/link';

function CartItem() {
    return (
        <div>
            <div className="grid grid-cols-3 bg-gray-100 rounded-xl p-2 my-2">
                <div className="flex col-span-1 justify-center items-center">
                    <Image 
                        src="https://res.cloudinary.com/dcyaz9xch/image/upload/v1634888453/dqdaappqznbc8qdxpnqd.jpg"
                        width={100}
                        height={100}
                        objectFit='contain'
                    />
                </div>
                <div className="flex col-span-2">
                    <div className="mx-3">
                        <Link href="/product"><p className="font-bold cursor-pointer ">Product Name</p></Link>
                        <p>Price: price</p>
                        <label>Qty:</label>
                        <select name="qty" id="" className="mx-3">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                        </select>
                        
                        <TrashIcon className="w-6 border-2 hover:border-black rounded-md hover:bg-red-500 hover:text-white m-2"/>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem
