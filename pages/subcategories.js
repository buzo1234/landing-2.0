import Diwali from "./components/Diwali"
import Footer from "./components/Footer"
import Header from "./components/Header"

function subcategories() {
    return (
        <div> 
            <Header/>
            <div className="flex p-3">
                <p>Category Name</p>
            </div>
            <Diwali/>
            <Diwali/>
            <Diwali/>
            <Diwali/>
            <Diwali/>
            <Diwali/>
            <Footer/>
        </div>
    )
}

export default subcategories
