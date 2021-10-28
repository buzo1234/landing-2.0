import Head from 'next/head'
import Header from "./components/Header"
import Footer from "./components/Footer"

function whoarewe() {
    return (
        <div>
            <Head>
                <title>LocalKamaal</title>
                <link rel="icon" href="" />
            </Head>
            <Header/>
            <div className="flex flex-col max-w-3xl mx-auto">
                <div className="flex flex-col m-4 md:text-lg lg:text-xl">
                    <p>We're <b>xyz</b> , A one stop solution for all home-made products.</p>
                    <p>An e-commerce marketplace that connects home-based businesses with local as well as pan India customers.</p>
                    <br/>
                    <p className="font-bold mb-2 ">Why prefer Home-based Businesses?</p>
                        <li>Quality Assurance</li>
                        <li>Vast Variety</li>
                        <li>Uniqueness</li>
                        <li>Customizable</li>
                        <li>Competetive Pricing</li>
                        <li>Customer Service</li>
                </div>
                
            </div>
            
            
            <Footer/>
        </div>
    )
}

export default whoarewe
