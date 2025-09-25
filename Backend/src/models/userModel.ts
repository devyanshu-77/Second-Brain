import { model, Schema } from "mongoose";
import type { HydratedDocument } from "mongoose";

interface Iuser {
  username: string;
  password: string;
}

type UserDocument = HydratedDocument<Iuser>;

const userSchema = new Schema<Iuser>({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const userModel = model<Iuser>("User", userSchema);
export default userModel;
