const mongoose = require("mongoose");

const dataSchema = mongoose.Schema(
  {
    userEmail: { type: String },
    categoryID: { type: mongoose.Schema.Types.ObjectId, required: true },
    brandID: { type: mongoose.Schema.Types.ObjectId, required: true },
    name: { type: String },
    unit: { type: String },
    details: { type: String },
  },
  { timestamps: true, versionKey: false }
);

const productsModel = mongoose.model("products", dataSchema);

module.exports = productsModel;
