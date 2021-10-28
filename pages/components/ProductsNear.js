import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ProdIcon from './ProdIcon';
import { useEffect} from 'react';
import axios from 'axios';
import { CartState } from '../../context/AppContext';

function ProductsNear() {

    const {
        state: {products, loading},
        dispatch,
    } = CartState();
   
    useEffect(() => {
      dispatch({
        type:"GET_PRODUCTS_REQUEST"
      });
      axios.get('https://karanmahesh.herokuapp.com/products')
      .then(response => {
        if(response.data.length > 0) {
          
          /*for(let i=0; i<response.data.length; i++){
            dispatch({
              type:"GET_SELLER",
              payload: response.data[i],
            })
          }*/
          dispatch({
            type:"GET_PRODUCTS",
            payload: response.data,
          })
        }
      })
      .catch((err) => {
        console.log(err)
      })

    },[])

    function shuffleArray(array) {
      for (var i = array.length - 1; i > 0; i--) {
          var j = Math.floor(Math.random() * (i + 1));
          var temp = array[i];
          array[i] = array[j];
          array[j] = temp;
      }
    }

    if(products !== undefined){
      shuffleArray(products)
    }
    
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
                customTransition="transform 300ms ease-in-out"
                removeArrowOnDeviceType={["desktop","tablet","mobile","superLargeDesktop"]}
                responsive={responsive}
                centerMode
                slidesToSlide={2}
                minimumTouchDrag={1}
                autoPlaySpeed={4000}
            >
                {loading ? <h1 className="font-bold">Loading...</h1> :products.map((product) => {
                  return <ProdIcon {...product} key={product._id} />
                })}
            </Carousel>
        </div>
    )
}

export default ProductsNear
