import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCntW-cSHVPmNzd43S4-lscHx7hVFmSRc4",
    authDomain: "react-cursos-ead89.firebaseapp.com",
    projectId: "react-cursos-ead89",
    storageBucket: "react-cursos-ead89.appspot.com",
    messagingSenderId: "511913588039",
    appId: "1:511913588039:web:0995ccf87b781849340862"
  };
  
firebase.initializeApp(firebaseConfig);

const projectAuth = firebase.auth();
const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export {
    db,
    googleAuthProvider,
    projectAuth
}