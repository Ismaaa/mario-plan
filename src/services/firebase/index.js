// libs
import "firebase/auth";
import "firebase/firestore";

import firebase from "firebase/app";

// config
import firebaseConfig from "./config";

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
