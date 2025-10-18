import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstanceContent } from "../../api/axiosInstance";
import type { AddContentData } from "./contentType";
import axios from "axios";
import type { ApiError, ApiResponse } from "../user/userTypes";

export const createContent = createAsyncThunk<
  ApiResponse,
  AddContentData,
  { rejectValue: ApiError }
>("createContent", async (data, { rejectWithValue }) => {
  try {
    const res = await axiosInstanceContent.post("/create", data);
    console.log("Create content res - ", res);
    console.log("Create content data - ", res.data.data);
    return res.data.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue({ message: error.response?.data.message });
    }
    return rejectWithValue({ message: "Something went wrong" });
  }
});

export const getContents = createAsyncThunk<
  ApiResponse,
  void,
  { rejectValue: ApiError }
>("getContents", async (_, { rejectWithValue }) => {
  try {
    const res = await axiosInstanceContent("/all");
    console.log("res object - ", res);
    console.log("Content to payload - ", res.data.data);
    return res.data.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue({ message: error.response?.data.message });
    }
    return rejectWithValue({ message: "Something went wrong" });
  }
});

interface Share {
  share: boolean;
}

export const shareContent = createAsyncThunk<
  ApiResponse,
  void,
  { rejectValue: ApiError }
>("shareContent", async (_, { rejectWithValue }) => {
  try {
    const res = await axiosInstanceContent.post("/share", {share: true});
    console.log("res object link - ", res);
    console.log("Content to payload link - ", res.data.data);
    return res.data.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue({ message: error.response?.data.message });
    }
    return rejectWithValue({ message: "Something went wrong" });
  }
});


export const getSharedContent = createAsyncThunk<
  ApiResponse,
  string,
  { rejectValue: ApiError }
>("getSharedContent", async (id, { rejectWithValue }) => {
  try {
    const res = await axiosInstanceContent(`/${id}`);
    console.log("res object link - ", res);
    console.log("Content to payload link - ", res.data.data);
    return res.data.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue({ message: error.response?.data.message });
    }
    return rejectWithValue({ message: "Something went wrong" });
  }
});