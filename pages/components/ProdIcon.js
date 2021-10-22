import Image from 'next/image';
import Link from 'next/link';
import {useEffect, useState} from 'react';

function ProdIcon({seller}) {

    const [imgurl, setImgurl] = useState('/user.png');
    useEffect(() => {
        if(seller.profilepic !== ""){
            setImgurl(seller.profilepic);
        }
    },[]);

    
    return (
        <Link href={`/products/${seller._id}`}>
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
        
    )
}

export default ProdIcon
