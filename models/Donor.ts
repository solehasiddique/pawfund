import mongoose, { Schema, model, models } from "mongoose";

const donorSchema = new Schema({
  name: { type: String, required: true },
  email: String,
  message: String,
  amount: Number,
  createdAt: { type: Date, default: Date.now },
});

const Donor = models.Donor || model("Donor", donorSchema);
export default Donor;
