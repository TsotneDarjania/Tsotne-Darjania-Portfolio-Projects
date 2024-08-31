import mongoose, { Document, Model, Schema, Types } from "mongoose";

export interface IPost extends Document {
  userId: string;
  post: {
    username: string;
    title: string;
    content: string;
  };
  createdAt: Date;
}

const postSchema = new Schema<IPost>({
  userId: { type: String, required: true },
  post: {
    username: { type: String, required: true },
    title: { type: String, required: true },
    content: { type: String, required: true },
  },
  createdAt: { type: Date, default: Date.now },
});

const Post: Model<IPost> = mongoose.model<IPost>("Post", postSchema);

export default Post;
