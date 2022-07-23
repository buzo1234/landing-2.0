// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDRYlGmLNRQEBfovh7xVw3Jti1-em2U4wY',
  authDomain: 'rakathon-b0e59.firebaseapp.com',
  projectId: 'rakathon-b0e59',
  storageBucket: 'rakathon-b0e59.appspot.com',
  messagingSenderId: '248786530666',
  appId: '1:248786530666:web:e6c6c38a32509485f3b513',
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore();

const storage = getStorage();

export { app, db, storage };
