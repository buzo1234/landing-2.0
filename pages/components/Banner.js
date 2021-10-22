import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel'
import Image from 'next/image'

function Banner() {
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
                        src="https://res.cloudinary.com/dcyaz9xch/image/upload/v1634882936/kk6f00xstpz4dbntjguv.jpg"
                        height={250}
                        width={250}
                        objectFit='contain'
                    />
                </div>
                <div>
                    <Image 
                        src="https://res.cloudinary.com/dcyaz9xch/image/upload/v1634888453/dqdaappqznbc8qdxpnqd.jpg"
                        height={250}
                        width={250}
                        objectFit='contain'
                    />
                </div>
                <div>
                    <Image 
                        src="https://res.cloudinary.com/dcyaz9xch/image/upload/v1634888528/ku9uhgzcy5pkcj83fzaa.jpg"
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
