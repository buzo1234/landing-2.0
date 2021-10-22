import { createContext, useContext, useMemo, useReducer, useEffect } from "react";
import {AppReducer} from "./AppReducer";

const Cart = createContext();

export function AppWrapper({ children }) {
  const [state, dispatch] = useReducer(AppReducer, {cart : [], products : [], sellers: [], sellerdata: {}});

  const contextValue = useMemo(() => {
    return {state, dispatch};
  }, [state, dispatch]);
/*
  useEffect(() => {
    if (state !== initialState) {
      localStorage.setItem("state", JSON.stringify(state)); 
      //create and/or set a new localstorage variable called "state"
    }
  }, [state]);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("state"))) { 
      //checking if there already is a state in localstorage
      dispatch({
        type: "init_stored",
        value: JSON.parse(localStorage.getItem("state")), 
        //if yes, update the current state with the stored one
      });
    }
  }, []);

*/ 

  return (
    <Cart.Provider value={contextValue}>{children}</Cart.Provider>
  );
}

export function CartState() {
  return useContext(Cart);
}