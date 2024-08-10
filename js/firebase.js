// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getFirestore, collection, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-storage.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDPieR9wG7pYv8pDt9XPTL15O8w62r0dGk",
    authDomain: "signup-login-6a418.firebaseapp.com",
    projectId: "signup-login-6a418",
    storageBucket: "signup-login-6a418.appspot.com",
    messagingSenderId: "824136739108",
    appId: "1:824136739108:web:d35d5b09b0d2d0891babb1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export {
    app,
    db,
    auth,
    createUserWithEmailAndPassword, collection, doc, setDoc, signInWithEmailAndPassword
}