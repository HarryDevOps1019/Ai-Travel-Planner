// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyAemXfk1myFCArAlQMgshsJ3FvJtQUMYsE",
  authDomain: "ai-travel-planner-2293a.firebaseapp.com",
  databaseURL: "https://ai-travel-planner-2293a-default-rtdb.firebaseio.com",
  projectId: "ai-travel-planner-2293a",
  storageBucket: "ai-travel-planner-2293a.appspot.com",  // Fixed
  messagingSenderId: "945390041464",
  appId: "1:945390041464:web:67761d7d7ff3bad1f7b08d",
  measurementId: "G-R3F6SR0HY9",
};

// Prevent re-initialization issues
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
