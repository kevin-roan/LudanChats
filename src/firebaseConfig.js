// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCvzH6lmgJllp57xA2VBe0Ipw7NKQIQGq0",
  authDomain: "ludanchats-fc442.firebaseapp.com",
  projectId: "ludanchats-fc442",
  storageBucket: "ludanchats-fc442.appspot.com",
  messagingSenderId: "842444773688",
  appId: "1:842444773688:web:89c829a1d7ec072c7e89cd",
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);

export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
