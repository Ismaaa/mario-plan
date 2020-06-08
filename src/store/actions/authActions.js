// types
import {
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT_SUCCESS,
  LOGOUT_ERROR,
} from "../types/authTypes";

export const signUp = (newUser) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    const firestore = getFirebase().firestore();

    firebase
      .auth()
      // create the user
      .createUserWithEmailAndPassword(newUser.email, newUser.password)
      // add user to our own collection
      .then((response) => {
        return firestore
          .collection("users")
          .doc(response.user.uid)
          .set({
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            initials: newUser.firstName[0] + newUser.lastName[0],
          });
      })
      .then(() => {
        dispatch({ type: SIGNUP_SUCCESS });
      })
      .catch((error) => {
        dispatch({ type: SIGNUP_ERROR, error });
      });
  };
};

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

export const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: LOGOUT_SUCCESS });
      })
      .catch((error) => {
        dispatch({ type: LOGOUT_ERROR, error });
      });
  };
};
