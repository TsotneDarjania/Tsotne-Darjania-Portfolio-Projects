import mongoose, { Document, Model, Schema, Types } from "mongoose";

// Define the Notification interface
export interface INotification extends Document {
  sender: {
    id: Types.ObjectId;
    name: string;
  }; // User who sent the notification
  recipient: {
    id: Types.ObjectId;
    name: string;
  }; // User who receives the notification
  type: string; // Type of notification (e.g., "friend_request")
  status: string; // Status of the notification (e.g., "pending", "accepted", "rejected")
  createdAt: Date;
}

// Create the Notification schema
const notificationSchema = new Schema<INotification>({
  sender: {
    id: { type: Schema.Types.ObjectId, required: true },
    name: { type: String, required: true },
  },
  recipient: {
    id: { type: Schema.Types.ObjectId, required: true },
    name: { type: String, required: true },
  },
  type: { type: String, required: true }, // e.g., "friend_request"
  status: { type: String, default: "pending" }, // "pending", "accepted", "rejected", etc.
  createdAt: { type: Date, default: Date.now },
});

// Create the Notification model
const Notification: Model<INotification> = mongoose.model<INotification>(
  "Notification",
  notificationSchema
);

export default Notification;
