import mongoose, { Document, Model, Schema, Types } from "mongoose";

export interface IMessage extends Document {
  sender: {
    id: Types.ObjectId;
    name: string;
  };
  recipient: {
    id: Types.ObjectId;
    name: string;
  };
  message: string;
  createdAt: Date;
}

const messageSchema = new Schema<IMessage>({
  sender: {
    id: { type: Schema.Types.ObjectId, required: true },
    username: { type: String, required: true },
  },
  recipient: {
    id: { type: Schema.Types.ObjectId, required: true },
    username: { type: String, required: true },
  },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Message: Model<IMessage> = mongoose.model<IMessage>(
  "Message",
  messageSchema
);

export default Message;
