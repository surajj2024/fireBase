// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZKRVrIxSpISbsODjHDrIlbxwDcGxfYgg",
  authDomain: "ghost-chat-2e7e8.firebaseapp.com",
  projectId: "ghost-chat-2e7e8",
  storageBucket: "ghost-chat-2e7e8.appspot.com",
  messagingSenderId: "880392704516",
  appId: "1:880392704516:web:fb7876312a687537ad5b51"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);