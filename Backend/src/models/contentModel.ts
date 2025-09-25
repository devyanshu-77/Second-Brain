import { model, Schema, Types, type HydratedDocument } from "mongoose";


interface Content {
  title: string;
  link: string;
  tags: Schema.Types.ObjectId[];
  user: Schema.Types.ObjectId;
}

type ContentDocument = HydratedDocument<Content>

const contentSchema = new Schema<Content>({
  title: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  tags: [{ type: Schema.Types.ObjectId, ref: "Tag" }],
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const contentModel = model<Content>("Conent", contentSchema)