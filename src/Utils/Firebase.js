// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-F8c29RfyVrbsjnhOXLTKcKJa6tVFKwE",
  authDomain: "netflixgpt-1ff16.firebaseapp.com",
  projectId: "netflixgpt-1ff16",
  storageBucket: "netflixgpt-1ff16.appspot.com",
  messagingSenderId: "642407416985",
  appId: "1:642407416985:web:42a2061f9e40396ef36408",
  measurementId: "G-7XJXECG6GL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
