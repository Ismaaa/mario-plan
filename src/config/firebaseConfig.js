import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCCm7lqvUaIBg8rWAzaXWHV3DCRd5z-ctA",
  authDomain: "ismaaa-project-mario.firebaseapp.com",
  databaseURL: "https://ismaaa-project-mario.firebaseio.com",
  projectId: "ismaaa-project-mario",
  storageBucket: "ismaaa-project-mario.appspot.com",
  messagingSenderId: "506834828735",
  appId: "1:506834828735:web:73de272370b6c84db9f50a",
  measurementId: "G-3KTM4MXNVK",
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
