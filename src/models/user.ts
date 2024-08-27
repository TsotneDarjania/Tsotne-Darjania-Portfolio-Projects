import mongoose, { Document, Model, Schema, Types } from "mongoose";
import bcrypt from "bcryptjs"; // models/User.ts

// Define the User interface
export interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  friends: Types.ObjectId[]; // Array of ObjectIds referencing other users
}

// Create the User schema
const userSchema: Schema<IUser> = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  friends: [{ type: Schema.Types.ObjectId, ref: "User" }], // Array of ObjectId references
});

// Create the User model
const User: Model<IUser> = mongoose.model<IUser>("User", userSchema);

export default User;
