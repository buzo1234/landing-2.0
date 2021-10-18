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
                        src="/porabay-logo.jpg"
                        height={200}
                        width={200}
                    />
                </div>
                <div>
                    <Image 
                        src="/porabay-logo.jpg"
                        height={200}
                        width={200}
                    />
                </div>
                <div>
                    <Image 
                        src="/porabay-logo.jpg"
                        height={200}
                        width={200}
                    />
                </div>
            </Carousel>
        </div>
    )
}

export default Banner
