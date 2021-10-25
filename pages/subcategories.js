import Diwali from "./components/Diwali"
import Footer from "./components/Footer"
import Header from "./components/Header"

function subcategories() {
    return (
        <div> 
            <Header/>
            <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-center overflow-x-scroll w-full  my-2 p-2">
                
                <div className="flex justify-center items-center p-2 mx-1 rounded-md cursor-pointer bg-porabay text-white font-bold min-w-max text-sm">Category 1</div>
                <div className="flex justify-center items-center p-2 mx-1 rounded-md cursor-pointer bg-porabay text-white font-bold min-w-max text-sm">Category 1</div>
                <div className="flex justify-center items-center p-2 mx-1 rounded-md cursor-pointer bg-porabay text-white font-bold min-w-max text-sm">Category 1</div>
                <div className="flex justify-center items-center p-2 mx-1 rounded-md cursor-pointer bg-porabay text-white font-bold min-w-max text-sm">Category 1</div>
                <div className="flex justify-center items-center p-2 mx-1 rounded-md cursor-pointer bg-porabay text-white font-bold min-w-max text-sm">Category 1</div>
            </div>  
            <div className="flex p-3">
                <p>Category Name</p>
            </div>
            <div className="flex flex-col justify-center items-center mt-2">
                <Diwali/>
                <Diwali/>
                <Diwali/>
                
            </div>
            </div>
            <div><Footer/></div>
            
        </div>
    )
}

export default subcategories
