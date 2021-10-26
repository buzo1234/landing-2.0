import { CartState } from "../context/AppContext"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Head from 'next/head';
import { CartItemState } from "../context/CartContext";
import Checkoutprod from "./components/Checkoutprod";
import Router  from "next/router";

function checkout() {

    const {cartstate} = CartItemState();

    const getCartSubTotal = () => {
        return cartstate.cart.reduce((product_price, item) => item.product_price*Number(item.qty) + product_price, 0);
    }

    const confirmRouter = () => {
        Router.push("/orderconfirm")
    }

    return (
        <div>{!cartstate ? <h1 className="font-bold text-lg">Loading...</h1> : (
            <>
                <Head>
                <title>Porabay</title>
                <link rel="icon" href="/porabay-logo.jpg" />
            </Head>
            <Header/>
            <div className="max-w-4xl mx-auto">
                    <div className="flex flex-col justify-center items-center mt-10 max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto ">
                        <div className="flex flex-col justify-center items-center w-full">
                            <form action="" className="w-full">
                            <div className="relative justify-center items-center w-full">
                                <div className="absolute text-xs justify-center items-center text-porabay bg-white ml-3 p-1 -mt-1">Name</div>
                                <input required type="text" placeholder="Enter Name"  className="border-2 border-porabay my-2 p-2 rounded-md focus:border-black w-full" />
                            </div>
                            
                            <div className="relative justify-center items-center w-full">
                                <div className="absolute text-xs text-porabay bg-white ml-3 p-1 -mt-1">Contact</div>
                                <input required type="number" placeholder="Enter Contact no." className="border-2 border-porabay my-2 p-2 rounded-md focus:border-black w-full"  />
                                
                            </div>

                            <div className="arelative justify-center items-center w-full">
                                <div className="absolute text-xs text-porabay bg-white ml-3 p-1 -mt-1">Email Address</div>
                                <input  type="text" placeholder="Enter Address" className="border-2 border-porabay my-2 p-2 rounded-md focus:border-black w-full" />
                                
                            </div>  
        
                            <div className="arelative justify-center items-center w-full">
                                <div className="absolute text-xs text-porabay bg-white ml-3 p-1 -mt-1">Complete Address</div>
                                <input required type="text" placeholder="Enter Delivery Address" className="border-2 border-porabay my-2 p-2 rounded-md focus:border-black w-full" />
                                
                            </div>   
                            </form>            
                        </div>
                       
                    </div>
                    <div className="flex flex-col p-2 ">
                        <div>
                            <p className="font-vold underline">Payment Option</p>
                            <input type="radio" value="COD/UPI on delivery"/>
                            <label htmlFor=""> Cash/UPI on delivery</label>
                            
                        </div>
                        <div className="text-right mr-2">
                            <p className="font-bold underline">Sub Total:</p>
                            <p>Item Value : ₹ {getCartSubTotal()}</p>
                            <p>Delivery : ₹ 50</p>
                            <p className="underline"><b>Toal Amount : </b>₹ {getCartSubTotal() + Number(50)} </p>
                        </div>
                        
                    </div>
                    <p className="font-bold mx-4 mt-3 text-md">Your Items...</p>
                    {cartstate.cart.map((cartitem) => {
                        return (
                            <Checkoutprod 
                                p_id = {cartitem.product_id}
                                p_img={cartitem.product_img}
                                p_name={cartitem.product_name}
                                p_price={cartitem.product_price}
                                p_qty = {cartitem.qty}
                            />
                        )
                    })}
                    <div className="flex justify-center items-center mt-8">
                        <button className="border-2 border-porabay p-3 rounded-2xl text-lg font-bold bg-porabay/70 shadow-xl" onClick={() => confirmRouter()}>Confirm and Place Order</button>
                    </div>
                    
            </div>
            <Footer/>
            </>
        ) }
            
        </div>
    )
}

export default checkout
