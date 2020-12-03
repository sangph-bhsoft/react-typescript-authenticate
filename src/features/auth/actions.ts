import { AuthRequest, User } from "./types";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOGOUT = "LOGOUT";

export const loginRequest = (user: AuthRequest) => ({
  type: LOGIN_REQUEST,
  payload: user,
});

interface ILoginRequest {
  type: typeof LOGIN_REQUEST;
  payload: AuthRequest;
}

export const loginSuccess = (user: User) => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

interface ILoginSuccess {
  type: typeof LOGIN_SUCCESS;
  payload: User;
}

export const loginFailure = (error: string) => ({
  type: LOGIN_FAILURE,
  payload: error,
});

interface ILoginFailure {
  type: typeof LOGIN_FAILURE;
  payload: string;
}

export const logout = () => ({
  type: LOGOUT,
});

interface ILogout {
  type: typeof LOGOUT;
}

export type AuthActionType =
  | ILoginRequest
  | ILoginSuccess
  | ILoginFailure
  | ILogout;
