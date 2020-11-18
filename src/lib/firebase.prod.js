import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyB0Yle72aldr1nCy-kAn3-PwJ4X1ISwqII",
  authDomain: "netflix-clone-e55bc.firebaseapp.com",
  databaseURL: "https://netflix-clone-e55bc.firebaseio.com",
  projectId: "netflix-clone-e55bc",
  storageBucket: "netflix-clone-e55bc.appspot.com",
  messagingSenderId: "5660516850",
  appId: "1:5660516850:web:a0e28fbfbd3a16e5dd4b6b",
  measurementId: "G-6BC15ZLZYB",
};

const firebase = Firebase.initializeApp(config);

export { firebase };
