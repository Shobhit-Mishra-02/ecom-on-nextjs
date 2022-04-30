import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  userFirstName: { type: String, required: true },
  userLastName: { type: String },
  userAddress: { type: String, required: true },
  userCountry: { type: String, required: true },
  userCity: { type: String, required: true },
  userPinCode: { type: String, required: true },
  userPhoneNumber: { type: String, required: true },
  userEmail: { type: String, required: true },
});

module.exports = mongoose.models.User || mongoose.model("User", UserSchema);
