// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAiDOgCmvlqPWCYLj-2ueclIRkppkn7OxU",
  authDomain: "fiskbook-bb591.firebaseapp.com",
  databaseURL: "https://fiskbook-bb591-default-rtdb.firebaseio.com",
  projectId: "fiskbook-bb591",
  storageBucket: "fiskbook-bb591.appspot.com",
  messagingSenderId: "634003343133",
  appId: "1:634003343133:web:078bec1854e0ec29a3c3f4",
  measurementId: "G-QH271NWYW0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
