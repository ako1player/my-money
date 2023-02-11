import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'


const firebaseConfig = {
    apiKey: "AIzaSyDn6RixLWJVWB4_2NemgeJLwPslN-Fgqe0",
    authDomain: "mymoney-ef21d.firebaseapp.com",
    projectId: "mymoney-ef21d",
    storageBucket: "mymoney-ef21d.appspot.com",
    messagingSenderId: "977804417538",
    appId: "1:977804417538:web:5b450e9004a4e58711251b"
  };

//init firebase
firebase.initializeApp(firebaseConfig)

//init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

//timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp }