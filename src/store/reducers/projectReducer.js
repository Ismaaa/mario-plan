// types
import { CREATE_PROJECT, CREATE_PROJECT_ERROR } from "../types/projectTypes";

const projectReducer = (state, action) => {
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
