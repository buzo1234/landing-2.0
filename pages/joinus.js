import Footer from "./components/Footer"
import Header from "./components/Header"
import Joinusform from "./components/Joinusform"

function joinus() {
    return (
        <div className="bg-offwhite">
            <Header/>
            <div className="flex flex-col max-w-4xl mx-auto">
                <p className="font-bold text-center text-xl mt-4 text-porabay "><b>Join Us</b></p>
                <p className="text-sm text-center mb-3">Lets do wonder together</p>
                <div className="flex">
                    <Joinusform />
                </div>
                
            </div>
            
            <Footer/>
        </div>
    )
}

export default joinus
