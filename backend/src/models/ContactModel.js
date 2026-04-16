import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  phone: String,
  email: String,
  website: String,
  message: String,
}, { timestamps: true });

export default mongoose.model("Contact", contactSchema);