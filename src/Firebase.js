import firebase from 'firebase/app'
import 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyCt_wWxzeW5kPdvobpZ118T6AgGybgQV9k",
    authDomain: "hpserv-51a5f.firebaseapp.com",
    databaseURL: "https://hpserv-51a5f-default-rtdb.firebaseio.com",
    projectId: "hpserv-51a5f",
    storageBucket: "hpserv-51a5f.appspot.com",
    messagingSenderId: "610892509167",
    appId: "1:610892509167:web:2ca72ebab783943ae2901a",
    measurementId: "G-G5D7FGSC7Y"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();  
export const provider = new firebase.auth.GoogleAuthProvider();