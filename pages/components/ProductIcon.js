import Image from 'next/image';
import { useState, useEffect } from 'react';
import { CartState } from '../../context/AppContext';
import Router from 'next/router';

//Props required p_id, p_img, p_name, p_price

function ProductIcon({p_id, p_name, p_img, p_price}) {
    const {
        state: {products},
        
    } = CartState();
    const [imgurl, setImgurl] = useState('/prod_default.png');

    useEffect(() => {
        if(p_img === undefined){
            return;
        }
        else{
            setImgurl(p_img[0])
        }
    },[products]);

    function routeToProduct(){
        Router.push(`/products/${p_id}`)
    }
    
    return (
        <div className="flex justify-center items-center m-[0.5] rounded-lg hover:bg-gray-100 cursor-pointer w-36 md:w-44 lg:w-52 xl:w-56 mx-1" onClick={routeToProduct}>
                <div className="flex flex-col justify-center items-center m-1 border-2 border-porabay/10 hover:border-porabay/50 rounded-2xl bg-white shadow-md">
                    <div className="flex justify-center items-center p-1 -mb-2 rounded-2xl w-36 md:w-44 lg:w-52 xl:w-56  ">
                        <Image
                            src={imgurl}
                            width={200}
                            height={200}
                            objectFit="contain"
                            className="rounded-md"
                        />
                    </div>
                    <p className=" text-center line-clamp-1">{p_name}</p>
                    <p className=" text-center line-clamp-1 font-bold">₹ {p_price}</p>
                </div>
            
        </div>
        
    )
}

export default ProductIcon
