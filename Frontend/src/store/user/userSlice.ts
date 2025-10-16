import { createSlice } from "@reduxjs/toolkit";
import { signupUser, getCurrentUser, getContents } from "./userThunk";
import type { InitialState } from "./userTypes";

const initialState: InitialState = {
  username: null,
  id: null,
  loading: false,
  error: undefined,
  isAuthenticated: null,
  contents: [],
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
      state.contents = action.payload.contents;
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
      state.loading = false;
    });
  },
});

export default userSlice.reducer;
