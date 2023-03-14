import firebase from 'firebase';
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBm_lfMGcKD6paKLOHtcLr9WZ1Xtq0wbOk",
    authDomain: "olxproject-b4caf.firebaseapp.com",
    projectId: "olxproject-b4caf",
    storageBucket: "olxproject-b4caf.appspot.com",
    messagingSenderId: "1018983658859",
    appId: "1:1018983658859:web:3e1057e52d359e59bb482e",
    measurementId: "G-N9PBJ26X5G"
  }
  export default firebase.initializeApp(firebaseConfig)
