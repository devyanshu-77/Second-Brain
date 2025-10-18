import { createSlice } from "@reduxjs/toolkit";
import { signupUser, getCurrentUser, signinUser } from "./userThunk";
import type { InitialState } from "./userTypes";
import {
  createContent,
  getContents,
  getSharedContent,
} from "../content/contentThunk";
import { shareContent } from "../content/contentThunk";

const initialState: InitialState = {
  username: null,
  id: null,
  loading: false,
  error: {
    contentError: null,
    userError: null,
  },
  isAuthenticated: null,
  contents: null,
  link: null,
  sharedContent: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signupUser.fulfilled, (state, action) => {
      state.error.userError = null;
      state.username = action.payload.user?.username!;
      state.id = action.payload.user?.id!;
      state.isAuthenticated = true;
      state.loading = false;
    });
    builder.addCase(signupUser.pending, (state) => {
      state.loading = true;
      state.username = null;
      state.id = null;
      state.error.userError = null;
      state.isAuthenticated = null;
      state.contents = null;
    });
    builder.addCase(signupUser.rejected, (state, action) => {
      console.log("Signup failed - ", action.payload);
      state.loading = false;
      state.username = null;
      state.id = null;
      state.error.userError = action.payload?.message!;
      console.log("Payload after - ", state.error);
      state.isAuthenticated = false;
      state.contents = null;
    });
    builder.addCase(signinUser.fulfilled, (state, action) => {
      state.username = action.payload.user?.username!;
      state.id = action.payload.user?.id!;
    });
    builder.addCase(signinUser.pending, (state) => {
      state.username = null;
      state.id = null;
    });
    builder.addCase(signinUser.rejected, (state, action) => {
      state.username = null;
      state.id = null;
      state.error.userError = action.payload?.message!;
    });
    builder.addCase(getCurrentUser.fulfilled, (state, action) => {
      console.log("Current userfull filled - ", action);
      state.isAuthenticated = true;
      state.error.userError = null;
      state.loading = false;
      state.username = action.payload.user?.username!;
      state.id = action.payload.user?.id!;
    });
    builder.addCase(getCurrentUser.pending, (state) => {
      state.loading = true;
      state.username = null;
      state.id = null;
      state.error.userError = null;
      state.isAuthenticated = null;
    });
    builder.addCase(getCurrentUser.rejected, (state, action) => {
      state.loading = false;
      state.username = null;
      state.id = null;
      state.error.userError = action.payload?.message!;
      state.isAuthenticated = false;
    });
    builder.addCase(getContents.fulfilled, (state, action) => {
      console.log("Get contents payload - ", action.payload.contents);
      state.contents = action.payload.contents;
      state.error.contentError = null;
      state.loading = false;
    });
    builder.addCase(getContents.pending, (state) => {
      state.error.contentError = null;
      state.loading = true;
    });
    builder.addCase(getContents.rejected, (state, action) => {
      state.error.contentError = action.payload?.message!;
      state.contents = undefined;
      state.loading = false;
    });
    builder.addCase(createContent.fulfilled, (state, action) => {
      if (state.contents?.length === 0) {
        state.contents = [...state.contents, ...action.payload.contents!];
      } else {
        state.contents = action.payload.contents;
      }
      state.loading = false;
      state.error.userError = null;
    });
    builder.addCase(createContent.pending, (state) => {
      state.loading = true;
      state.error.contentError = null;
    });
    builder.addCase(createContent.rejected, (state, action) => {
      state.loading = false;
      state.error.contentError = action.payload?.message!;
    });
    builder.addCase(shareContent.fulfilled, (state, action) => {
      state.link = action.payload.link;
    });
    builder.addCase(shareContent.pending, (state) => {
      state.link = null;
    });
    builder.addCase(shareContent.rejected, (state, action) => {
      state.error.contentError = action.payload?.message!;
      state.link = null;
    });
    builder.addCase(getSharedContent.fulfilled, (state, action) => {
      console.log("Shared content action payload - s ", action.payload);
      console.log("Shared content itself - s ", action.payload.contents);
      state.sharedContent = action.payload.contents!;
    });
  },
});

export default userSlice.reducer;
