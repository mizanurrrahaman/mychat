// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyBqB9jpPCCfxKm0giQh_bow5GEAKKm6cII",
  authDomain: "mychat-fc5fb.firebaseapp.com",
  databaseURL: "https://mychat-fc5fb-default-rtdb.firebaseio.com",
  projectId: "mychat-fc5fb",
  storageBucket: "mychat-fc5fb.appspot.com",
  messagingSenderId: "719386678669",
  appId: "1:719386678669:web:c0558e20a0f19aeba119c4",
  measurementId: "G-MPQH2GNKLM"
};


const app = initializeApp(firebaseConfig);
export default firebaseConfig