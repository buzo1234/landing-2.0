import { useEffect, useState } from "react"

function Seller({sellername, profilepic}) {
    const [imgurl, setImgurl] = useState();
    useEffect(() => {
        if(profilepic !== ""){
            setImgurl(profilepic);
        }
        else{
            setImgurl("/user.png");
        }
    },[])
    return (
        <div className="flex justify-start items-center m-2 p-1 rounded-md cursor-pointer hover:bg-gray-100 lg:justify-center xl:justify-center">
            <img src={imgurl} alt="propfilepic" className="w-8 h-8 object-contain rounded-full" />
            <span className="mx-2 text-sm text-gray-400 italic"><b>Made By : </b>{sellername}</span>
            <span className=" justify-end text-xs text-gray-400 italic">--see other products</span>
        </div>
    )
}

export default Seller
