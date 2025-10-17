export interface ApiResponse {
  user?: {
    username: string;
    id: string;
  };
  contents?: [];
  link?: string;
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
  link?: string | null;
  sharedContent: [] | null;
}