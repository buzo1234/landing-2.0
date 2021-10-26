import Image from 'next/image';
import Router from 'next/router';

function Checkoutprod({p_id, p_img, p_name, p_price ,p_qty }) {
    const productrouter =(id) => {
        Router.push(`/products/${id}`)
    }
    return (
        <div>
            <div className="grid grid-cols-3 bg-gray-100 rounded-xl p-2 my-2" >
                        <div className="flex col-span-1 justify-center items-center">
                            <Image 
                                src={p_img}
                                width={100}
                                height={100}
                                objectFit='contain'
                            />
                        </div>
                        <div className="flex col-span-2" onClick={() => productrouter(p_id)}>
                            <div className="mx-3">
                                <p className="font-bold cursor-pointer ">{p_name}</p>
                                <p className="underline">Price: ₹ {p_price}</p>
                                <p className="underline">Qty: {p_qty} </p>                        
                            </div>
                        </div>
                    </div>
        </div>
    )
}

export default Checkoutprod
