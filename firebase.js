// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOfWGvi42kNTbDepkBdBhFXSNGVymbhCg",
  authDomain: "pantrytracker-53821.firebaseapp.com",
  projectId: "pantrytracker-53821",
  storageBucket: "pantrytracker-53821.appspot.com",
  messagingSenderId: "670919211092",
  appId: "1:670919211092:web:0cfb65467c8b41d8e795c1",
  measurementId: "G-PHSTCXWJWJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export { firestore };