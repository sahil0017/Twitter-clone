// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyDMEFtjeiszsRZzotrLpIpAn7jEmfJemkM",
    authDomain: "twitter-clone-d60e1.firebaseapp.com",
    projectId: "twitter-clone-d60e1",
    storageBucket: "twitter-clone-d60e1.appspot.com",
    messagingSenderId: "1030356921065",
    appId: "1:1030356921065:web:8c5adede9f99cabd301e78",
    measurementId: "G-2CV4DH6TDF"
  };

  const firebase_app=firebase.initializeApp(firebaseConfig);
  const db=firebase_app.firestore();

  export default db;