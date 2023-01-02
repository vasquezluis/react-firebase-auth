// credenciales para conectar a firebase

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBc45sbzpm7fXqR3TZidK3lTW9xdXXsPso",
  authDomain: "react-firebase-auth-e2f8a.firebaseapp.com",
  projectId: "react-firebase-auth-e2f8a",
  storageBucket: "react-firebase-auth-e2f8a.appspot.com",
  messagingSenderId: "587439445548",
  appId: "1:587439445548:web:e694e1afd5ef2beaa3e389",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
