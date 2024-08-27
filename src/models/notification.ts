import mongoose, { Document, Model, Schema, Types } from "mongoose";

// Define the Notification interface
export interface INotification extends Document {
  sender: Types.ObjectId; // User who sent the notification
  recipient: Types.ObjectId; // User who receives the notification
  type: string; // Type of notification (e.g., "friend_request")
  status: string; // Status of the notification (e.g., "pending", "accepted", "rejected")
  createdAt: Date;
}

// Create the Notification schema
const notificationSchema: Schema<INotification> = new Schema({
  sender: { type: Schema.Types.ObjectId, required: true },
  recipient: { type: Schema.Types.ObjectId, required: true },
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
