import Image from 'next/image';
import Link from 'next/link';
import {useEffect, useState} from 'react';
import { CartState } from '../../context/AppContext';

function ProdIcon({productimg, productname, _id, sellerid}) {

    const {
        state: {products},
        dispatch,
    } = CartState();

    const [imgurl, setImgurl] = useState('/user.png');
    const [name, setName] = useState('Loading');
    
    useEffect(() => {
        if(productimg[0] !== ""){
            setImgurl(productimg[0]);
        }
        if(productname !== ""){
            setName(productname);
        }
    },[products]);
    return (
        <div>

       
        <Link href={`/products/${_id}`}>
            <div className="flex flex-col justify-center mx-1 border-2 border-porabay/50 shadow-md rounded-full transition duration-200 ease-in-out transform hover:scale-110 cursor-pointer my-2 mb-3 bg-white md:py-3 md:my-4 lg:py-4 lg:my-5 ">
                <Image
                    src={imgurl}
                    height={100}
                    width={100}
                    objectFit='contain'
                    className="rounded-full p-0"
                />     
                
            </div>
               
        </Link>
        <p className=" text-xs text-center line-clamp-1 -mt-1 px-2 md:-mt-2 lg:-mt-3 xl:-mt-3">{name}</p> 
        </div>
    )
}

export default ProdIcon
