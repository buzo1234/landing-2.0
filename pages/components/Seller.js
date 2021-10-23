import { useEffect, useState } from "react"
import { CartState } from "../../context/AppContext";
import axios from "axios";

function Seller({name,pic}) {
    const {
        state: { loading},
        dispatch,
    } = CartState();
    console.log('lag gaye')
    /*
    useEffect(() => {
      const sendGetRequest = async () => {
        
        try {
            dispatch({
              type:"GET_SELLER_REQUEST"
            });
            console.log('wtf')
            const resp = await axios.get(`https://karanmahesh.herokuapp.com/sellers/${sellerid}`);
            dispatch({
              type:"GET_SELLER_DETAILS",
              payload: resp.data
            });
        } catch (err) {
            console.error(err);
        }
      };
      sendGetRequest();
    }
    ,[router])
    */

    return (
        loading ? (<h1>Loading...</h1>) : (
          <>
            <div className="flex justify-start items-center m-2 p-1 rounded-md cursor-pointer hover:bg-gray-100 lg:justify-center xl:justify-center">
              
              <img src={pic} alt="propfilepic" className="w-8 h-8 object-contain rounded-full" />
              <span className="mx-2 text-sm text-gray-400 italic"><b>Made By : </b>{name}</span>
              <span className=" justify-end text-xs text-gray-400 italic">--see other products</span>
            
              
          </div>
          </>
        )
        
    )
}

export default Seller
