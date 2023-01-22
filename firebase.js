import firebase from 'firebase/compat/app';
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDozcpjCoOkQqnxOnK0lF3nYTdbZ6gcNnQ",
  authDomain: "just-advice-375516.firebaseapp.com",
  projectId: "just-advice-375516",
  storageBucket: "just-advice-375516.appspot.com",
  messagingSenderId: "74854233668",
  appId: "1:74854233668:web:694f81c86ddd813c0bae11",
};
const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();
const db = app.firestore();

export default db;
