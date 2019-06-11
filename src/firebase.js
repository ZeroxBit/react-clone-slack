import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/database";

const config = {
  apiKey: "AIzaSyABv9ph3c1AocqrZMUd9nv2cCW6j6b5tLk",
  authDomain: "react-clone-slack-6bc4f.firebaseapp.com",
  databaseURL: "https://react-clone-slack-6bc4f.firebaseio.com",
  projectId: "react-clone-slack-6bc4f",
  storageBucket: "react-clone-slack-6bc4f.appspot.com",
  messagingSenderId: "1081903252769",
  appId: "1:1081903252769:web:ff94bb05107ae45d"
};

firebase.initializeApp(config);

export default firebase;
