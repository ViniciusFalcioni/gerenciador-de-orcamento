// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAP7PqwnnpkOKO3lIi_FyofmjlfC2s0o6M",
    authDomain: "gerenciador-de-orcamento-1276a.firebaseapp.com",
    projectId: "gerenciador-de-orcamento-1276a",
    storageBucket: "gerenciador-de-orcamento-1276a.appspot.com",
    messagingSenderId: "111709076752",
    appId: "1:111709076752:web:7fe05e7c684480f27a3995",
    measurementId: "G-BV9DE8Z62R"
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Initialize Firestore and get a reference to the service
const db = getFirestore(app);

export { auth, provider, db };

