import Head from 'next/head'
import Header from "./components/Header"
import Footer from "./components/Footer"

function support() {
    return (
        <div>
            <Head>
                <title>Porabay</title>
                <link rel="icon" href="/porabay-logo.jpg" />
            </Head>
            <Header/>
                <p className="text-xl text-center m-4">Please give us a call or write an E-mail</p>
                <div className="flex flex-col justify-center items-center m-4 text-lg">
                    <p className="font-bold underline">Mahesh Mohota</p>
                    <p>9637572030</p>
                    <p>maheshmohata28@gmail.com</p>
                </div>
                <div className="flex flex-col justify-center items-center m-4 text-lg">
                    <p className="font-bold underline">Karan Dua</p>
                    <p>9860060265</p>
                    <p>karandua2002@gmail.com</p>
                </div>
            <Footer/>
        </div>
    )
}

export default support
