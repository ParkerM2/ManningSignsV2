// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { getFirestore, collection, getDocs,  } from "@firebase/firestore";
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCX5zMUtAN_nQo688yO5s_vA3ZRBCaZVe4",
  authDomain: "manning-signs.firebaseapp.com",
  projectId: "manning-signs",
  storageBucket: "manning-signs.appspot.com",
  messagingSenderId: "555081678963",
  appId: "1:555081678963:web:48399777d528b2aa0f2a06",
  measurementId: "G-8RBLTCVBC8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);


export { db, collection, getDocs, storage, ref, uploadBytesResumable, getDownloadURL };