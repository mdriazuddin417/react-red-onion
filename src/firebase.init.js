// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSFUq0z1V1ChxAL-oh5geAFZ5ZClmJVOU",
  authDomain: "red-onion-d184e.firebaseapp.com",
  projectId: "red-onion-d184e",
  storageBucket: "red-onion-d184e.appspot.com",
  messagingSenderId: "473832375405",
  appId: "1:473832375405:web:04afb51dc0381b3b6dab64"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
