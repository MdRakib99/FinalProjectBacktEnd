const mongoose = require("mongoose");

const dataSchema = mongoose.Schema(
  {
    userEmail: { type: String },
    name: { type: String, unique: true },
  },
  { timestamps: true, versionKey: false }
);

const categoryModel = mongoose.model("categories", dataSchema);

module.exports = categoryModel;
