// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWBagZaCXUDa_6s7z3YY7uXIO0gKBft8E",
  authDomain: "medidata-59a6f.firebaseapp.com",
  projectId: "medidata-59a6f",
  storageBucket: "medidata-59a6f.appspot.com",
  messagingSenderId: "991283009890",
  appId: "1:991283009890:web:8cb77c4055f7857c19b43b",
  measurementId: "G-FWPQ2TMSG2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);