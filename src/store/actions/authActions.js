/* eslint-disable import/prefer-default-export */
import { LOGIN_SUCCESS, LOGIN_ERROR } from "../types/authTypes";

export const signIn = (credentials) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => {
        dispatch({ type: LOGIN_SUCCESS });
      })
      .catch((error) => {
        dispatch({ type: LOGIN_ERROR, error });
      });
  };
};
