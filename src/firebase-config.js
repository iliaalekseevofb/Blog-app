import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBhYtnGI4svEIrMmv2AZP9M_BRaCu_rQw",
  authDomain: "blog-app-31c11.firebaseapp.com",
  projectId: "blog-app-31c11",
  storageBucket: "blog-app-31c11.appspot.com",
  messagingSenderId: "445878318051",
  appId: "1:445878318051:web:5af17e2b592529445ee6d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();