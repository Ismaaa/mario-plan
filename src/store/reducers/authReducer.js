// types
import { LOGIN_SUCCESS, LOGIN_ERROR } from "../types/authTypes";

const INITIAL_STATE = {};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_ERROR:
      console.error(action.payload);
      return { ...state, authError: "Login Failed" };

    default:
      break;
  }

  return state;
};

export default authReducer;
