import Image from 'next/image';

function ProdIcon() {
    return (
        <div className="flex justify-center items-center m-2 p-3 border-2 border-porabay rounded-full transition duration-200 ease-in-out transform hover:scale-110">
                <Image
                    src="/porabay-logo.jpg"
                    height={60}
                    width={60}
                />
                    
        </div>
    )
}

export default ProdIcon
