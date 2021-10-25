import Image from 'next/image';
import Link from 'next/link';
import Router from 'next/router';

function Category({c_id, c_name, c_img}) {
    function clickHandler() {
        Router.push(`/categories/${c_id}`)
    }
    return (
        <div className="max-h-80" onClick={clickHandler}>
                <div className="flex justify-center items-center m-[0.5] border-2 border-porabay/20 shadow-md bg-transparent rounded-2xl transition duration-500 ease-in-out transform hover:scale-105 cursor-pointer">
                    <div className="p-1">
                        <Image
                            src={c_img}
                            width={150}
                            height={150}
                            className="rounded-md"
                        />
                        <p className="text-center">{c_name}</p>
                    </div>
                </div>
            
        </div>
        
        
    )
}

export default Category
