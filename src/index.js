// libs
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";

// Config
import FirebaseProvider from "./services/firebase/FirebaseProvider";
import store from "./store";

// Components
import App from "./App";

// Styles
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...FirebaseProvider}>
        <App />
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
