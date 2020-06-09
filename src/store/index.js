// libs
import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { reduxFirestore } from "redux-firestore";
import { getFirebase } from "react-redux-firebase";
import { createLogger } from "redux-logger";

// config
import firebaseConfig from "../services/firebase/config";

// reducers
import rootReducer from "./reducers/rootReducer";

let middlewares = [thunk.withExtraArgument({ getFirebase })];

if (process.env.NODE_ENV === "development") {
  const logger = createLogger({ collapsed: true });
  middlewares = [...middlewares, logger];
}

const store = createStore(
  rootReducer,
  compose(applyMiddleware(...middlewares), reduxFirestore(firebaseConfig))
);

export default store;
