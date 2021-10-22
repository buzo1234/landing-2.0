import Footer from './components/Footer'
import Header from './components/Header'
import Link from 'next/link'
import CartItem from './components/CartItem'

const cart = () => {
    return (
        <div>
           <Header/>
           <Link href="/subcategories">
                <div>
                    <p className="text-xs underline cursor-pointer hover:text-porabay m-4">Continue Shopping</p>
                </div>
           </Link>
           <div className="mx-3">
               <CartItem/>
               <CartItem/>
               <CartItem/>
           </div>
           <div className="flex flex-col justify-center items-center m-4 mt-5">
               <p><b>SubTotal:</b> price</p>
               <Link href="/checkout">
                    <div className="flex justify-center items-center m-4 py-3 px-10 text-porabay border-2 border-porabay rounded-3xl cursor-pointer hover:text-white hover:bg-porabay hover:underline hover:border-black font-bold text-lg">
                        <p>Proceed To Checkout</p>
                    </div>
               </Link>
           </div>
           <Footer/>
        </div>
    )
}

export default cart
