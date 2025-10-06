import { Schema, model } from "mongoose";

interface LinkInterface {
  userId: Schema.Types.ObjectId;
  hash: string;
}

const linkSchema = new Schema<LinkInterface>({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  hash: String,
});

const LinkModel = model("Link", linkSchema);
export default LinkModel;
