// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBML-E8WU8_yMdL0XL7NTg_zEpoOI8CkSg",
    authDomain: "ema-john-f8681.firebaseapp.com",
    projectId: "ema-john-f8681",
    storageBucket: "ema-john-f8681.appspot.com",
    messagingSenderId: "637908878321",
    appId: "1:637908878321:web:fdd20a85592544cdc8fa50"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;