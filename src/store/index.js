// libs
import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { getFirestore } from "redux-firestore";
import { getFirebase } from "react-redux-firebase";

// reducers
import rootReducer from "./reducers/rootReducer";

const middlewares = [thunk.withExtraArgument({ getFirebase, getFirestore })];

const store = createStore(
  rootReducer,
  compose(applyMiddleware(...middlewares))
);

export default store;
