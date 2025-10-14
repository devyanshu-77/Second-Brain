import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { axiosInstanceUser } from "../api/axiosInstance";
import axios from "axios";

interface User {
  username: string;
  id: string;
}
interface SignupData {
  username: string;
  password: string;
}

interface ApiError {
  error: string
}

export const signupUser = createAsyncThunk<
  User,
  SignupData,
  { rejectValue : ApiError }
>("signupUser", async (data, { rejectWithValue }) => {
  try {
    const res = await axiosInstanceUser.post("/signup", data);
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
        error: (error.response?.data as any)?.error || "Signup failed"
    }
    return rejectWithValue({ error: "Unexpected error occurred" });
  }
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    username: null,
    id: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signupUser.fulfilled, (state, action) => {
      console.log(action)
      state.username = action.username
    }) 
  }
});


export default userSlice.reducer;
