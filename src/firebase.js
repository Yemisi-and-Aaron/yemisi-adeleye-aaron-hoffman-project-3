import firebase from 'firebase/app';
import 'firebase/database';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAqDcSiZGZS_rJPFEQe7nItaQdtjFcc4WU",
    authDomain: "recipe-generator-27db7.firebaseapp.com",
    projectId: "recipe-generator-27db7",
    storageBucket: "recipe-generator-27db7.appspot.com",
    messagingSenderId: "374608316140",
    appId: "1:374608316140:web:f1d3c50af390d86b65c7c9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;
