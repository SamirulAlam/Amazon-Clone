import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCjEfTSN0KTUofyfZDVlkwfPR_3zUSCpKM",
    authDomain: "clone-7389d.firebaseapp.com",
    databaseURL: "https://clone-7389d.firebaseio.com",
    projectId: "clone-7389d",
    storageBucket: "clone-7389d.appspot.com",
    messagingSenderId: "265386642916",
    appId: "1:265386642916:web:9351184e25ecded65acbf1",
    measurementId: "G-Z90KRPK0R7"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);

  const db =firebaseApp.firestore();
  const auth =firebase.auth;

  export  {db,auth};