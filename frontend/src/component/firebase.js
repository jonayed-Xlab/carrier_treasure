
import { firebase } from '@firebase/app';
import '@firebase/firestore'
import '@firebase/auth';
import '@firebase/storage';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZSRYyMYzQrhjtsMGco8R3raExKQak_vM",
  authDomain: "e-commerce-97d1b.firebaseapp.com",
  projectId: "e-commerce-97d1b",
  storageBucket: "e-commerce-97d1b.appspot.com",
  messagingSenderId: "424447390083",
  appId: "1:424447390083:web:9bde0243d9bb2d8bfc06b6",
  measurementId: "G-NBF7GTPLD6"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();

  export {db, auth, storage};