import mongoose from "mongoose";

// creating schema for the product
const ProdSchema = new mongoose.Schema({
  productName: { type: String, required: true },
  productPrice: { type: Int32Array, required: true },
  productBrand: { type: String, required: true },
  productDesc: { type: String, required: true },
  category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
});

module.exports =
  mongoose.model.Product || mongoose.model("Product", ProdSchema);
