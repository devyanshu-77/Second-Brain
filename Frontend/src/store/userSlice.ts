import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstanceUser } from "../api/axiosInstance";
import axios from "axios";

interface signupData {
  username: string;
  password: string;
}

interface signupResponse {
  success: boolean;
  message: string;
  data: {
    username: string;
    id: string;
  };
}

export const signupUser = createAsyncThunk<
  signupResponse,
  signupData,
  { rejectValue: string }
>("signupUser", async (userData, { rejectWithValue }) => {
  try {
    const res = await axiosInstanceUser.post("/signup", userData);
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue(error.response?.data.errors || "Signup failed");
    }
    return rejectWithValue("Unexpected error occurred");
  }
});

interface FetchUserResponse {
  username: string;
  id: string;
}

export const fetchUser = createAsyncThunk<string, { rejectWithValue: Function }>(
  "fetchUser",
  async ({ rejectWithValue }) => {
    try {
      const res = await axiosInstanceUser("/me");
      return res.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(
          error.response?.data.message || "Unauthorized user"
        );
      }
      return rejectWithValue("Unauthorized user");
    }
  }
);

interface UserState {
  username: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  error?: null | string;
}

const initialState: UserState = {
  username: null,
  isAuthenticated: false,
  loading: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signupUser.fulfilled, (state, action) => {
      (state.isAuthenticated = true), (state.loading = false);
      state.username = action.payload.data.username;
      
    });
    builder.addCase(signupUser.pending, (state) => {
      (state.isAuthenticated = false), (state.loading = true);
      state.username = null;
      state.error = null;
    });
    builder.addCase(signupUser.rejected, (state, action) => {
      state.isAuthenticated = false;
      state.loading = false;
      state.username = null;
      state.error = action.payload;

    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      (state.isAuthenticated = true), (state.loading = false);
      state.username = action.payload;
    });
    builder.addCase(fetchUser.pending, (state) => {
      (state.isAuthenticated = false), (state.loading = true);
      state.username = null;
      state.error = null;
    });
    builder.addCase(fetchUser.rejected, (state, action) => {
      state.isAuthenticated = false;
      state.loading = false;
      state.username = null;
      state.error = action.payload;
    });
  },
});

export default userSlice.reducer;
