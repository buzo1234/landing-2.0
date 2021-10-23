import Image from 'next/image';
import Link from 'next/link';
import {useEffect, useState} from 'react';
import { CartState } from '../../context/AppContext';

function ProdIcon({productimg, _id, sellerid}) {

    const {
        state: {products},
        dispatch,
    } = CartState();

    const [imgurl, setImgurl] = useState('/user.png');
    
    useEffect(() => {
        if(productimg[0] !== ""){
            setImgurl(productimg[0]);
        }
    },[products]);
    return (
        <div>

       
        <Link href={`/products/${_id}`}>
            <div className="flex justify-center mx-1 p-1 border-2 border-porabay rounded-full transition duration-200 ease-in-out transform hover:scale-110 cursor-pointer my-3 ">
                <Image
                    src={imgurl}
                    height={100}
                    width={100}
                    objectFit='contain'
                    className="rounded-full"
                />         
            </div>
        </Link>
        </div>
    )
}

export default ProdIcon
