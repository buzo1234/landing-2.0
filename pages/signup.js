import Footer from "./components/Footer"
import Header from "./components/Header"
import Head from 'next/head';

function signup() {
    return (
        <div>
            <Head>
                <title>Porabay</title>
                <link rel="icon" href="/porabay-logo.jpg" />
            </Head>
            <Header/>
            <div className="flex flex-col justify-center items-center mt-10 max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto ">
                <div className="flex flex-col justify-center items-center w-full">
                    <div className="relative justify-center items-center w-full">
                        <div className="absolute text-xs text-porabay bg-white ml-3">Name</div>
                        <input type="text" placeholder="Enter Name"  className="border-2 border-porabay my-2 p-2 rounded-md focus:border-black w-full" />
                    </div>
                    
                    <div className="relative justify-center items-center w-full">
                        <div className="absolute text-xs text-porabay bg-white ml-3">Contact</div>
                        <input type="text" placeholder="Enter Contact no." className="border-2 border-porabay my-2 p-2 rounded-md focus:border-black w-full" />
                    </div>

                    <div className="arelative justify-center items-center w-full">
                        <div className="absolute text-xs text-porabay bg-white ml-3">Address</div>
                        <input type="text" placeholder="Enter complete Address" className="border-2 border-porabay my-2 p-2 rounded-md focus:border-black w-full" />
                    </div>               
                </div>
                <div className="flex justify-between w-full">
                    <div className="flex items-center justify-center border-2 border-red-500 p-2 rounded-lg cursor-pointer hover:bg-red-200">
                        Cancel
                    </div>
                    <div className="flex items-center justify-center border-2 border-green-500 p-2 rounded-lg cursor-pointer hover:bg-green-200">
                        Sign In
                    </div>
                </div>
                <div className="flex w-full justify-end mt-4">
                    <p className="mr-2">Already have an account?</p>
                    <div className="underline hover:text-porabay cursor-pointer">
                        LogIn
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center w-full mt-20 mb-20">
                <p className="font-bold text-lg">Join this Incredible Community Now !!!</p>
            </div>
            <Footer/>
        </div>
    )
}

export default signup
