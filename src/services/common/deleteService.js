const deleteService = async (req, model) => {
  try {
    let deleteID = req.params.id;
    let userEmail = req.headers["email"];

    let queryObject = {};

    queryObject["_id"] = deleteID;
    queryObject["userEmail"] = userEmail;

    let data = await model.deleteOne(queryObject);

    return { status: "success", delete: data };
  } catch (error) {
    return { status: "fail", data: error };
  }
};

module.exports = deleteService;
