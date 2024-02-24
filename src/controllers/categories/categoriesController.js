const categoryModel = require("../../models/categories/categoriesModel");
const createService = require("../../services/common/createService");
const dropDownService = require("../../services/common/dropDownService");
const lisetService = require("../../services/common/listService");
const updateService = require("../../services/common/updateService");

exports.createCategory = async (req, res) => {
  let result = await createService(req, categoryModel);
  res.status(200).json(result);
};

exports.updateCategory = async (req, res) => {
  let result = await updateService(req, categoryModel);
  res.status(200).json(result);
};

exports.categoryDropDown = async (req, res) => {
  let result = await dropDownService(req, categoryModel, { _id: 1, name: 1 });
  res.status(200).json(result);
};

exports.categoryList = async (req, res) => {
  let searchRgx = { $regex: req.params.searchKeyword, $options: "i" };
  let searchArray = [{ name: searchRgx }];
  let result = await lisetService(req, categoryModel, searchArray);
  res.status(200).json(result);
};
