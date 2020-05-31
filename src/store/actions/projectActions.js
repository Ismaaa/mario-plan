/* eslint-disable import/prefer-default-export */
import { CREATE_PROJECT, CREATE_PROJECT_ERROR } from "../types/projectTypes";

export const createProject = (project) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("projects")
      .add({
        ...project,
        authorFirstName: "Ismail",
        authorLastName: "Didouh",
        authorId: 1,
        createdAt: new Date(),
      })
      .then(() => {
        dispatch({ type: CREATE_PROJECT, project });
      })
      .catch((error) => {
        dispatch({ type: CREATE_PROJECT_ERROR, error });
      });
  };
};
