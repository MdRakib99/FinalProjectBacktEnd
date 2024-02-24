const createUserService = require("../../services/user/createUserService");
const detailsUserService = require("../../services/user/detailsUserService");
const loginUserService = require("../../services/user/loginUserService");
const resetPassService = require("../../services/user/resetPassService");
const updateUserService = require("../../services/user/updateUserService");
const verifyEmailService = require("../../services/user/verifyEmailUserService");
const verifyOtpService = require("../../services/user/verifyOtpUserService");

exports.registration = async (req, res) => {
  let result = await createUserService(req);
  res.status(200).json(result);
};

exports.login = async (req, res) => {
  let result = await loginUserService(req, res);
  res.status(200).json(result);
};

exports.profileUpdate = async (req, res) => {
  let result = await updateUserService(req);
  res.status(200).json(result);
};

exports.profileDetails = async (req, res) => {
  let result = await detailsUserService(req);
  res.status(200).json(result);
};

exports.recoverVerifyEmail = async (req, res) => {
  let result = await verifyEmailService(req);
  res.status(200).json(result);
};

exports.recoverVerifyOTP = async (req, res) => {
  let result = await verifyOtpService(req);
  res.status(200).json(result);
};

exports.recoverResetPass = async (req, res) => {
  let result = await resetPassService(req);
  res.status(200).json(result);
};
