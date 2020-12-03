import {
  AuthActionType,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
} from "./actions";
import { AuthState } from "./types";

const INITIAL_STATE: AuthState = {
  isLogging: false,
  isAuthenticate: !!localStorage.getItem("user"),
  user: JSON.parse(localStorage.getItem("user") || "{}"),
  error: null,
};

const authReducer = (
  state: AuthState = INITIAL_STATE,
  action: AuthActionType
): AuthState => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        isLogging: true,
        isAuthenticate: false,
        user: null,
        error: null,
      };
    case LOGIN_SUCCESS:
      return {
        isLogging: false,
        isAuthenticate: true,
        user: action.payload,
        error: null,
      };
    case LOGIN_FAILURE:
      return {
        isLogging: false,
        isAuthenticate: false,
        user: null,
        error: action.payload,
      };

    case LOGOUT:
      localStorage.removeItem("user");
      return {
        ...state,
        isAuthenticate: false,
        user: null,
      };

    default:
      return state;
  }
};

export default authReducer;
