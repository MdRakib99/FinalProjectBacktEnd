const mongoose = require("mongoose");

const dataSchema = mongoose.Schema(
  {
    userEmail: { type: String },
    name: { type: String, unique: true },
  },
  { timestamps: true, versionKey: false }
);

const brandModel = mongoose.model("brands", dataSchema);

module.exports = brandModel;
