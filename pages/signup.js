import Footer from "./components/Footer"
import Header from "./components/Header"
import Head from 'next/head';
import { useState } from "react";
import firebase from '../firebase'
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber  } from "firebase/auth";

function signup() {

    const [contact, setContact] = useState();
    const [text, setText] = useState("");
    const [otp, setOTP] = useState("");
    

        if(typeof window !== undefined){
            console.log("window yes")
            const configureCaptcha = () => {
                const auth = getAuth();
                window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
                'size': 'invisible',
                'callback': (response) => {
                    // reCAPTCHA solved, allow signInWithPhoneNumber.
                    onSignInSubmit();
                },
                defaultCountry: "IN"
                }, auth);

            }
            
        
            const onSignInSubmit = (e) => {
                
                e.preventDefault()
                console.log("entered")
                configureCaptcha()
                const phoneNumber = "+91"+contact;
                console.log(phoneNumber)
                const appVerifier = window.recaptchaVerifier;

                const auth = getAuth();
                signInWithPhoneNumber(auth, phoneNumber, appVerifier)
                    .then((confirmationResult) => {
                    // SMS sent. Prompt user to type the code from the message, then sign the
                    // user in with confirmationResult.confirm(code).
                    window.confirmationResult = confirmationResult;
                    // ...
                    console.log("OTP sent")
                    }).catch((error) => {
                    // Error; SMS not sent
                    // ...
                    console.log("OTP not sent")
                    });
                    setContact("")
            }

            const onSubmitOTP = (e) => {
                e.preventDefault();
                const code = otp;
                console.log(code);
                confirmationResult.confirm(code).then((result) => {
                // User signed in successfully.
                const user = result.user;
                console.log(JSON.stringify(user));
                alert("User is verified")
                // ...
                }).catch((error) => {
                // User couldn't sign in (bad verification code?)
                // ...
                console.log("Some Error Occured :(")
                });
                setOTP("")
            }

            console.log(contact,text)

            return (
                <div>
                    <Head>
                        <title>Porabay</title>
                        <link rel="icon" href="/porabay-logo.jpg" />
                    </Head>
                    <Header/>
                    <div className="max-w-4xl mx-auto">
                    <div className="flex flex-col justify-center items-center mt-10 max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto ">
                        <div className="flex flex-col justify-center items-center w-full">
                            <div className="relative justify-center items-center w-full">
                                <div className="absolute text-xs justify-center items-center text-porabay bg-white ml-3 p-1 -mt-1">Name</div>
                                <input type="text" placeholder="Enter Name"  className="border-2 border-porabay my-2 p-2 rounded-md focus:border-black w-full" />
                            </div>
                            
                            <div className="relative justify-center items-center w-full">
                                <div className="absolute text-xs text-porabay bg-white ml-3 p-1 -mt-1">Contact</div>
                                <input type="text" placeholder="Enter Contact no." className="border-2 border-porabay my-2 p-2 rounded-md focus:border-black w-full" value={contact} onChange={(e) => setContact(e.target.value)} />
                                <button className="flex items-center justify-center border-2 border-green-500 p-2 rounded-lg cursor-pointer hover:bg-green-200" onClick={onSignInSubmit}>
                                Send OTP
                            </button>
                            </div>
        
                            <div className="arelative justify-center items-center w-full">
                                <div className="absolute text-xs text-porabay bg-white ml-3 p-1 -mt-1">OTP</div>
                                <input type="text" placeholder="Enter OTP" className="border-2 border-porabay my-2 p-2 rounded-md focus:border-black w-full" onChange={(e) => setOTP(e.target.value)}/>
                                <button className="flex items-center justify-center border-2 border-green-500 p-2 rounded-lg cursor-pointer hover:bg-green-200" onClick={onSubmitOTP}>
                                Verify
                                </button>
                            </div>               
                        </div>
                        <div className="flex justify-between w-full">
                            <div className="flex items-center justify-center border-2 border-red-500 p-2 rounded-lg cursor-pointer hover:bg-red-200">
                                Cancel
                            </div>
                            <div id="sign-in-button"></div>
                            <button className="flex items-center justify-center border-2 border-green-500 p-2 rounded-lg cursor-pointer hover:bg-green-200" onClick={onSignInSubmit}>
                                Sign In
                            </button>
                        </div>
                        <div className="flex w-full justify-end mt-4">
                            <p className="mr-2">Already have an account?</p>
                            <div className="underline hover:text-porabay cursor-pointer">
                                LogIn
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center w-full mt-20 mb-20">
                        <p className="font-bold text-lg">Join this Incredible Community Now !!!</p>
                    </div>
                    </div>
                    <Footer/>
               
                </div>
            )
        
    
        }

        else{
            rturn (<h1>This doesn't works</h1>)
        }

    
}

export default signup
