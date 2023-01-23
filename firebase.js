import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA6GdUTNyrQHgxFmKv0-_KSr0Tb0IseLZ0",
  authDomain: "western-tea-374607.firebaseapp.com",
  projectId: "western-tea-374607",
  storageBucket: "western-tea-374607.appspot.com",
  messagingSenderId: "581006790418",
  appId: "1:581006790418:web:a7c41a7bd30bfb3d6dadcb",
};
const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();
const db = app.firestore();

export default db;
