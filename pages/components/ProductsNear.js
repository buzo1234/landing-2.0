import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from 'next/image'
import ProdIcon from './ProdIcon';

function ProductsNear() {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 8
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 6
        },
        tablet: {
          breakpoint: { max: 1024, min: 400 },
          items: 5
        },
        mobile: {
          breakpoint: { max: 400, min: 0 },
          items: 4
        }
    };

    return (
        <div>
            <Carousel
                swipeable={true}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={4000}
                customTransition="transform 300ms ease-in-out"
                transitionDuration={300}
                removeArrowOnDeviceType={["desktop","tablet","mobile","superLargeDesktop"]}
                responsive={responsive}
                centerMode
                slidesToSlide={2}
            >
                <ProdIcon/>
                <ProdIcon/>
                <ProdIcon/>
                <ProdIcon/>
                <ProdIcon/>
                <ProdIcon/>
                <ProdIcon/>
                <ProdIcon/>
                <ProdIcon/>
                <ProdIcon/>
                <ProdIcon/>

            </Carousel>
        </div>
    )
}

export default ProductsNear
