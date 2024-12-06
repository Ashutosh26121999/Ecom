import {initializeApp} from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDT_ODQO3xw4tFX7gbeVS27Enbjm1TEwF4",
  authDomain: "ecom-5110d.firebaseapp.com",
  projectId: "ecom-5110d",
  storageBucket: "ecom-5110d.firebasestorage.app",
  messagingSenderId: "312786290393",
  appId: "1:312786290393:web:c72c53b67831f5fe83a0c8",
  measurementId: "G-0M5SEGX5Y6",
};

const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and Firestore
export const db = getFirestore(app);
export const auth = getAuth(app);

// Export the sign-in and register methods
export {signInWithEmailAndPassword, createUserWithEmailAndPassword};
