import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDy5Ny1l70c3lQZLNHzwVjfYvSjrAK4lG8",
    authDomain: "clone-9c00e.firebaseapp.com",
    databaseURL: "https://clone-9c00e.firebaseio.com",
    projectId: "clone-9c00e",
    storageBucket: "clone-9c00e.appspot.com",
    messagingSenderId: "905982232150",
    appId: "1:905982232150:web:b870291f2aec428ea75df7",
    measurementId: "G-3NLCC96L80"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};