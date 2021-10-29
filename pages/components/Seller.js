import { useEffect, useState } from "react"
import { CartState } from "../../context/AppContext";
import axios from "axios";
import Router from 'next/router';

function Seller({name,pic,s_id}) {
    const {
        state: { loading},
    } = CartState();

    const gotosellerpage = (id) => {
        Router.push(`../sellers/${id}`)
    }

    return (
        loading ? (<h1>Loading...</h1>) : (
          <>
            <div className="flex justify-start items-center m-2 p-1 rounded-xl cursor-pointer hover:bg-gray-100 lg:justify-center xl:justify-center bg-white" onClick={() => gotosellerpage(s_id)}>
              
              <img src={pic} alt="propfilepic" className="w-8 h-8 object-contain rounded-full" />
              <span className="mx-2 text-sm text-gray-400 italic"><b>Made By : </b>{name}</span>
              <span className=" justify-end text-xs text-gray-400 italic">--see other products</span>
            
              
          </div>
          </>
        )
        
    )
}

export default Seller
