import Image from 'next/image';

function ProductIcon() {
    return (
        <div className="flex justify-center items-center m-[0.5] rounded-lg hover:bg-gray-100">
            <div className="flex justify-center items-center m-1 border-2 border-porabay rounded-2xl bg-white">
                <div className="flex justify-center items-center p-1 rounded-2xl w-14 md:w-16 lg:w-20 xl:w-24">
                    <Image
                        src="/porabay-logo.jpg"
                        width={100}
                        height={100}
                        objectFit="contain"
                    />
                </div>
            </div>
        </div>
        
    )
}

export default ProductIcon
