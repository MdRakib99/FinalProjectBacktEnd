const dropDownService = async (req, dataModel, projection) => {
  try {
    let userEmail = req.headers["email"];
    let data = await dataModel.aggregate([
      { $match: { userEmail: userEmail } },
      { $project: projection },
    ]);
    return { status: "success", data: data };
  } catch (error) {
    return { status: "fail", data: error.toString() };
  }
};

module.exports = dropDownService;
