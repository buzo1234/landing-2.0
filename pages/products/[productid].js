import Footer from '../components/Footer';
import Header from '../components/Header';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Banner from '../components/Banner';
import Seller from '../components/Seller';
import { ShoppingCartIcon } from '@heroicons/react/solid';
import { CartState } from '../../context/AppContext';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Router from 'next/router';
import { CartItemState } from '../../context/CartContext';
import React from 'react';
import Head from 'next/head';
import * as gtag from '../../lib/gtag';
import { db, storage } from '../../firebase';
import { addDoc, collection, serverTimestamp } from '@firebase/firestore';
import PastReviews from '../components/PastReviews';

function product() {
  const {
    state: { productdata, loading },
    dispatch,
  } = CartState();
  const { cartdispatch } = CartItemState();
  const [qty, setQty] = useState(1);
  const [custom, setCustom] = useState('');

  const [review, setReview] = useState('');

  const [data, setData] = useState();
  const router = useRouter();
  const productid = router.query.productid;

  useEffect(() => {
    dispatch({
      type: 'GET_PRODUCT_REQUEST',
    });
    axios
      .get(`https://localkamaal-backend.vercel.app/products/${productid}`)
      .then((response) => {
        dispatch({
          type: 'GET_PRODUCT_DETAILS',
          payload: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [router]);

  const confirmRouter = async () => {
    if (review === '') {
      return;
    }

    const review_live = {
      desc: review,
      timestamp: serverTimestamp(),
    };

    const docRef = await addDoc(collection(db, 'reviews'), review_live);

    setReview('');
  };

  console.log(review);

  var name = ((productdata || {}).sellerid || {}).sellername;
  var pic = ((productdata || {}).sellerid || {}).profilepic;
  var s_id = ((productdata || {}).sellerid || {})._id;
  var cat_name = ((productdata || {}).categoryid || {}).subcategoryname;

  if (pic === '') pic = '/user.png';

  const addToCartHandler = () => {
    gtag.event({
      action: 'add_to_cart',
      category: `${cat_name}`,
      label: `${productdata.productname}`,
      value: 'Item added',
    });
    cartdispatch({
      type: 'ADD_TO_CART',
      payload: {
        product_id: productdata._id,
        product_name: productdata.productname,
        product_img: productdata.productimg[0],
        product_price:
          productdata.productprice + Number(0.1 * productdata.productprice),
        seller_name: productdata.sellerid.sellername,
        seller_contact: productdata.sellerid.contact,
        seller_address: productdata.sellerid.address,
        seller_delivery: productdata.sellerid.delivery,
        product_custom: custom,
        qty,
      },
    });
    Router.push('/cartarea');
  };

  return (
    <div className='flex flex-col bg-offwhite'>
      <Head>
        <title>LocalKamaal</title>
        <link rel='icon' href='/localkamaal.jpg' />
      </Head>
      <Header />
      <div className='max-w-4xl mx-auto'>
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <div className='flex flex-col justify-center'>
              <div className='flex justify-center items-center text-center font-bold mt-5 text-lg'>
                {productdata.productname}
              </div>
              <React.Fragment key={productdata.productimg}>
                <Banner productimg={productdata.productimg} />
              </React.Fragment>
              <Seller name={name} pic={pic} s_id={s_id} key={productdata._id} />
              <div className='flex flex-col justify-center w-full '>
                <div className='flex justify-center items-center p-2 text-center'>
                  <p className='underline'>
                    <b>Price: </b>₹{' '}
                    {productdata.productprice +
                      Number(0.1 * productdata.productprice)}
                  </p>
                </div>
                <p className='text-center text-sm '>
                  Free Shipping! + Delivery within 2-3 days!
                </p>
                <p className='text-center mt-2'>
                  Qty:
                  <select
                    value={qty}
                    onChange={(e) => setQty(e.target.value)}
                    className='border-2 border-porabay m-3 p-1 rounded-lg'
                  >
                    {[...Array(10).keys()].map((x) => (
                      <option key={x + 1} value={x + 1}>
                        {x + 1}
                      </option>
                    ))}
                  </select>
                </p>
                <p className='text-xs text-porabay italic text-center text-bold underline'>
                  <b>Add Customizations or add a message to the creator...</b>
                </p>
                <p className='text-center text-xs italic ml-2 mr-2'>
                  PS: For customisation, just place your order. Once done we'll
                  contact you for further details and if you've any
                  customisation need then we'll assist you accordingly
                </p>
                <div className='flex justify-center'>
                  <textarea
                    name='textarea'
                    style={{ width: 300, height: 100 }}
                    className='border-2 border-gray-300 rounded-lg mt-3 p-2'
                    placeholder='Describe your need if any...'
                    onChange={(e) => setCustom(e.target.value)}
                  ></textarea>
                </div>
              </div>
            </div>

            <div className='flex justify-center items-center'>
              <div
                className='flex justify-center items-center m-4 py-3 px-10 text-porabay border-2 border-porabay rounded-3xl cursor-pointer w-full hover:text-white hover:bg-porabay hover:underline font-bold text-lg bg-white'
                onClick={addToCartHandler}
              >
                <p className='mr-3'>Add to Cart</p>
                <ShoppingCartIcon className='w-6' />
              </div>
            </div>

            <div className='flex flex-col justify-center w-full '>
              <p className='font-bold mx-5 mt-2 mb-2'>Description:</p>
              <p className='whitespace-pre-wrap my-[0.5]  mx-5 text-sm'>
                {productdata.productdesc}
              </p>
            </div>
          </>
        )}

        <div className='bg-white px-4 mt-5'>
          <p className='text-xl font-bold my-2'>Leave a review...</p>
          <input
            type='text'
            value={review}
            onChange={(e) => setReview(e.target.value)}
            className='bg-gray-100 border-2 border-porabay rounded-md my-2'
          />
          <button
            className='bg-porabay rounded-sm text-white font-semibold px-2 py-1 mx-2'
            onClick={() => confirmRouter()}
          >
            Post
          </button>
          <p className='mt-2 font-semibold'>All reviews...</p>
          <PastReviews />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default product;
