import Footer from "../components/Footer"
import Header from "../components/Header"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Banner from "../components/Banner";
import Seller from "../components/Seller";
import Link from "next/link";
import {ShoppingCartIcon} from '@heroicons/react/outline'
import { CartState } from "../../context/AppContext";
import axios from "axios";
import {useRouter} from 'next/router';
import {useEffect} from 'react';

function product() {
    const {state : {sellerdata, loading}, dispatch,} = CartState();
    
    function producthandler() {
        const router = useRouter()
        const productid = router.query.productid
        useEffect(()=>{
            dispatch({
                type:"GET_SELLER_REQUEST"
            })
            axios.get(`https://karanmahesh.herokuapp.com/sellers/${productid}`)
            .then(response => {
                dispatch({
                    type:"GET_SELLER_DETAILS",
                    payload:response.data
                })
                
            }).catch((err) => {
                console.log(err)
            })
        },[dispatch,router]);
    }

    producthandler();
    
    return (
        <div className="flex flex-col">
            <Header/>
            {loading ? <h1 className="font-bold">Loading....</h1> : 
            <>
            <div className="flex flex-col justify-center">
                <Banner {...sellerdata} key={sellerdata.contact}/>
                <Seller {...sellerdata} key={sellerdata._id}/>
                <div className="flex flex-col justify-center w-full">
                    <div className="flex justify-center items-center p-2 "><p><b>Price: </b>₹ {sellerdata.contact}</p></div>
                    <div className="flex justify-center items-center p-2 ">{sellerdata.name}</div>
                    <p className="flex justify-center mx-3 text-center text-sm  ">{sellerdata.address}</p>
                </div>
            </div>
            <div className="flex justify-center items-center">
            <Link href="/cart">
                <div className="flex justify-center items-center m-4 py-3 px-10 text-porabay border-2 border-porabay rounded-3xl cursor-pointer w-full hover:text-white hover:bg-porabay hover:underline font-bold text-lg">
                    
                    <p className="mr-3">Add to Cart</p>
                    <ShoppingCartIcon className="w-6"/>
                    
                </div>
            </Link>
            </div>
            </>
            }
            <Footer/>
            
            
        </div>
    )
}

export default product
