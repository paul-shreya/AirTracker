import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/Auth";

const firebaseConfig = {
  apiKey: "AIzaSyDPsC73SASbE11acKyXiy7Mq-e4BT2cgFY",
  authDomain: "airtracker-97cd3.firebaseapp.com",
  projectId: "airtracker-97cd3",
  storageBucket: "airtracker-97cd3.firebasestorage.app",
  messagingSenderId: "31348447273",
  appId: "1:31348447273:web:b9ed9a4f125976533c6438",
  measurementId: "G-07BS864WFK"
};

const app = initializeApp(firebaseConfig);
export const database = getAuth(app);