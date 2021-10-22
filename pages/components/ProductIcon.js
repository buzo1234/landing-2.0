import Image from 'next/image';
import Link from 'next/link';

function ProductIcon() {
    return (
        <div className="flex justify-center items-center m-[0.5] rounded-lg hover:bg-gray-100 cursor-pointer">
            <Link href="/product">
                <div className="flex flex-col justify-center items-center m-1 border-2 border-porabay rounded-2xl bg-white">
                    <div className="flex justify-center items-center p-1 -mb-2 rounded-2xl w-36 md:w-44 lg:w-52 xl:w-56 ">
                        <Image
                            src="https://res.cloudinary.com/dcyaz9xch/image/upload/v1634882936/kk6f00xstpz4dbntjguv.jpg"
                            width={200}
                            height={200}
                            objectFit="contain"
                            className="rounded-sm"
                        />
                    </div>
                    <div className="flex justify-center items-center text-center m-1 rounded-md text-sm truncate"><p>Product Description</p></div>
                </div>
            </Link>
            
        </div>
        
    )
}

export default ProductIcon
