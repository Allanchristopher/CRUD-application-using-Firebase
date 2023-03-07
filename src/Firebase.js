import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// Your web app's Firebase configuration
 firebase.initializeApp({
    apiKey: "AIzaSyCbMZ_QLidwbXrC7EiucoRDqzD5B8QIObY",
    authDomain: "crud-application-529f9.firebaseapp.com",
    databaseURL: "https://crud-application-529f9-default-rtdb.firebaseio.com",
    projectId: "crud-application-529f9",
    storageBucket: "crud-application-529f9.appspot.com",
    messagingSenderId: "293123967043",
    appId: "1:293123967043:web:52d6fd57792be7fab42cf6"
  });
  const db = firebase.firestore();



export default db ;