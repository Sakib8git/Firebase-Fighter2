// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARwtGPgdRXqvdyrz41LF35XrAR9IdbVew",
  authDomain: "fir-fighter-8d366.firebaseapp.com",
  projectId: "fir-fighter-8d366",
  storageBucket: "fir-fighter-8d366.firebasestorage.app",
  messagingSenderId: "356456881893",
  appId: "1:356456881893:web:c43417503906af08f4be0c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
