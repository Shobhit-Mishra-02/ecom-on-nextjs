import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema({
  categoryName: { type: String, required: true },
  categoryDesc: { type: String, required: true },
});

module.exports =
  mongoose.models.Category || mongoose.model("Category", CategorySchema);
