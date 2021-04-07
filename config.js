import firebase from "firebase";
require("@firebase/firestore")


var firebaseConfig = {
  apiKey: "AIzaSyDEh39bRowEDHhhEsl3_NY6eE9KXCuHKMQ",
  authDomain: "wily-app-820b7.firebaseapp.com",
  projectId: "wily-app-820b7",
  storageBucket: "wily-app-820b7.appspot.com",
  messagingSenderId: "687774559644",
  appId: "1:687774559644:web:dd03d3d186ee11dc472c59"
};

  firebase.initializeApp(firebaseConfig)

  export default firebase.firestore()