
export const initialstate = {
    cart:[]
}

export const CartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            const item = action.payload;

            const existItem = state.cart.find((x) => x.product_id === item.product_id)

            if(existItem){
                return{
                    ...state,
                    cart: state.cart.map((x) => x.product_id === existItem.product_id ? item : x)
                }
            }

            else{
                return{
                    ...state,
                    cart:[...state.cart, item],
                }
            }

        case "REMOVE_FROM_CART":
            return {
                ...state, 
                cart:state.cart.filter(c => c.product_id !== action.payload)};

        case "CHANGE_CART_QTY" :
            console.log("Entered bhai")
            return{
                ...state,
                cart:state.cart.filter(c => c.product_id === action.payload.id ? (c.qty = action.payload.qty) : c.qty)
            }
    
        default:
            return state;
    }
  };