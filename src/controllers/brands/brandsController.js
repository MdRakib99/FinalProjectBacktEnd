const brandModel = require("../../models/brands/brandsModel");
const createService = require("../../services/common/createService");
const dropDownService = require("../../services/common/dropDownService");
const lisetService = require("../../services/common/listService");
const updateService = require("../../services/common/updateService");

exports.createBrand = async (req, res) => {
  let result = await createService(req, brandModel);
  res.status(200).json(result);
};

exports.updateBrand = async (req, res) => {
  let result = await updateService(req, brandModel);
  res.status(200).json(result);
};

exports.brandDropDown = async (req, res) => {
  let result = await dropDownService(req, brandModel, { _id: 1, name: 1 });
  res.status(200).json(result);
};

exports.brandList = async (req, res) => {
  let searchRgx = { $regex: req.params.searchKeyword, $options: "i" };
  let searchArray = [{ name: searchRgx }];
  let result = await lisetService(req, brandModel, searchArray);
  res.status(200).json(result);
};

exports.deleteBrand = async (req, res) => {
  let result = await deleteService(req, brandModel);
  res.status(200).json(result);
};
