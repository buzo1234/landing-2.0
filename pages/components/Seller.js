import { useEffect, useState } from "react"
import { CartState } from "../../context/AppContext";
import axios from "axios";

function Seller({sellerid}) {
    const {
        state: {sellerdata, loading},
        dispatch,
    } = CartState();

    const [imgurl, setImgurl] = useState();

    console.log("khatam")

    useEffect(() => {
        dispatch({
            type:"GET_SELLER_REQUEST"
          });
        axios.get(`https://karanmahesh.herokuapp.com/sellers/${sellerid}`)
        .then(response => {
          if(response.data) {
            
            dispatch({
              type:"GET_SELLER_DETAILS",
              payload: response.data,
            })
          }
          else{
              console.log(response)
          }
        })
        .catch((err) => {
          console.log(err)
        })
    },[sellerid])

    useEffect(() => {
        if(sellerdata.profilepic !== ""){
            setImgurl(sellerdata.profilepic);
        }
        else{
            setImgurl("/user.png");
        }
        console.log("idhar bhi")
    },[])

    return (
        <div className="flex justify-start items-center m-2 p-1 rounded-md cursor-pointer hover:bg-gray-100 lg:justify-center xl:justify-center">
            {loading? 
            <h1 className="font-bold">Loading...</h1>
            :
            <>
            <img src={imgurl} alt="propfilepic" className="w-8 h-8 object-contain rounded-full" />
            <span className="mx-2 text-sm text-gray-400 italic"><b>Made By : </b>{sellerdata.sellername}</span>
            <span className=" justify-end text-xs text-gray-400 italic">--see other products</span>
            </>
            }
            
        </div>
    )
}

export default Seller
