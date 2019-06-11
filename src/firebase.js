import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/database";

const config = {
  config: "you config firebase"
};

firebase.initializeApp(config);

export default firebase;
