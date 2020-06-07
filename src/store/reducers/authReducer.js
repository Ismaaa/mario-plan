// types
import { LOGIN_SUCCESS, LOGIN_ERROR } from "../types/authTypes";

const INITIAL_STATE = {
  authError: null,
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_ERROR:
      console.error(action.error);
      return { ...state, authError: "Login Failed" };
    case LOGIN_SUCCESS:
      console.log("Login success");
      return { ...state, authError: null };
    default:
      return state;
  }
};

export default authReducer;
