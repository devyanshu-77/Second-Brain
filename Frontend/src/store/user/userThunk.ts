import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  axiosInstanceUser,
} from "../../api/axiosInstance";
import axios from "axios";
import type { ApiResponse, SignupData, ApiError } from "./userTypes";


export const signupUser = createAsyncThunk<
  ApiResponse,
  SignupData,
  { rejectValue: ApiError }
>("signupUser", async (data, { rejectWithValue }) => {
  try {
    const res = await axiosInstanceUser.post("/signup", data);
    console.log(" Signup response", res.data);
    console.log("Signup user ", res.data.data);
    return res.data.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("Error message - ", error.response?.data.message);
      return rejectWithValue({ message: error.response?.data.message });
    }
    return rejectWithValue({ message: "Unexpected error occurred" });
  }
});

export const signinUser = createAsyncThunk<
  ApiResponse,
  SignupData,
  { rejectValue: ApiError }
>("signinUser", async (data, { rejectWithValue }) => {
  try {
    const res = await axiosInstanceUser.post("/signin", data);
    console.log(" Signin response", res.data);
    console.log("Signin user ", res.data.data);
    return res.data.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("Error message - ", error.response?.data.message);
      return rejectWithValue({ message: error.response?.data.message });
    }
    return rejectWithValue({ message: "Unexpected error occurred" });
  }
});

export const getCurrentUser = createAsyncThunk<
  ApiResponse,
  void,
  { rejectValue: ApiError }
>("currentUser", async (_, { rejectWithValue }) => {
  try {
    const res = await axiosInstanceUser("/me");
    return res.data.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue({ message: error.response?.data.message });
    }
    rejectWithValue({ message: "Something went wrong" });
  }
});


