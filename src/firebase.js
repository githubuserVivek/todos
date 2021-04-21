import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDLnavV9opbDWtuUfkJW3Kt1-i66FoLjy0",
  authDomain: "todo-1f6a9.firebaseapp.com",
  projectId: "todo-1f6a9",
  storageBucket: "todo-1f6a9.appspot.com",
  messagingSenderId: "395788068709",
  appId: "1:395788068709:web:7fa2a67298e0b84e6de38c",
  measurementId: "G-440X26K2XN",
});

const db = firebaseApp.firestore();

export default db;
