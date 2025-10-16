export interface ApiResponse {
  user?: {
    username: string;
    id: string;
  };
  contents?: [];
}

export interface ApiError {
  message: string;
}

export interface SignupData {
  username: string;
  password: string;
}

export interface InitialState {
  username: null | string;
  id: null | string;
  loading: boolean;
  error: undefined | string;
  isAuthenticated: boolean | null;
  contents?: [] | null;
}