// types
import {
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT_SUCCESS,
  LOGOUT_ERROR,
} from "../types/authTypes";

const INITIAL_STATE = {
  authError: null,
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_ERROR:
      console.error("Login failed", action.error);
      return { ...state, authError: "Login Failed" };
    case LOGIN_SUCCESS:
      console.log("Login success");
      return { ...state, authError: null };
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
