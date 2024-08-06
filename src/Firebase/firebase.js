// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAF7ppyqi2n3WuxmdlFuJL1pPEJt7dtvhA",
  authDomain: "taskmanager-2d2dc.firebaseapp.com",
  projectId: "taskmanager-2d2dc",
  storageBucket: "taskmanager-2d2dc.appspot.com",
  messagingSenderId: "391993616241",
  appId: "1:391993616241:web:d51cd404aa9267620378d0",
  measurementId: "G-CN5FWN7060",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
