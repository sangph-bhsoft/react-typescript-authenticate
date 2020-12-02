export interface AuthRequest {
  username: string;
  password: string;
}

export interface User {
  id: string;
  username: string;
  fullName: string;
}

export interface AuthState {
  isLogging: boolean;
  user: User | null;
  isAuthenticate: boolean;
  error: string | null;
}
