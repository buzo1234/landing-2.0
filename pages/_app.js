import 'tailwindcss/tailwind.css'
import { AppWrapper } from '../context/AppContext';
import { CartWrapper } from '../context/CartContext'; 

function MyApp({ Component, pageProps }) {
  return (
    <>
      
      <AppWrapper>
        <CartWrapper>
          <Component {...pageProps} />
        </CartWrapper>
      </AppWrapper>   
      
    </>
  );
}

export default MyApp
