// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJj5FJk4c_X3zabvrnisba7_WxEKsvbjQ",
  authDomain: "react-red-onion-736ed.firebaseapp.com",
  projectId: "react-red-onion-736ed",
  storageBucket: "react-red-onion-736ed.appspot.com",
  messagingSenderId: "1040738900822",
  appId: "1:1040738900822:web:a6be484f6cd5e60d2f14f7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
