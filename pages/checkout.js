import { CartState } from '../context/AppContext';
import Footer from './components/Footer';
import Header from './components/Header';
import Head from 'next/head';
import { CartItemState } from '../context/CartContext';
import Checkoutprod from './components/Checkoutprod';
import Router from 'next/router';
import { useState } from 'react';
import { OrderItemState } from '../context/OrderContext';
import axios from 'axios';
import { db, storage } from '../firebase';
import { addDoc, collection, serverTimestamp } from '@firebase/firestore';

function checkout() {
  const { cartstate, cartdispatch } = CartItemState();
  const { orderstate, orderdispatch } = OrderItemState();

  const [uname, setUname] = useState('');
  const [ucontact, setUcontact] = useState();
  const [uemail, setUemail] = useState('');
  const [uaddress, setUaddress] = useState('');
  const [uaddress2, setUaddress2] = useState('');
  const [upincode, setUpincode] = useState();

  const [status, setStatus] = useState(false);
  const [check, setCheck] = useState(false);

  const getCartSubTotal = () => {
    return cartstate.cart.reduce(
      (product_price, item) =>
        item.product_price * Number(item.qty) + product_price,
      0
    );
  };

  const confirmRouter = async () => {
    if (uname === '' || ucontact === '' || uaddress === '' || upincode === '') {
      setCheck(true);
      return;
    }

    const order = {
      username: uname,
      usercontact: ucontact,
      useraddress: uaddress + ', ' + uaddress2 + ', Pin: ' + upincode,
      useremail: uemail,
      cartitems: cartstate.cart,
      orderread: false,
      ordercompleted: false,
      ordercancelled: false,
    };

    const order_live = {
      username: uname,
      usercontact: ucontact,
      useraddress: uaddress + ', ' + uaddress2 + ', Pin: ' + upincode,
      useremail: uemail,
      cartitems: cartstate.cart,
      orderread: false,
      ordercompleted: false,
      ordercancelled: false,
      timestamp: serverTimestamp(),
    };

    const docRef = await addDoc(collection(db, 'orders'), order_live);

    orderdispatch({
      type: 'ADD_TO_ORDER_REQUEST',
    });
    await axios
      .post('https://localkamaal-backend.vercel.app/orders/add', order)
      .then((res) => {
        orderdispatch({
          type: 'ADD_TO_ORDER',
          payload: order,
        });
        console.log(res.data);
        setStatus(true);
        cartdispatch({
          type: 'EMPTY_CART',
        });
      });
  };
  if (orderstate !== undefined) {
    console.log(orderstate.loading);
  }

  const homepagehandler = () => {
    setStatus(false);
    Router.push('/');
  };

  return (
    <div className='bg-offwhite'>
      <Header />
      {!cartstate ? (
        <h1 className='font-bold text-lg'>Loading...</h1>
      ) : (
        <>
          <Head>
            <title>LocalKamaal</title>
            <link rel='icon' href='/localkamaal.jpg' />
          </Head>

          <div className='flex justify-center items-center mt-3'>
            <p className='text-center mt-3'>
              Currently delivering in <b>Pune</b> City only
            </p>
          </div>
          <div className='max-w-4xl mx-auto'>
            {status ? (
              <>
                <div className='flex flex-col justify-center'>
                  <div
                    className='text-lg text-porabay italic underline m-2 cursor-pointer'
                    onClick={() => homepagehandler()}
                  >
                    &lt; Go to Home
                  </div>
                  <div className='flex justify-center items-center font-bold text-xl text-green-500 m-5'>
                    Thank you!!!
                  </div>
                  <div className='flex justify-center items-center font-bold text-xl text-green-500 m-5'>
                    Your Order has been Received!!!
                  </div>
                  <p className='mt-10 text-lg text-center'>
                    We will get in touch with you soon
                  </p>
                </div>
              </>
            ) : (
              <>
                <div className='flex flex-col justify-center items-center mt-10 max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto '>
                  <div className='flex flex-col justify-center items-center w-full'>
                    <form action='' className='w-full'>
                      <div className='relative justify-center items-center w-full'>
                        <div className='absolute text-xs justify-center items-center text-porabay bg-white ml-3 p-1 -mt-1 rounded-xl  bg-gradient-to-b from-offwhite to-white via-offwhite'>
                          <p>
                            Name <b className='text-red-700 text-sm'>*</b>
                          </p>
                        </div>
                        <input
                          required
                          type='text'
                          placeholder='Enter Name'
                          value={uname}
                          onChange={(e) => setUname(e.target.value)}
                          className='border-2 border-porabay my-2 p-2 rounded-md focus:border-black w-full'
                        />
                      </div>

                      <div className='relative justify-center items-center w-full'>
                        <div className='absolute text-xs text-porabay bg-white ml-3 p-1 -mt-1 rounded-xl  bg-gradient-to-b from-offwhite to-white via-offwhite'>
                          <p>
                            Contact <b className='text-red-700 text-sm'>*</b>
                          </p>
                        </div>
                        <input
                          required
                          type='number'
                          placeholder='Enter Contact no.'
                          value={ucontact}
                          onChange={(e) => setUcontact(e.target.value)}
                          className='border-2 border-porabay my-2 p-2 rounded-md focus:border-black w-full'
                        />
                      </div>

                      <div className='relative justify-center items-center w-full'>
                        <div className='absolute text-xs text-porabay bg-white ml-3 p-1 -mt-1 rounded-xl  bg-gradient-to-b from-offwhite to-white via-offwhite'>
                          Email Address
                        </div>
                        <input
                          type='email'
                          placeholder='Enter Email Address'
                          value={uemail}
                          onChange={(e) => setUemail(e.target.value)}
                          className='border-2 border-porabay my-2 p-2 rounded-md focus:border-black w-full'
                        />
                      </div>

                      <div className='relative justify-center items-center w-full '>
                        <div className='absolute text-xs text-porabay ml-3 p-1 -mt-1 rounded-xl bg-gradient-to-b from-offwhite to-white via-offwhite'>
                          <p>
                            Address Line 1{' '}
                            <b className='text-red-700 text-sm'>*</b>
                          </p>
                        </div>
                        <input
                          required
                          type='text'
                          placeholder='Enter delivery address'
                          value={uaddress}
                          onChange={(e) => setUaddress(e.target.value)}
                          className='border-2 border-porabay my-2 p-2 rounded-md focus:border-black w-full'
                        />
                      </div>

                      <div className='relative justify-center items-center w-full'>
                        <div className='absolute text-xs text-porabay bg-white ml-3 p-1 -mt-1 rounded-xl  bg-gradient-to-b from-offwhite to-white via-offwhite'>
                          Address Line 2
                        </div>
                        <input
                          type='text'
                          placeholder='(optional)'
                          value={uaddress2}
                          onChange={(e) => setUaddress2(e.target.value)}
                          className='border-2 border-porabay my-2 p-2 rounded-md focus:border-black w-full'
                        />
                      </div>
                      <div className='flex gap-4'>
                        <div className='flex-1 relative justify-center items-center w-full'>
                          <div className='absolute text-xs text-porabay bg-white ml-3 p-1 -mt-1 rounded-xl  bg-gradient-to-b from-offwhite to-white via-offwhite'>
                            Town/City
                          </div>
                          <input
                            required
                            type='text'
                            placeholder='Enter Delivery Address'
                            value='Pune'
                            className='border-2 border-porabay my-2 p-2 rounded-md focus:border-black w-full'
                          />
                        </div>
                        <div className='flex-1 relative justify-center items-center w-full'>
                          <div className='absolute text-xs text-porabay bg-white ml-3 p-1 -mt-1 rounded-xl  bg-gradient-to-b from-offwhite to-white via-offwhite'>
                            <p>
                              Pincode <b className='text-red-700 text-sm'>*</b>
                            </p>
                          </div>
                          <input
                            required
                            type='number'
                            placeholder='Enter Pincode'
                            value={upincode}
                            onChange={(e) => setUpincode(e.target.value)}
                            className='border-2 border-porabay my-2 p-2 rounded-md focus:border-black w-full'
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className='flex flex-col p-2 mx-3 '>
                  <div>
                    <p className='font-vold underline'>Payment Option</p>
                    <input type='radio' value='COD/UPI on delivery' />
                    <label htmlFor=''> Cash/UPI on delivery</label>
                  </div>
                  <div className='text-right mr-2'>
                    <p className='font-bold underline'>Sub Total:</p>
                    <p>Item Value : ₹ {getCartSubTotal()}</p>
                    <p>Delivery : ₹ 0</p>
                    <p className='underline'>
                      <b>Toal Amount : </b>₹ {getCartSubTotal() + Number(0)}{' '}
                    </p>
                    <p className='text-center mt-4 text-sm'>
                      Free Shipping! and Delivery within 2-3 days!
                    </p>
                  </div>
                </div>
                <p className='font-bold mx-4 mt-3 text-md'>Your Items...</p>
                {cartstate.cart.map((cartitem) => {
                  return (
                    <Checkoutprod
                      p_id={cartitem.product_id}
                      p_img={cartitem.product_img}
                      p_name={cartitem.product_name}
                      p_price={cartitem.product_price}
                      p_qty={cartitem.qty}
                      p_comment={cartitem.product_custom}
                    />
                  );
                })}
                {cartstate.cart.length !== 0 ? (
                  <>
                    <div className='flex flex-col justify-center items-center mt-8'>
                      {check ? (
                        <div className='text-red-600 text-center'>
                          Please enter correct details!
                        </div>
                      ) : (
                        ''
                      )}
                      <button
                        type='submit'
                        className='border-2 border-porabay p-3 rounded-2xl text-lg font-bold bg-porabay/70 shadow-xl'
                        onClick={() => confirmRouter()}
                      >
                        Confirm and Place Order
                      </button>
                    </div>
                  </>
                ) : (
                  ''
                )}
              </>
            )}
          </div>
          <Footer />
        </>
      )}
    </div>
  );
}

export default checkout;
