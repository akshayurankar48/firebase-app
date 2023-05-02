// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlwKyIc2kYmhMqlfPLn8l8sPPXMABQuac",
  authDomain: "fir-auth-app-6f8b8.firebaseapp.com",
  projectId: "fir-auth-app-6f8b8",
  storageBucket: "fir-auth-app-6f8b8.appspot.com",
  messagingSenderId: "888840012418",
  appId: "1:888840012418:web:01d0ba583d8698ab0f2a9b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export { app, auth }