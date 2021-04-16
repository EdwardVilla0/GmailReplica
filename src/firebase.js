import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCJH88lyyhx7zZX1MKAE0rNas7yrgyLsjs",
    authDomain: "replica-8b0fe.firebaseapp.com",
    projectId: "replica-8b0fe",
    storageBucket: "replica-8b0fe.appspot.com",
    messagingSenderId: "1015679809113",
    appId: "1:1015679809113:web:8c868add4287f2faa66348",
    measurementId: "G-M82R79TN9Y"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };