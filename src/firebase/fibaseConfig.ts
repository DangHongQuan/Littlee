// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2EXe2WkKorvIUtmXqXTJ6WpzYSllEAJY",
  authDomain: "little-and-little-494e7.firebaseapp.com",
  projectId: "little-and-little-494e7",
  storageBucket: "little-and-little-494e7.appspot.com",
  messagingSenderId: "623271297867",
  appId: "1:623271297867:web:162ce19559d4c126535ece",
  measurementId: "G-S604N5MQ9F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const firestore = getFirestore(app);