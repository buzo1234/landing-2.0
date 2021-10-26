import Footer from './components/Footer'
import Header from './components/Header'
import Link from 'next/link'
import CartItem from './components/CartItem'
import { CartItemState } from '../context/CartContext'
import { useEffect, useState } from 'react'
import Head from 'next/head';

const cartarea = () => {
    const {cartstate, cartdispatch} = CartItemState();

    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        if(cartstate !== 'undefined'){
            setLoading(false);
        }
    },[])
    

    const removeHandler = (id) => {
        console.log("popping")
        cartdispatch({
            type:"REMOVE_FROM_CART",
            payload: id
        })
        localStorage.setItem('cartItems',JSON.stringify(cartstate.cart))

    }

    const getCartSubTotal = () => {
        return cartstate.cart.reduce((product_price, item) => item.product_price*Number(item.qty) + product_price, 0);
    }

    

    return (
        <div>
            <Head>
                <title>Porabay</title>
                <link rel="icon" href="/porabay-logo.jpg" />
            </Head>
           {loading ? <h1>Loading...</h1> : 
           <>
                
           <Header/>
           
            <div className="max-w-4xl mx-auto">
           <Link href="/">
                <div>
                    <p className="text-sm underline cursor-pointer hover:text-porabay m-4">&lt;--Continue Shopping</p>
                    
                </div>
           </Link>
           <div className="mx-3">
           {cartstate.cart.length === 0 ? (
                    <div>
                        Your Cart is empty
                    </div>
                ) : cartstate.cart.map(item => (
                    <CartItem key={item.product_id} p_img={item.product_img} p_id={item.product_id} p_name={item.product_name} p_price={item.product_price} p_qty={item.qty} removeHandler={removeHandler}/>
                ))       
                    
                }
           </div>
           <div className="flex flex-col justify-center items-center m-4 mt-5">
               <p className="text-lg"><b>SubTotal: </b>₹ {getCartSubTotal()}</p>
               <Link href="/checkout">
                   {cartstate.cart.length>0 ? (
                        <div className="flex justify-center items-center m-4 py-3 px-10 text-porabay border-2 border-porabay rounded-3xl cursor-pointer hover:text-white hover:bg-porabay hover:underline hover:border-black font-bold text-lg">
                            <p>Proceed To Checkout</p> 
                        </div>
                   ) : ""}
                    
               </Link>
           </div>
           </div>
           <Footer/>
           </>
           }
           
        </div>
    )
}

export default cartarea
