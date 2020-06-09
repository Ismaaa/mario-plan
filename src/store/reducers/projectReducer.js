// types
import { CREATE_PROJECT, CREATE_PROJECT_ERROR } from "../types/projectTypes";

const INITIAL_STATE = {};

const projectReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_PROJECT:
      console.log(action.project);
      return state;
    case CREATE_PROJECT_ERROR:
      console.error(CREATE_PROJECT_ERROR, action.error);
      return state;
    default:
      return state;
  }
};

export default projectReducer;
