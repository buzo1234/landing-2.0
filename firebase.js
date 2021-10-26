import * as firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDKf9Vzht3fxWtQXTSC1E4ADcJ1BFwH9Tw",
    authDomain: "karanmahesh-otp.firebaseapp.com",
    projectId: "karanmahesh-otp",
    storageBucket: "karanmahesh-otp.appspot.com",
    messagingSenderId: "861523930133",
    appId: "1:861523930133:web:cc5b1b5c8bfa03830af21c",
    measurementId: "G-XV9PX9CJ92"
  };
  
  firebase.initializeApp(firebaseConfig);

export default firebase