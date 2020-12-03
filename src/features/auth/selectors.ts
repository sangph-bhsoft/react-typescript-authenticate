import { AuthState } from "./types";

export const isLoginSelector = (state: AuthState) => state.isLogging;

export const isAuthenticateSelector = (state: AuthState) =>
  state.isAuthenticate;

export const usernameSelector = (state: AuthState) => state.user?.username;

export const errorSelector = (state: AuthState) => state.error;
