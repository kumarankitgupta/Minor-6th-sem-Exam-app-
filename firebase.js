// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyBi4astzuuDIpdQQeJqAQmeXGfa87C7s2g",
  authDomain: "quiz-3edb4.firebaseapp.com",
  databaseURL: "https://quiz-3edb4-default-rtdb.firebaseio.com",
  projectId: "quiz-3edb4",
  storageBucket: "quiz-3edb4.appspot.com",
  messagingSenderId: "441721484332",
  appId: "1:441721484332:web:4b38ab49fe167d9ad7cd89"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);