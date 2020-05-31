// libs
import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";

// reducers
import authReducer from "./authReducer";
import projectReducer from "./projectReducer";

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  auth: authReducer,
  project: projectReducer,
});

export default rootReducer;
