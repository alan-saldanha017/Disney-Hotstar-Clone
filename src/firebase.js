import firebase from "firebase"
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAVLWsRU_TLvpWYVqsCBFRM_vcppbN8nns",
    authDomain: "hotstar-efcaa.firebaseapp.com",
    projectId: "hotstar-efcaa",
    storageBucket: "hotstar-efcaa.appspot.com",
    messagingSenderId: "308520232521",
    appId: "1:308520232521:web:dd822fc852cfabda4c0198",
    measurementId: "G-2HLP1X1PSC"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);  //Initialze firebase
  const storage = firebase.storage();   //Storage Setup
  const db = firebaseApp.firestore();    //DB Setup
  const auth = firebase.auth();  //Authentication Setup
  const provider = new firebase.auth.GoogleAuthProvider(); //Setup auth method - provider



  export {auth, provider, storage};
  export default db;