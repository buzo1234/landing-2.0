import Image from 'next/image';
import {TrashIcon} from '@heroicons/react/solid'
import Link from 'next/link';
import Router from 'next/router';
import { CartItemState } from '../../context/CartContext';

function CartItem({item, removeHandler}) {
    const {cartdispatch} = CartItemState();
    const productrouter =(id) => [
        Router.push(`/products/${id}`)
    ]
    console.log(item.qty)
    return (
        <div>
            <div className="grid grid-cols-3 bg-gray-100 rounded-xl p-2 my-2">
                <div className="flex col-span-1 justify-center items-center">
                    <Image 
                        src={item.product_img}
                        width={100}
                        height={100}
                        objectFit='contain'
                    />
                </div>
                <div className="flex col-span-2">
                    <div className="mx-3">
                        <p className="font-bold cursor-pointer " onClick={() => productrouter(item.product_id)}>{item.product_name}</p>
                        <p>Price: ₹ {item.product_price}</p>
                        <label>Qty:</label>
                        <select name="qty" id="" className="mx-3" value={item.qty} onChange={(e) => cartdispatch({
                            type:"CHANGE_CART_QTY",
                            payload:{
                                id:item.product_id,
                                qty: e.target.value,
                            }
                        })}>
                            {[...Array(10).keys()].map(x => (
                                <option key={x+1} value={x+1}>{x+1}
                                </option>
                                ))}
                        </select>
                        
                        <TrashIcon className="w-6 border-2 border-red-800 hover:border-black rounded-md hover:bg-red-500 hover:text-white m-2" onClick={() => removeHandler(item.product_id)}/>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem
