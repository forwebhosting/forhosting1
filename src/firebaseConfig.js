import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage"

const firebaseConfig = {
  apiKey: "AIzaSyDKFCS_6u_QkRPEox2o6g3quGWqEXLh6UQ",

  authDomain: "disneyclone-thowfickofficial.firebaseapp.com",

  projectId: "disneyclone-thowfickofficial",

  storageBucket: "disneyclone-thowfickofficial.appspot.com",

  messagingSenderId: "50901939137",

  appId: "1:50901939137:web:7edba72a7de393754af540",

  measurementId: "G-0EQGHLTC7E"

};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth()
const provider = new firebase.auth.GoogleAuthProvider();

const storage = firebase.storage();


export {  db,auth, provider, storage };
// export default db;