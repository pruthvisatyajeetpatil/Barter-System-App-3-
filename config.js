import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyCZtD4HANvAY5K7X6txMcLdi7lIkF_X8Mc",
    authDomain: "barter-system-app-8bb0d.firebaseapp.com",
    projectId: "barter-system-app-8bb0d",
    storageBucket: "barter-system-app-8bb0d.appspot.com",
    messagingSenderId: "153089497304",
    appId: "1:153089497304:web:a27ee02aa998b2ef899fad"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();