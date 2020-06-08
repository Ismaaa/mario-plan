/* eslint-disable import/prefer-default-export */
import { CREATE_PROJECT, CREATE_PROJECT_ERROR } from "../types/projectTypes";

export const createProject = (project) => (dispatch, getState, { getFirebase }) => {
  const firestore = getFirebase().firestore();
  const { firstName, lastName } = getState().firebase.profile;
  const { uid } = getState().firebase.auth;

  firestore
    .collection("projects")
    .add({
      ...project,
      authorFirstName: firstName,
      authorLastName: lastName,
      authorId: uid,
      createdAt: new Date(),
    })
    .then(() => {
      dispatch({ type: CREATE_PROJECT, project });
    })
    .catch((error) => {
      dispatch({ type: CREATE_PROJECT_ERROR, error });
    });
};
