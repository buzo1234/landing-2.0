import Image from 'next/image';
import Router from 'next/router';

function Checkoutprod({p_id, p_img, p_name, p_price ,p_qty, p_comment }) {
    const productrouter =(id) => {
        Router.push(`/products/${id}`)
    }
    return (
        <div>
            <div className="grid grid-cols-3 bg-white rounded-2xl p-2 my-2" >
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
                                {p_comment === "" ? <p className="text-sm">no customizations added</p> : (
                                    <>  
                                        <p className="text-sm">From you:</p>
                                        <p className="whitespace-pre-wrap text-xs ml-2 mr-2 overflow-x-scroll w-40 md:w-60 lg:w-80 xl:w-96">{p_comment}</p> 
                                    </>
                                )}
                                                       
                            </div>
                        </div>
                    </div>
        </div>
    )
}

export default Checkoutprod
