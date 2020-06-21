// libs
import "firebase/auth";
import "firebase/firestore";

import firebase from "firebase/app";

// config
import firebaseConfig from "./config";

firebase.initializeApp(firebaseConfig);
firebase.firestore();

if (process.env.NODE_ENV === "development") {
  firebase.firestore().settings({ host: "localhost:8080", ssl: false });
}

export default firebase;
