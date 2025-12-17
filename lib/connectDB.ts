import mongoose from "mongoose";

const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) return; // reuse connection
  await mongoose.connect(process.env.MONGO_URI!);
  console.log("✅ MongoDB connected");
};

export default connectDB;
