// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAWDnvNARGYXG_UOIIpce7j7_jY_AoR3CQ",
  authDomain: "shopcart-3c0b1.firebaseapp.com",
  projectId: "shopcart-3c0b1",
  storageBucket: "shopcart-3c0b1.appspot.com",
  messagingSenderId: "651866973169",
  appId: "1:651866973169:web:5b581f05098ddb9c46da50"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {db}