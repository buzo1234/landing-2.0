import Link from 'next/link';

function Footer() {
    return (
        <div className="flex bg-porabay/80 justify-center mt-11">
            <div className="flex flex-col m-5 justify-center items-center w-full">
                <Link href="/support">
                    <div className="flex w-full justify-center items-center text-white bg-porabay/30 border-2 border-porabay rounded-lg m-2 p-2 cursor-pointer hover:border-black"><b>Support</b></div>
                </Link>
                <Link href="/whoarewe">
                    <div className="flex w-full justify-center items-center text-white bg-porabay/30 border-2 border-porabay rounded-lg m-2 p-2 cursor-pointer hover:border-black"><b>Who are we?</b></div>
                </Link>   
            </div>
        </div>
    )
}

export default Footer


