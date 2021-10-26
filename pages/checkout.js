import { CartState } from "../context/AppContext"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Head from 'next/head';

function checkout() {

    const { state } = CartState();
    console.log(state);

    return (
        <div>
            <Head>
                <title>Porabay</title>
                <link rel="icon" href="/porabay-logo.jpg" />
            </Head>
            <Header/>
            This is the checkout page
            <Footer/>
        </div>
    )
}

export default checkout
