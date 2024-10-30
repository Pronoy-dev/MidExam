// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUKhVMM52L1xohiXHeQ8t-jD2cVrw3YyQ",
  authDomain: "midexam-e8b78.firebaseapp.com",
  projectId: "midexam-e8b78",
  storageBucket: "midexam-e8b78.appspot.com",
  messagingSenderId: "585140728595",
  appId: "1:585140728595:web:8415f3d99d7ebee7e060e6",
};

// Initialize Firebase
const dbapp = initializeApp(firebaseConfig);
export default dbapp;
