import mongoose from "mongoose";

// creating schema for the product
const ProdSchema = new mongoose.Schema({
  productName: { type: String, required: true },
  productPrice: { type: String, required: true },
  productBrand: { type: String, required: true },
  productDesc: { type: String, required: true },
  productImage: { type: String, required: true },
  category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
});

ProdSchema.index({
  productName: "text",
  productBrand: "text",
});

module.exports = mongoose.models.Prod || mongoose.model("Prod", ProdSchema);
