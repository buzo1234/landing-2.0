import Image from 'next/image';
import Link from 'next/link';

function ProdIcon() {
    return (
        <Link href="/product">
            <div className="flex justify-center items-center m-2 p-3 border-2 border-porabay rounded-full transition duration-200 ease-in-out transform hover:scale-110 cursor-pointer">
                <Image
                    src="/porabay-logo.jpg"
                    height={60}
                    width={60}
                />         
            </div>
        </Link>
        
    )
}

export default ProdIcon
