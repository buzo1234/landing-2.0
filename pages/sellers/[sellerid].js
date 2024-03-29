import {useRouter} from 'next/router';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Head from 'next/head';
import {useEffect, useState} from 'react';
import axios from 'axios';
import { CartState } from '../../context/AppContext';
import Image from 'next/image';
import Sellerproducts from '../components/Sellerproducts';


function Sellerpage () {
    const {state : {sellerdata, loading}, dispatch,} = CartState();

    const router = useRouter();
    const sellerid = router.query.sellerid;

    useEffect(()=>{
        dispatch({
            type:"GET_SELLER_REQUEST"
        })
        axios.get(`https://localkamaal-backend.vercel.app/products/seller/${sellerid}`)
        .then(response => {
            dispatch({
                type:"GET_SELLER_DETAILS",
                payload: response.data
            })
            
        }).catch((err) => {
            console.log(err)
        })

    },[router]);

    var pic = ((sellerdata[0] || {}).sellerid || {}).profilepic;
    var name = ((sellerdata[0] || {}).sellerid || {}).sellername;
    if(pic==="") pic='/user.png'


    return (
        <div className="bg-offwhite">
            <Head>
                <title>{name} | LocalKamaal</title>
                <link rel="icon" href="/localkamaal.jpg" />
            </Head>
            <Header/>
            {!loading&&(sellerdata[0]!==undefined) ? (
                <>
                <div className="max-w-4xl mx-auto">
                    <div className="flex flex-col justify-center items-center mt-5">
                        <Image
                            src={pic}
                            width={100}
                            height={100}
                            objectFit='contain'
                            className="rounded-full"
                        />
                        <p className="font-bold">{name}</p>
                    </div>

                    <p className="font-bold mt-5 ml-4">Products...</p>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
                        {sellerdata.map((seldata) => {
                            return(
                            <Sellerproducts p_name={seldata.productname} p_img={seldata.productimg[0] } p_price={seldata.productprice} p_id={seldata._id} key={seldata._id} />)
                        })}
                        
                    </div>
                </div> 
                </>
            ) : <h1>Loading...</h1>}
            
            <Footer/>
        </div>
    )
}

export default Sellerpage
