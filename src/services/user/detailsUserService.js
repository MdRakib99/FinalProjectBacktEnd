const userModel = require("../../models/users/userModel");

const detailsUserService = async (req) => {
  try {
    let email = req.headers["email"];
    let matchStage = {
      $match: { email: email },
    };
    let data = await userModel.aggregate([matchStage]);
    return { status: "success", data: data };
  } catch (error) {
    return { status: "fail", data: error.toString() };
  }
};

module.exports = detailsUserService;
