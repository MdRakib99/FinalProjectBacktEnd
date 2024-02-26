const productsModel = require("../../models/products/productsModel");
const listJoinService = require("../../services/common/ListJoinService");
const createService = require("../../services/common/createService");
const deleteService = require("../../services/common/deleteService");
const updateService = require("../../services/common/updateService");

exports.createProduct = async (req, res) => {
  let result = await createService(req, productsModel);
  res.status(200).json(result);
};
exports.updateProduct = async (req, res) => {
  let result = await updateService(req, productsModel);
  res.status(200).json(result);
};

exports.productList = async (req, res) => {
  let searchRgx = { $regex: req.params.searchKeyword, $options: "i" };
  let joinStage1 = {
    $lookup: {
      from: "brands",
      localField: "brandID",
      foreignField: "_id",
      as: "brand",
    },
  };
  let joinStage2 = {
    $lookup: {
      from: "categories",
      localField: "categoryID",
      foreignField: "_id",
      as: "category",
    },
  };

  let searchArray = [
    { name: searchRgx },
    { unit: searchRgx },
    { details: searchRgx },
    { "brand.name": searchRgx },
    { "category.name": searchRgx },
  ];
  let result = await listJoinService(
    req,
    productsModel,
    searchArray,
    joinStage1,
    joinStage2
  );

  res.status(200).json(result);
};

exports.deleteProducts = async (req, res) => {
  let result = await deleteService(req, productsModel);
  res.status(200).json(result);
};
