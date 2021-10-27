
export const initialstate = {
    order:[],
    loading:false,
}

export const OrderReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_ORDER_REQUEST":
            return{
                ...state,
                loading:true,
            }

        case "ADD_TO_ORDER":
            const item = action.payload;
            return{
                ...state,
                order:[...state.order, item],
                loading:false,
            }
            

        case "REMOVE_FROM_ORDER":
            return {
                ...state, 
                order:state.order.filter(c => c.order_id !== action.payload)};
    
        default:
            return state;
    }
  };