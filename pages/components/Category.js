import Image from 'next/image';

function Category() {
    return (
        <div className="flex justify-center items-center m-3 p-2 border-2 border-porabay rounded-2xl transition duration-500 ease-in-out transform hover:scale-110">
            <div className="p-3">
                <Image
                    src="/art.png"
                    width={150}
                    height={150}
                />
            </div>
        </div>
        
    )
}

export default Category
