const productsModel = require("../../models/products/productsModel");
const createService = require("../../services/common/createService");
const updateService = require("../../services/common/updateService");

exports.createProduct = async (req, res) => {
  let result = await createService(req, productsModel);
  res.status(200).json(result);
};
exports.updateProduct = async (req, res) => {
  let result = await updateService(req, productsModel);
  res.status(200).json(result);
};

exports.updateProduct;
