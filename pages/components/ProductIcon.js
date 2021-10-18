import Image from 'next/image';
import Link from 'next/link';

function ProductIcon() {
    return (
        <div className="flex justify-center items-center m-[0.5] rounded-lg hover:bg-gray-100 cursor-pointer">
            <Link href="/product">
                <div className="flex flex-col justify-center items-center m-1 border-2 border-porabay rounded-2xl bg-white">
                    <div className="flex justify-center items-center p-1 rounded-2xl w-16 md:w-20 lg:w-24 xl:w-28">
                        <Image
                            src="/porabay-logo.jpg"
                            width={100}
                            height={100}
                            objectFit="contain"
                        />
                    </div>
                    <div className="flex justify-center items-center text-center m-1 border border-purple-400 rounded-md"><p>Product Description</p></div>
                </div>
            </Link>
            
        </div>
        
    )
}

export default ProductIcon
