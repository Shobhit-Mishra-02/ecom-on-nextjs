import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String, required: true },
  addres1: String,
  addres2: String,
  landMark: String,
  pinCode: String,
});

module.exports = mongoose.models.User || mongoose.model("User", UserSchema);
