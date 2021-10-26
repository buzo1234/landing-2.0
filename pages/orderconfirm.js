import Footer from "./components/Footer"
import Header from "./components/Header"
import Head from 'next/head'

function orderconfirm() {
    return (
        <div>
            <Head>
                <title>Porabay</title>
                <link rel="icon" href="/porabay-logo.jpg" />
            </Head>
            <Header/>
            Order Confirmed !!!
            <Footer/>
        </div>
    )
}

export default orderconfirm
