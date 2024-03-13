import mongoose from "mongoose";

const connectionString = process.env.MONGODB_URL;

export async function connectDB() {
  try {
    await mongoose.connect(connectionString);
  } catch (error) {
    console.error(error);
  }
}
