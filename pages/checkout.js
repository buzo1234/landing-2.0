import { CartState } from "../context/AppContext"
import Footer from "./components/Footer"
import Header from "./components/Header"

function checkout() {

    const { state } = CartState();
    console.log(state);

    return (
        <div>
            <Header/>
            This is the checkout page
            <Footer/>
        </div>
    )
}

export default checkout
