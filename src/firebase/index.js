import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyBkrNJVNtt2mnqRF2ryOJEC-VANWFC_Wks",
    authDomain: "new-linkedin-720de.firebaseapp.com",
    projectId: "new-linkedin-720de",
    storageBucket: "new-linkedin-720de.appspot.com",
    messagingSenderId: "947389378674",
    appId: "1:947389378674:web:9a39cdab16bfb6db0252eb"
  };
  

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
