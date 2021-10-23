import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel'
import Image from 'next/image'
import { useState, useEffect } from "react";

function Banner({profilepic}) {
    const [imgpic,setImg] = useState();

    useEffect(() => {
        if(profilepic !== ""){
            setImg(profilepic);
        }
        else{
            setImg("/user.png")
        }
    },[]);


    return (
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
                <div>
                    <Image 
                        src={imgpic}
                        height={250}
                        width={250}
                        objectFit='contain'
                    />
                </div>
                
            </Carousel>
            
        </div>
    )
}

export default Banner
