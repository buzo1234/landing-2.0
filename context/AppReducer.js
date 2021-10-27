export const initialstate = {
    products : [],
    sellers: [],
    sellerdata: [],
    loading: false,
    productdata : {},
    categorydata : []
}

export const AppReducer = (state, action) => {
    switch (action.type) {
        case "init_stored": {
            return action.value;
        }
        case "GET_SELLERS_REQUEST":
            return {
                ...state,
                loading: true,
                sellers:[]
            };

        case "GET_SELLERS":
            return{
                ...state,
                loading: false,
                sellers:action.payload
            };

        case "GET_SELLER_REQUEST" :
            return{
                ...state,
                loading: true,
                sellerdata: {}
            }
        case "GET_SELLER_DETAILS":
            return{
                ...state,
                loading:false,
                sellerdata: action.payload
            }

        case "GET_PRODUCTS_REQUEST":
            return {
                 ...state,
                loading: true,
                products:[]
            };
    
        case "GET_PRODUCTS":
            return{
                ...state,
                loading: false,
                products:action.payload
            };
    
        case "GET_PRODUCT_REQUEST" :
            return{
                ...state,
                loading:true,
            }
        case "GET_PRODUCT_DETAILS":
            return{
                ...state,
                loading: false,
                productdata: action.payload
            }


        
        default:
            return state;
    }
  };