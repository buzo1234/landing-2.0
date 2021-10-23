import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel'
import Image from 'next/image'
import { CartState } from "../../context/AppContext";
import { useState, useEffect } from "react";

function Banner({productimg}) {

    const {
        state: {loading}
    } = CartState();
    const [imgurl, setImgurl] = useState(['/prod_default.png']);

    useEffect(() => {
        if(productimg!==undefined){
            setImgurl(productimg);
        }
    })
    return (
        !loading ? (
        <div className="relative mt-5 max-w-6xl mx-auto">
           
            <Carousel
                autoPlay
                infiniteLoop
                showStatus={false}
                showIndicators={true}
                showThumbs={false}
                interval={3000}
                emulateTouch={true}
            >     

                    {imgurl.map((prodimg) => (
                        <div>
                            <Image 
                                src={prodimg}
                                height={250}
                                width={250}
                                objectFit='contain'
                            />   
                        </div>
                        
                    ))}
                
                
            </Carousel>
            
        </div>
        ) : (<h1>Loading...</h1>)
    )
}

export default Banner
