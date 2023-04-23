// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmpc0RwsBrHJc4Lj7J9z68-EUM_8DeCug",
  authDomain: "the-news-dragon-clint.firebaseapp.com",
  projectId: "the-news-dragon-clint",
  storageBucket: "the-news-dragon-clint.appspot.com",
  messagingSenderId: "420652463838",
  appId: "1:420652463838:web:8a4220c6a7dd8f3068f44f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;