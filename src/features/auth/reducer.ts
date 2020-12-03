import { createReducer } from "typesafe-actions";
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

// const authReducer = (
//   state: AuthState = INITIAL_STATE,
//   action: AuthActionType
// ): AuthState => {
//   switch (action.type) {
//     case LOGIN_REQUEST:
//       return {
//         isLogging: true,
//         isAuthenticate: false,
//         user: null,
//         error: null,
//       };
//     case LOGIN_SUCCESS:
//       return {
//         isLogging: false,
//         isAuthenticate: true,
//         user: action.payload,
//         error: null,
//       };
//     case LOGIN_FAILURE:
//       return {
//         isLogging: false,
//         isAuthenticate: false,
//         user: null,
//         error: action.payload,
//       };

//     case LOGOUT:
//       localStorage.removeItem("user");
//       return {
//         ...state,
//         isAuthenticate: false,
//         user: null,
//       };

//     default:
//       return state;
//   }
// };

const authReducer = createReducer<AuthState, AuthActionType>(INITIAL_STATE, {
  [LOGIN_REQUEST]: (state) => {
    return {
      isLogging: true,
      isAuthenticate: false,
      user: null,
      error: null,
    };
  },
  [LOGIN_SUCCESS]: (state, action) => {
    return {
      isLogging: false,
      isAuthenticate: true,
      user: action.payload,
      error: null,
    };
  },
  [LOGIN_FAILURE]: (state, action) => {
    return {
      isLogging: false,
      isAuthenticate: false,
      user: null,
      error: action.payload,
    };
  },
  [LOGOUT]: (state, action) => {
    localStorage.removeItem("user");
    return {
      ...state,
      isAuthenticate: false,
      user: null,
    };
  },
});

export default authReducer;
