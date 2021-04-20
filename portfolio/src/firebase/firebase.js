import firebase from "firebase"
require("dotenv").config()


  const firebaseApp =   firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "contact-form-42ad7.firebaseapp.com",
    projectId: "contact-form-42ad7",
    storageBucket: "contact-form-42ad7.appspot.com",
    messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
  });

  export const db = firebaseApp.firestore()
