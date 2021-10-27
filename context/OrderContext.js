import { createContext, useContext, useMemo, useReducer, useEffect } from "react";
import {OrderReducer, initialstate} from "./OrderReducer";

const OrderItem = createContext();

export function OrderWrapper({ children }) {
  const [orderstate, orderdispatch] = useReducer(OrderReducer,initialstate, () => {
    if(typeof window !== "undefined") {
        if(localStorage.getItem("orders")) {
          return {order: JSON.parse(localStorage.getItem("orders")).order}
        } else{
        return {order: []}
        }
     }
  });
    

  const contextValue = useMemo(() => {
    return {orderstate, orderdispatch};
  }, [orderstate, orderdispatch]);

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
    localStorage.setItem('orders',JSON.stringify(orderstate))
  }, [orderstate]);


  return (
    <OrderItem.Provider value={contextValue}>{children}</OrderItem.Provider>
  );
}

export function OrderItemState() {
  return useContext(OrderItem);
}