// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJwTcMvnQs3tVE5sXd7Ntrhneeckx6V-U",
  authDomain: "todo-43751.firebaseapp.com",
  projectId: "todo-43751",
  storageBucket: "todo-43751.appspot.com",
  messagingSenderId: "395528761855",
  appId: "1:395528761855:web:3989ab6a2dd54de1a137ca",
  measurementId: "G-56Z30F9KW7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);