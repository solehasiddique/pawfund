import mongoose, { Schema, models } from "mongoose";

const dogSchema = new Schema(
  {
    name: { type: String, required: true },
    age: { type: String, required: true },
    story: { type: String, required: true },
    image: { type: String, required: true },
    isAdopted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const Dog = models.Dog || mongoose.model("Dog", dogSchema);

export default Dog;
