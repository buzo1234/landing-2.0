import 'tailwindcss/tailwind.css'
import { AppWrapper } from '../context/AppContext';
import { CartWrapper } from '../context/CartContext'; 
import { OrderWrapper } from '../context/OrderContext';

function MyApp({ Component, pageProps }) {
  return (
    <>
      
      <AppWrapper>
        <CartWrapper>
          <OrderWrapper>
          <Component {...pageProps} />
          </OrderWrapper>
        </CartWrapper>
      </AppWrapper>   
      
    </>
  );
}

export default MyApp
