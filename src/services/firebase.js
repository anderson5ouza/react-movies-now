// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBHpCQknogCSHl67Y0sGFgPo4aBXKgWziw",
  authDomain: "moviesnow-react-anderson.firebaseapp.com",
  projectId: "moviesnow-react-anderson",
  storageBucket: "moviesnow-react-anderson.firebasestorage.app",
  messagingSenderId: "513314875565",
  appId: "1:513314875565:web:f5c3aade7193a7b4443e24"
};

// Initialize Firebase

const firebase = initializeApp(firebaseConfig);

export default firebase;