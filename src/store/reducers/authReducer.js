// types
import {
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  LOGOUT_ERROR,
  LOGOUT_SUCCESS,
  SIGNUP_ERROR,
  SIGNUP_SUCCESS,
} from "../types/authTypes";

const INITIAL_STATE = {
  authError: null,
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGNUP_SUCCESS:
      console.log("Signup success");
      return { ...state, authError: null };
    case SIGNUP_ERROR:
      console.error("Signup failed", action.error);
      return { ...state, authError: action.error.message };
    case LOGIN_SUCCESS:
      console.log("Login success");
      return { ...state, authError: null };
    case LOGIN_ERROR:
      console.error("Login failed", action.error);
      return { ...state, authError: "Login Failed" };
    case LOGOUT_SUCCESS:
      console.log("Logout success");
      return { ...state, authError: null };
    case LOGOUT_ERROR:
      console.error("Logout failed", action.error);
      return { ...state };
    default:
      return state;
  }
};

export default authReducer;
