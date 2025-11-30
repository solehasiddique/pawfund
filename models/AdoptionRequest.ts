import mongoose, { Schema, models } from "mongoose";

const AdoptionRequestSchema = new Schema(
  {
    dogId: { type: Schema.Types.ObjectId, ref: "Dog", required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String },
  },
  { timestamps: true }
);

// ✅ Prevent recompiling the model on every reload
const AdoptionRequest =
  models.AdoptionRequest || mongoose.model("AdoptionRequest", AdoptionRequestSchema);

export default AdoptionRequest;
