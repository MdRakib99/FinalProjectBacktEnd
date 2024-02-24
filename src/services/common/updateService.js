const updateService = async (req, dataModel) => {
  try {
    let userEmail = req.headers["email"];
    let id = req.params.id;
    let postBody = req.body;

    let data = await dataModel.updateOne(
      { _id: id, userEmail: userEmail },
      postBody
    );

    return { status: "success", data: data };
  } catch (error) {
    return { status: "fail", data: error.toString() };
  }
};

module.exports = updateService;
