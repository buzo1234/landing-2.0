function Header() {
    return (
        <div className="shadow-sm sticky top-0 z-50 bg-white">
            <div className="flex items-center justify-between bg-white py-4 px-4 z-50 max-w-6xl mx-auto">
                <div className="flex items-center">
                    <div>
                        <img className="w-10 h-10 cursor-pointer" src="/porabay-logo.jpg" alt="logo" />
                    </div>
                    <div className="items-center px-1 text-2xl"><b>Porabay</b></div>
                </div>
                <div className="border-solid items-center border-2 border-red-800 p-2 cursor-pointer text-sm md:text-lg lg:text-xl font-bold rounded-lg hover:underline ">
                    <span className="mx-2">SignIn / LogIn</span>
                </div>
            </div>
        </div>
    )
}

export default Header
