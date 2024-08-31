import { MongoClient, ServerApiVersion } from "mongodb";
import mongoose from "mongoose";
import MongoStore from "connect-mongo";

export const connectDB = () =>
  mongoose
    .connect(process.env.MONGODB_URI!)
    .catch((error) => {
      console.error("Failed to connect to MongoDB", error);
    })
    .then(() => {
      console.log("Connected to MongoDB");
    });
