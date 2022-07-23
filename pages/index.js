import Head from 'next/head';
import { CartState } from '../context/AppContext';
import About from './components/About';
import Category from './components/Category';
import Diwali from './components/Diwali';
import Footer from './components/Footer';
import Header from './components/Header';
import ProductsNear from './components/ProductsNear';
import ServiceCategory from './components/ServiceCategory';
import SuggestionForm from './components/SuggestionForm';

export default function Home() {
  const {
    state: { products },
  } = CartState();

  var diyaproducts = ['Diya'];
  var laddooproducts = ['Laddoo'];
  var chocolateproducts = ['Chocolates'];
  var lanternproducts = ['Lanterns'];
  var lightproducts = ['Lights'];

  if (products) {
    products.map((product) => {
      if (product.categoryid.subcategoryname === 'Diya') {
        diyaproducts.push(product);
      }
      if (product.categoryid.subcategoryname === 'Laddoo') {
        laddooproducts.push(product);
      }
      if (product.categoryid.subcategoryname === 'Chocolates') {
        chocolateproducts.push(product);
      }
      if (product.categoryid.subcategoryname === 'Lanterns') {
        lanternproducts.push(product);
      }
      if (product.categoryid.subcategoryname === 'Lights') {
        lightproducts.push(product);
      }
    });
  }

  return (
    <div className='flex flex-col bg-offwhite'>
      <Head>
        <title>LocalBazaar</title>
        <link rel='icon' href='/localkamaal.jpg' />
      </Head>
      <Header />
      <div className='flex flex-col max-w-4xl mx-auto w-full'>
        <About />
        <div className='mb-3'>
          <ProductsNear />
        </div>
        <div className='m-2 mt-3 mb-3'>
          <p className='mx-1 text-xl font-bold underline'>
            Explore Categories...
          </p>
          <div className='grid grid-cols-12 md:grid-cols-5 lg:grid-cols-5 mt-2 gap-1 md:gap-2 lg:gap-2'>
            <div className='col-start-1 col-span-4 md:col-start-1 md:col-span-1 lg:col-start-1 lg:col-span-1'>
              <Category
                c_id={'6226dcfa9654a8b4a1d36de0'}
                c_name={'Art & Decor'}
                c_img={'/Diya.jpg'}
              />
            </div>
            <div className='col-end-9 col-span-4 md:col-end-3 md:col-span-1 lg:col-end-3 lg:col-span-1'>
              <Category
                c_id={'6226dd599654a8b4a1d36de1'}
                c_name={'Cake'}
                c_img={'/Cake.jpg'}
              />
            </div>
            <div className='col-end-13 col-span-4 md:col-end-4 md:col-span-1 lg:col-end-4 lg:col-span-1'>
              <Category
                c_id={'6226dd719654a8b4a1d36de2'}
                c_name={'Desert'}
                c_img={'/Dessert.jpg'}
              />
            </div>
            <div className='col-start-3 col-span-4 md:col-end-5 md:col-span-1 lg:col-end-5 lg:col-span-1'>
              <Category
                c_id={'6226dd869654a8b4a1d36de3'}
                c_name={'Sweets'}
                c_img={'/Sweet.jpg'}
              />
            </div>
            <div className='col-end-11 col-span-4 md:col-end-6 md:col-span-1 lg:col-end-6 lg:col-span-1'>
              <Category
                c_id={'6226dda89654a8b4a1d36de4'}
                c_name={'Craft'}
                c_img={'/Craft.png'}
              />
            </div>
          </div>
        </div>

        <div className='m-2 mt-3 mb-3'>
          <p className='mx-1 text-xl font-bold underline'>
            Explore nearby Services...
          </p>
          <div className='grid grid-cols-12 md:grid-cols-5 lg:grid-cols-5 mt-2 gap-1 md:gap-2 lg:gap-2'>
            <div className='col-start-1 col-span-4 md:col-start-1 md:col-span-1 lg:col-start-1 lg:col-span-1'>
              <ServiceCategory
                url='https://media.istockphoto.com/vectors/electric-plug-icon-vector-illustration-vector-id1126163079?k=20&m=1126163079&s=612x612&w=0&h=tr48j-ji8JDkbLTmROuwJDx4kzzGyraElDmanxzgo2k='
                name='Electrician'
              />
            </div>

            <div className='col-end-9 col-span-4 md:col-end-3 md:col-span-1 lg:col-end-3 lg:col-span-1'>
              <ServiceCategory
                url='https://media.istockphoto.com/vectors/electric-plug-icon-vector-illustration-vector-id1126163079?k=20&m=1126163079&s=612x612&w=0&h=tr48j-ji8JDkbLTmROuwJDx4kzzGyraElDmanxzgo2k='
                name='Plumber'
              />
            </div>

            <div className='col-end-13 col-span-4 md:col-end-4 md:col-span-1 lg:col-end-4 lg:col-span-1'>
              <ServiceCategory
                url='https://media.istockphoto.com/vectors/electric-plug-icon-vector-illustration-vector-id1126163079?k=20&m=1126163079&s=612x612&w=0&h=tr48j-ji8JDkbLTmROuwJDx4kzzGyraElDmanxzgo2k='
                name='Home Cook'
              />
            </div>

            <div className='col-start-3 col-span-4 md:col-end-5 md:col-span-1 lg:col-end-5 lg:col-span-1'>
              <ServiceCategory
                url='https://media.istockphoto.com/vectors/electric-plug-icon-vector-illustration-vector-id1126163079?k=20&m=1126163079&s=612x612&w=0&h=tr48j-ji8JDkbLTmROuwJDx4kzzGyraElDmanxzgo2k='
                name='Baby Sitter'
              />
            </div>

            <div className='col-end-11 col-span-4 md:col-end-6 md:col-span-1 lg:col-end-6 lg:col-span-1'>
              <ServiceCategory
                url='https://media.istockphoto.com/vectors/electric-plug-icon-vector-illustration-vector-id1126163079?k=20&m=1126163079&s=612x612&w=0&h=tr48j-ji8JDkbLTmROuwJDx4kzzGyraElDmanxzgo2k='
                name='Pest Control'
              />
            </div>
          </div>
        </div>

        <div className='flex flex-col m-2'>
          <p className='mx-1 text-xl font-bold underline'>Best Sellers...</p>
          <div className='flex flex-col justify-center items-center mt-2'>
            <Diwali prod={diyaproducts} key={diyaproducts} />
            <Diwali prod={lanternproducts} key={lanternproducts} />
            <Diwali prod={chocolateproducts} key={chocolateproducts} />
            <Diwali prod={laddooproducts} key={laddooproducts} />
            <Diwali prod={lightproducts} key={lightproducts} />
          </div>
        </div>
        <p className='font-bold text-lg text-porabay  mt-4 text-center'>
          Any Suggestions? or Feedback?
        </p>
        <p className=' text-xs text-center mb-3'>
          We would love to hear it from you...
        </p>
        <div className='flex '>
          <SuggestionForm />
        </div>
        <p className='italic text-center mx-auto'>
          Service available in <b>Pune</b> City only
        </p>
        <p className='italic text-center mx-auto text-sm mt-4 ml-3 mr-3'>
          PS: We're in building phase so if you face any problem, just give us a
          call and we'll be happy to assist you :)
        </p>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}
