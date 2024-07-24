import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBuER5pyT__b9pFOCM61eJYwt9lMtSD4Fg",
    authDomain: "chambea-52f74.firebaseapp.com",
    projectId: "chambea-52f74",
    storageBucket: "chambea-52f74.appspot.com",
    messagingSenderId: "968753524182",
    appId: "1:968753524182:web:208c686b74abd2859b4877",
    measurementId: "G-H63V0G1R6J"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialize Firestore and get a reference to the service
const db = getFirestore(app);

export { auth, db };
