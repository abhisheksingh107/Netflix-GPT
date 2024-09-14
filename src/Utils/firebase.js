// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDueTupr3hJs4ORpXSZQGQ9jiLSOMH-c7Y",
  authDomain: "netflixgpt-b63a6.firebaseapp.com",
  projectId: "netflixgpt-b63a6",
  storageBucket: "netflixgpt-b63a6.appspot.com",
  messagingSenderId: "372143393275",
  appId: "1:372143393275:web:11451a6820da979caba35e",
  measurementId: "G-1TGFBR0VBK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();