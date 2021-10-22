export const AppReducer = (state, action) => {
    switch (action.type) {
        case "init_stored": {
            return action.value;
        }
        case "ADD_TO_CART":
            return {...state, cart:[...state.cart, {...action.payload, qty:1}]};

        case "REMOVE_FROM_CART":
            return {...state, cart:state.cart.filter(c => c.id !== action.payload.id)};


        case "GET_SELLERS_REQUEST":
            return {
                ...state, sellers:[]
            };

        case "GET_SELLERS":
            return{
                ...state,
                sellers:action.payload
            };

        case "GET_SELLER_DETAILS":
            return{
                ...state,
                sellerdata: action.payload
            }
        
        case "GET_PRODUCTS":
            return{
                ...state,
                products: action.payload
            }

        default:
            return state;
    }
  };