import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    email: { type: String, required: true },
    totalAmount: { type: Number, required: true },
    products: [{ type: mongoose.Types.ObjectId, ref: "Prod" }],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.models.Order || mongoose.model("Order", orderSchema);
