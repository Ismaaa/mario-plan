// libs
import { createFirestoreInstance } from "redux-firestore";

// store
import store from "../../store";
// services
import firebase from "./index";

const rrfProps = {
  firebase,
  config: {
    userProfile: "users",
    useFirestoreForProfile: true,
  },
  dispatch: store.dispatch,
  createFirestoreInstance,
};

export default rrfProps;
