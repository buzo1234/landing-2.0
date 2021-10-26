import Footer from "../components/Footer";
import Header from "../components/Header";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Banner from "../components/Banner";
import Seller from "../components/Seller";
import {ShoppingCartIcon} from '@heroicons/react/outline'
import { CartState } from "../../context/AppContext";
import axios from "axios";
import {useRouter} from 'next/router';
import {useEffect, useState} from 'react';
import Router from "next/router";
import { CartItemState } from "../../context/CartContext";
import React from "react";
import Head from 'next/head';


function product() {
    const {state : {productdata, loading}, dispatch,} = CartState();
    const { cartdispatch} = CartItemState();
    const [qty, setQty] = useState(1);

    const router = useRouter();
    const productid = router.query.productid;

    useEffect(()=>{
        dispatch({
            type:"GET_PRODUCT_REQUEST"
        });
        axios.get(`https://karanmahesh.herokuapp.com/products/${productid}`)
        .then(response => {
            dispatch({
                type:"GET_PRODUCT_DETAILS",
                payload:response.data
            })
            
        }).catch((err) => {
            console.log(err)
        })

    },[router]);

    
    var name = ((productdata || {}).sellerid || {}).sellername;
    var pic = ((productdata || {}).sellerid || {}).profilepic;

    if(pic==="") pic='/user.png'

    const addToCartHandler = () => {
        cartdispatch({
            type:"ADD_TO_CART",
            payload:{
                product_id : productdata._id,
                product_name: productdata.productname,
                product_img : productdata.productimg[0],
                product_price : productdata.productprice,
                seller_name : productdata.sellerid.sellername,
                seller_contact : productdata.sellerid.contact,
                seller_address : productdata.sellerid.address,
                seller_delivery : productdata.sellerid.delivery,
                qty
            }
        })
        Router.push("/cartarea")
    }

    console.log(productdata)

   var arr = [];


    return (
        
        <div className="flex flex-col">
            
            <Head>
                <title>Porabay</title>
                <link rel="icon" href="/porabay-logo.jpg" />
            </Head>
            <Header/>
            <div className="max-w-4xl mx-auto">
            {loading ? (<h1>Loading...</h1>) : (<>
            <div className="flex flex-col justify-center">
                <div className="flex justify-center items-center text-center font-bold mt-5 text-lg">
                    {productdata.productname}
                </div>
                <React.Fragment key={productdata.productimg}>
                <Banner productimg={productdata.productimg}/>
                </React.Fragment>
                <Seller name={name} pic={pic} key={productdata._id}/>
                <div className="flex flex-col justify-center w-full ">
                    <div className="flex justify-center items-center p-2 text-center"><p className="underline"><b>Price: </b>₹ {productdata.productprice}</p></div>
                    
                    <p className="text-center">Qty:
                        <select value={qty} onChange={(e) => setQty(e.target.value)} className="border-2 border-porabay m-3 p-1 rounded-lg">
                            {[...Array(10).keys()].map((x) => (
                                <option key={x+1} value={x+1}>{x+1}</option>
                            ))}
                        </select>
                    </p>
                </div>
            </div>
            
           
            <div className="flex justify-center items-center">
            
                <div className="flex justify-center items-center m-4 py-3 px-10 text-porabay border-2 border-porabay rounded-3xl cursor-pointer w-full hover:text-white hover:bg-porabay hover:underline font-bold text-lg" onClick={addToCartHandler}>
                    
                    <p className="mr-3">Add to Cart</p>
                    <ShoppingCartIcon className="w-6"/>
                    
                </div>
            
            </div>

            <div className="flex flex-col justify-center w-full ">
                    <p className="font-bold mx-5 mt-2 mb-2">Description:</p>
                    <p className="whitespace-pre-wrap my-[0.5]  mx-5 text-sm">{productdata.productdesc}</p>
            </div>
            
            </>)}
            </div>
            <Footer/>
            
            
        </div>
    )
}

export default product
