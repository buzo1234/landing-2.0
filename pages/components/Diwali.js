import { useEffect, useState } from "react";
import ProductIcon from "./ProductIcon"

function Diwali({prod}) {
    const [name, setName] = useState('name');
    
    useEffect(() => {
        if(prod[0] !== ""){
            setName(prod[0]);
        }
    },[]);
    return (
        <div className="flex w-full justify center items-center px-3 m-1  rounded-sm hover:bg-gray-100 ">
            <div className="flex flex-col w-full">
                <div className="flex">
                    <p className="m-2 text-lg font-bold">{name}:</p>
                </div>
                <div className="flex overflow-x-scroll">
                    {prod ? prod.map((product, index) => {
                        if(index !== 0){
                            return(
                                <ProductIcon p_id={product._id} p_img={product.productimg} p_name={product.productname} key={index}/>
                            )
                        }
                    }) : ""
                    } 
                </div>
            </div>
        </div>
    )
}

export default Diwali
