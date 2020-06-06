import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const CONFIG = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};

firebase.initializeApp(CONFIG);
firebase.firestore();

export default firebase;
