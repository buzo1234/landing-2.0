import { createContext, useContext, useMemo, useReducer, useEffect } from "react";
import {CartReducer, initialstate} from "./CartReducer";

const CartItem = createContext();

export function CartWrapper({ children }) {
  const [cartstate, cartdispatch] = useReducer(CartReducer,initialstate, () => {
    if(typeof window !== "undefined") {
        if(localStorage.getItem("cartItems")) {
          return {cart: JSON.parse(localStorage.getItem("cartItems")).cart}
        } else{
        return {cart: []}
        }
     }
  });
    

  const contextValue = useMemo(() => {
    return {cartstate, cartdispatch};
  }, [cartstate, cartdispatch]);

  /*}
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("state"))) { 
      //checking if there already is a state in localstorage
      dispatch({
        type: "init_stored",
        value: JSON.parse(localStorage.getItem("state")), 
        //if yes, update the current state with the stored one
      });
    }
  }, []);*/
  useEffect(() => {
    localStorage.setItem('cartItems',JSON.stringify(cartstate))
  }, [cartstate]);


  return (
    <CartItem.Provider value={contextValue}>{children}</CartItem.Provider>
  );
}

export function CartItemState() {
  return useContext(CartItem);
}