import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
});

module.exports = mongoose.model.User || mongoose.model("User", UserSchema);
