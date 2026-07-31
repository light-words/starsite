// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDK65qRHrK43EnKHC_vtGcWbLx7oYocd9g",
  authDomain: "starsite-3fd10.firebaseapp.com",
  projectId: "starsite-3fd10",
  storageBucket: "starsite-3fd10.firebasestorage.app",
  messagingSenderId: "932382504628",
  appId: "1:932382504628:web:ab4117f90bed2bce1dc9e1",
  measurementId: "G-8CW233KR8S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
