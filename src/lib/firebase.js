import { initializeApp } from "firebase/app";
import { getFirestore, onSnapshot, doc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCqAvSId5oyGeu5qRii1WdM2PIu6LqIVhs",
  authDomain: "tailwindproject-bf00e.firebaseapp.com",
  projectId: "tailwindproject-bf00e",
  storageBucket: "tailwindproject-bf00e.firebasestorage.app",
  messagingSenderId: "1021829044386",
  appId: "1:1021829044386:web:5aecfe645cf23ec61edffb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();