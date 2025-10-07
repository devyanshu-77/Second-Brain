import { model, Schema, Types, type HydratedDocument } from "mongoose";

interface Content {
  title: string;
  link: string;
  source: string;
  tags: Schema.Types.ObjectId[];
  user: Schema.Types.ObjectId;
}

type ContentDocument = HydratedDocument<Content>;

const contentSchema = new Schema<Content>({
  title: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  source: {
    type: String,
    required: true,
  },
  tags: [{ type: String, ref: "Tag" }],
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const contentModel = model<Content>("Conent", contentSchema);
export default contentModel;
