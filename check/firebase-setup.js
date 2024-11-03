import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAiZuwPTKaM7V2SkHiJ4lM_lO3k_W3b-K4",
  authDomain: "skillnavigator-476ea.firebaseapp.com",
  projectId: "skillnavigator-476ea",
  storageBucket: "skillnavigator-476ea.firebasestorage.app",
  messagingSenderId: "377270399364",
  appId: "1:377270399364:web:2f7bb81b59c6a85af76dd1",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
