// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrA1mJjQqqXZ8SJisiQyeh_QkMQgyP-qs",
  authDomain: "flo-otp-app.firebaseapp.com",
  projectId: "flo-otp-app",
  storageBucket: "flo-otp-app.appspot.com",
  messagingSenderId: "599094482611",
  appId: "1:599094482611:web:7b3bf1554c4a6371ff42c6",
  measurementId: "G-JV7MV61S2X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
