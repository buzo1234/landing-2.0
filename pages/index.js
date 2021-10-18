import Head from 'next/head'
import About from './components/About'
import Banner from './components/Banner'
import Category from './components/Category'
import Diwali from './components/Diwali'
import Footer from './components/Footer'
import Header from './components/Header'
import ProductsNear from './components/ProductsNear'

export default function Home() {
  return (
    <div className="flex flex-col">
      <Head>
        <title>Porabay</title>
        <link rel="icon" href="/porabay-logo.jpg" />
      </Head>
      <Header/>
        <About/>
        <ProductsNear/>
        <div className="m-2 mt-3">
          <p>Explore Categories...</p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 mt-2"> 
            <Category/>
            <Category/>
            <Category/>
            <Category/>
          </div>
        </div>
        <Banner/>
        <div className="flex flex-col m-2">
          <p>Diwali Special...</p>
          <div className="flex flex-col justify-center items-center mt-2">
            <Diwali/>
            <Diwali/>
            <Diwali/>
            <Diwali/>
          </div>
        </div>
        <div>
          <Footer/>
        </div>
      
    </div>
  )
}
