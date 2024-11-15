// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAj54ywXWcfiScVzlcFeODPV2GXgxsBbik",
  authDomain: "authentication-special.firebaseapp.com",
  projectId: "authentication-special",
  storageBucket: "authentication-special.firebasestorage.app",
  messagingSenderId: "1048572667400",
  appId: "1:1048572667400:web:ee734c946787dd427593bd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);
 export default auth;