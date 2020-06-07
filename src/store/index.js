// libs
import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { reduxFirestore } from "redux-firestore";
import { getFirebase } from "react-redux-firebase";

// config
import firebaseConfig from "../services/firebase/config";

// reducers
import rootReducer from "./reducers/rootReducer";

const middlewares = [thunk.withExtraArgument({ getFirebase })];

const store = createStore(
  rootReducer,
  compose(applyMiddleware(...middlewares), reduxFirestore(firebaseConfig))
);

export default store;
