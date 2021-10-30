import Footer from "./components/Footer"
import Header from "./components/Header"
import Head from 'next/head'

function orderconfirm() {
    return (
        <div>
            <Head>
                <title>LocalKamaal</title>
                <link rel="icon" href="/localkamaal.jpg" />
            </Head>
            <Header/>
            Order Confirmed !!!
            <Footer/>
        </div>
    )
}

export default orderconfirm
