import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
  email: { type: String, required: true },
  color: { type: String },
  size: { type: String, required: true },
  quantity: { type: String, required: true },
  product: { type: mongoose.Schema.Types.ObjectId, ref: "Prod" },
  orderStatus: { type: Boolean, required: true },
});

module.exports = mongoose.models.Cart || mongoose.model("Cart", cartSchema);
