// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBeR2w2O3jJVWKqrVD_C_D7KktwcoMB4DQ",
    authDomain: "reserva-proyecto4.firebaseapp.com",
    projectId: "reserva-proyecto4",
    storageBucket: "reserva-proyecto4.appspot.com",
    messagingSenderId: "70864560549",
    appId: "1:70864560549:web:3fc3a94c35dacd7645484c"
};

// Initialize Firebase
initializeApp(firebaseConfig);


export const db = getFirestore();