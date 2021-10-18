import Image from 'next/image';
import Link from 'next/link';

function Category() {
    return (
        <div>
            <Link href="/subcategories">
                <div className="flex justify-center items-center m-3 p-2 border-2 border-porabay rounded-2xl transition duration-500 ease-in-out transform hover:scale-110 cursor-pointer">
                    <div className="p-3">
                        <Image
                            src="/art.png"
                            width={150}
                            height={150}
                        />
                    </div>
                </div>
            </Link>
            
        </div>
        
        
    )
}

export default Category
