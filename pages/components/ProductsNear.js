import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ProdIcon from './ProdIcon';
import { useEffect} from 'react';
import axios from 'axios';
import { CartState } from '../../context/AppContext';

function ProductsNear() {

    const {
        state: {sellers},
        dispatch,
    } = CartState();
   
    useEffect(() => {
      axios.get('http://localhost:5000/sellers')
      .then(response => {
        if(response.data.length > 0) {
          dispatch({
            type:"GET_SELLERS_REQUEST"
          });
          /*for(let i=0; i<response.data.length; i++){
            dispatch({
              type:"GET_SELLER",
              payload: response.data[i],
            })
          }*/
          dispatch({
            type:"GET_SELLERS",
            payload: response.data,
          })
          
        }
      })
      .catch((err) => {
        console.log(err)
      })

    },[])
    
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 7
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5
        },
        tablet: {
          breakpoint: { max: 1024, min: 400 },
          items: 4
        },
        mobile: {
          breakpoint: { max: 400, min: 0 },
          items: 3
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
                {sellers.map((seller) => {
                  return <ProdIcon {...seller} key={seller._id} />
                })}
            </Carousel>
        </div>
    )
}

export default ProductsNear
