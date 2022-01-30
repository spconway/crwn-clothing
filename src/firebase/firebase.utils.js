import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyA-01IqjvB0uy-fzy55ONLzdssndppKskE",
  authDomain: "crwn-db-88ac1.firebaseapp.com",
  projectId: "crwn-db-88ac1",
  storageBucket: "crwn-db-88ac1.appspot.com",
  messagingSenderId: "739480066250",
  appId: "1:739480066250:web:235aaeadffc58c33367c33",
  measurementId: "G-JXSKS4XSRH",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
