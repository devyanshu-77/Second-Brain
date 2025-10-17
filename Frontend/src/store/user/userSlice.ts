import { createSlice } from "@reduxjs/toolkit";
import { signupUser, getCurrentUser } from "./userThunk";
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
  error: undefined,
  isAuthenticated: null,
  contents: [],
  link: null,
  sharedContent: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signupUser.fulfilled, (state, action) => {
      console.log("Signup payload - ", action.payload);
      state.username = action.payload.user?.username!;
      state.id = action.payload.user?.id!;
      console.log("state after - ", state.username, state.id);
      state.isAuthenticated = true;
      state.loading = false;
    });
    builder.addCase(signupUser.pending, (state) => {
      state.loading = true;
      state.username = null;
      state.id = null;
      state.error = undefined;
      state.isAuthenticated = null;
      state.contents = null;
    });
    builder.addCase(signupUser.rejected, (state, action) => {
      console.log("Signup failed - ", action.payload);
      state.loading = false;
      state.username = null;
      state.id = null;
      state.error = action.payload?.message;
      console.log("Payload after - ", state.error);
      state.isAuthenticated = false;
      state.contents = null;
    });
    builder.addCase(getCurrentUser.fulfilled, (state, action) => {
      console.log("Current userfull filled - ", action);
      state.isAuthenticated = true;
      state.error = undefined;
      state.loading = false;
      state.username = action.payload.user?.username!;
      state.id = action.payload.user?.id!;
    });
    builder.addCase(getCurrentUser.pending, (state) => {
      state.loading = true;
      state.username = null;
      state.id = null;
      state.error = undefined;
      state.isAuthenticated = null;
    });
    builder.addCase(getCurrentUser.rejected, (state, action) => {
      state.loading = false;
      state.username = null;
      state.id = null;
      state.error = action.payload?.message;
      state.isAuthenticated = false;
    });
    builder.addCase(getContents.fulfilled, (state, action) => {
      state.contents = action.payload.contents;
      state.error = undefined;
      state.loading = false;
    });
    builder.addCase(getContents.pending, (state) => {
      state.error = undefined;
      state.loading = true;
    });
    builder.addCase(getContents.rejected, (state, action) => {
      state.error = action.payload?.message;
      state.contents = null;
      state.loading = false;
    });
    builder.addCase(createContent.fulfilled, (state, action) => {
      if (state.contents) {
        state.contents = [...state.contents, action.payload.contents];
      }
      state.loading = false;
      state.error = undefined;
    });
    builder.addCase(createContent.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createContent.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload?.message;
    });
    builder.addCase(shareContent.fulfilled, (state, action) => {
      state.link = action.payload.link;
    });
    builder.addCase(shareContent.pending, (state) => {
      state.link = null;
    });
    builder.addCase(shareContent.rejected, (state, action) => {
      state.error = action.payload?.message;
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
