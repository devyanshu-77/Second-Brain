import mongoose from "mongoose";
import { email, string } from "zod";
import { required } from "zod/mini";

const userSchema = new mongoose.Schema({
  name: {
    type: string,
    required: true,
  },
  email: {
    type: string,
    required: true,
    unique: true,
  },
});


const userModel = mongoose.model("User", userSchema);
export default userModel;