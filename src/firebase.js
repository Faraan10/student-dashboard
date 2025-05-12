// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCW6vc8UZVqraPi4EOu-AQxzIVrQPQAdfU",
  authDomain: "student-dashboard-a3aa8.firebaseapp.com",
  projectId: "student-dashboard-a3aa8",
  storageBucket: "student-dashboard-a3aa8.firebasestorage.app",
  messagingSenderId: "803091981257",
  appId: "1:803091981257:web:d106ba5e0e7cace18c3e18",
  measurementId: "G-58C9D2HD3V",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
