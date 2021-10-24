import { createContext, useContext, useMemo, useReducer, useEffect } from "react";
import {AppReducer, initialstate} from "./AppReducer";

const Cart = createContext();

export function AppWrapper({ children }) {
  const [state, dispatch] = useReducer(AppReducer,initialstate);
    

  const contextValue = useMemo(() => {
    return {state, dispatch};
  }, [state, dispatch]);

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
    localStorage.setItem('state',JSON.stringify(state))
  }, [state]);


  return (
    <Cart.Provider value={contextValue}>{children}</Cart.Provider>
  );
}

export function CartState() {
  return useContext(Cart);
}