import Image from 'next/image';
import Router from 'next/router';

function Sellerproducts({p_name, p_img, p_price, p_id}) {

    const producthandler = (id) => {
        Router.push(`../products/${id}`)
    }

    return (
        <div className="col-span-1 ">
            <div className="flex flex-col justify-center items-center p-1 m-2 border-2 border-porabay/20 hover:border-porabay/50 rounded-3xl shadow-lg bg-white cursor-pointer" onClick={() => producthandler(p_id)}>
                <Image
                    src={p_img}
                    height={120}
                    width={120}
                    objectFit='contain'
                    
                />
                <p className="line-clamp-1 text-lg">{p_name}</p>
                <p>₹ {p_price}</p>
            </div>
        </div>
    )
}

export default Sellerproducts
