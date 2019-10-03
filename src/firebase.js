import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const settings = {timestampsInSnapshots: true};

const config = {
    apiKey: "AIzaSyDbp56T7kjgthOlHUxNSNAK7KxCwzZMr9k",
    authDomain: "react-demo-53cc5.firebaseapp.com",
    databaseURL: "https://react-demo-53cc5.firebaseio.com",
    projectId: "react-demo-53cc5",
    storageBucket: "react-demo-53cc5.appspot.com",
    messagingSenderId: "370501184337",
    appId: "1:370501184337:web:3be567bde832f124398170",
    measurementId: "G-YR1TJLFJ1W"
  };
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;