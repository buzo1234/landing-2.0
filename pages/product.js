import Footer from "./components/Footer"
import Header from "./components/Header"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Banner from "./components/Banner";
import Seller from "./components/Seller";
import Link from "next/link";
import {ShoppingCartIcon} from '@heroicons/react/outline'

function product() {
    return (
        <div className="flex flex-col">
            <Header/>
            <div className="flex flex-col justify-center">
                <Banner/>
                <Seller/>
                <div className="flex flex-col justify-center w-full">
                    <div className="flex justify-center items-center p-2 ">Produt Name</div>
                    <div className="flex justify-center items-center p-2 "><b>Price: </b> Price</div>
                    <p className="flex mx-3 text-center text-sm ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, harum rem, sunt praesentium qui ex, officia obcaecati ipsum doloribus quisquam deleniti sed maxime ab iusto iste nobis est blanditiis. Ad!</p>
                </div>
            </div>
            <div className="flex justify-center items-center">
            <Link href="/cart">
                <div className="flex justify-center items-center m-4 py-3 px-10 text-porabay border-2 border-porabay rounded-3xl cursor-pointer w-full hover:text-white hover:bg-porabay hover:underline font-bold text-lg">
                    
                    <p className="mr-3">Add to Cart</p>
                    <ShoppingCartIcon className="w-6"/>
                    
                </div>
            </Link>
            </div>
            
            <Footer/>
            
            
        </div>
    )
}

export default product
