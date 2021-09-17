// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { getFirestore, collection, getDocs,  } from "@firebase/firestore";
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';
import 'dotenv';
require('dotenv').config()
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "manning-signs.firebaseapp.com",
  projectId: "manning-signs",
  storageBucket: "manning-signs.appspot.com",
  messagingSenderId: "555081678963",
  appId: process.env.REACT_APP_FIREBASE_ID,
  measurementId: "G-8RBLTCVBC8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, collection, getDocs, storage, ref, uploadBytesResumable, getDownloadURL };