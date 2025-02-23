// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGguAkuBZgSXgcRGHx07tQBlE7HbdZH6k",
  authDomain: "eduai-25e6c.firebaseapp.com",
  projectId: "eduai-25e6c",
  storageBucket: "eduai-25e6c.firebasestorage.app",
  messagingSenderId: "539100745081",
  appId: "1:539100745081:web:8e02e75da14588a97033a8",
  measurementId: "G-N8WSVQXX54"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);