import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
    apiKey: "AIzaSyC-d9O57wym_ojeC9Uz1fWuTe3gihPqRS0",
    authDomain: "pr-2-bc96d.firebaseapp.com",
    projectId: "pr-2-bc96d",
    storageBucket: "pr-2-bc96d.appspot.com",
    messagingSenderId: "121832409688",
    appId: "1:121832409688:web:96602d143aeeaf7f80d82d",
    measurementId: "G-SD928HTCK2"
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const database = getDatabase(app);
export const fireStoreDb = getFirestore(app);

