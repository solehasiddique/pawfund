import mongoose from "mongoose";

const DonationSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  amount: Number,
  date: { type: Date, default: Date.now },
  status: { type: String, default: "pending" }, // ⬅ NEW FIELD
});

export default mongoose.models.Donation ||
  mongoose.model("Donation", DonationSchema);
