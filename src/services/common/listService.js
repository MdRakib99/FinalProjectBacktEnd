const lisetService = async (req, dataModel, searchArray) => {
  try {
    let pageNo = Number(req.params.pageNo);
    let perPage = Number(req.params.perPage);
    let searchValue = req.params.searchKeyword;

    let userEmail = req.headers["email"];

    let skipRow = (pageNo - 1) * perPage;

    var data;

    if (searchValue !== "0") {
      let searchQuery = { $or: searchArray };
      data = await dataModel.aggregate([
        { $match: { userEmail: userEmail } },
        { $match: searchQuery },
        {
          $facet: {
            total: [{ $count: "count" }],
            rows: [{ $skip: skipRow }, { $limit: perPage }],
          },
        },
      ]);
    } else {
      data = await dataModel.aggregate([
        { $match: { userEmail: userEmail } },
        {
          $facet: {
            total: [{ $count: "count" }],
            rows: [{ $skip: skipRow }, { $limit: perPage }],
          },
        },
      ]);
    }

    return { status: "success", data: data };
  } catch (error) {
    return { status: "fail", data: error.toString() };
  }
};

module.exports = lisetService;
