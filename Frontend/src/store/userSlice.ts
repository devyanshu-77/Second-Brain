import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstanceUser } from "../api/axiosInstance";
import axios from "axios";

interface ApiSuccess<T> {
  success: true;
  message: string;
  data: T;
}

interface ApiError {
  error: string;
}

interface SignupData {
  username: string;
  password: string;
}

interface ApiError {
  error: string;
}

export const signupUser = createAsyncThunk<
  ApiSuccess<{ username: string; id: string }>,
  SignupData,
  { rejectValue: ApiError }
>("signupUser", async (data, { rejectWithValue }) => {
  try {
    const res = await axiosInstanceUser.post("/signup", data);
    console.log(" Signup response", res.data);
    console.log("Signup user ", res.data.data.user);
    return res.data.data.user;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error.response);
      return rejectWithValue({ error: "Signup failed" });
    }
    return rejectWithValue({ error: "Unexpected error occurred" });
  }
});

export const getCurrentUser = createAsyncThunk(
  "currentUser",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axiosInstanceUser("/me");
      return res.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data.message);
      }
      rejectWithValue({ error: "Some random Errror" });
    }
  }
);

interface InitialState {
  username: null | string;
  id: null | string;
  loading: boolean;
  error: undefined | string;
  isAuthenticated: boolean;
  content?: [];
}

const initialState: InitialState = {
  username: null,
  id: null,
  loading: false,
  error: undefined,
  isAuthenticated: false,
  content: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signupUser.fulfilled, (state, action) => {
      console.log('Signup payload - ', action.payload)
      state.username = action.payload.username;
      state.id = action.payload.id;
      state.isAuthenticated = true;
      state.loading = false;
    });
    builder.addCase(signupUser.pending, (state) => {
      state.loading = true;
      state.username = null;
      state.id = null;
      state.error = undefined;
      state.isAuthenticated = false;
      state.content = [];
    });
    builder.addCase(signupUser.rejected, (state, action) => {
      console.log("Signup failed - ", action.payload);
      state.loading = false;
      state.username = null;
      state.id = null;
      state.error = action.payload?.error;
      state.isAuthenticated = false;
      state.content = [];
    });
    builder.addCase(getCurrentUser.fulfilled, (state, action) => {
      console.log("Current userfull filled - ", action);
      state.isAuthenticated = true;
      state.error = undefined;
      state.loading = false;
      state.username = action.payload.data.user.username;
      state.id = action.payload.data.user.id;
      state.content = action.payload.data.content;
    });
    builder.addCase(getCurrentUser.pending, (state) => {
      state.loading = true;
      state.username = null;
      state.id = null;
      state.error = undefined;
      state.isAuthenticated = false;
      state.content = [];
    });
    builder.addCase(getCurrentUser.rejected, (state, action) => {
      state.loading = false;
      state.username = null;
      state.id = null;
      state.error = action.payload?.error;
      state.isAuthenticated = false;
      state.content = [];
    });
  },
});

export default userSlice.reducer;
