//Here we will initialize our Firebase.
//We first import firebase. We will use es6 module syntax.
//Then we will import the config file we created.

import firebase from 'firebase';
import 'firebase/firestore'
import firebaseConfig from './firebaseConfig'
const firebaseApp = firebase.initializeApp(firebaseConfig)
export default firebaseApp.firestore()
