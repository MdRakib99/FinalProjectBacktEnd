const express = require("express");
const {
  registration,
  login,
  profileUpdate,
  profileDetails,
  recoverVerifyEmail,
  recoverVerifyOTP,
  recoverResetPass,
} = require("../controllers/users/userController");
const authVerifyMiddleware = require("../middleware/authVerifyMiddleware");
const {
  createBrand,
  updateBrand,
  brandList,
  brandDropDown,
} = require("../controllers/brands/brandsController");
const {
  createCategory,
  updateCategory,
  categoryDropDown,
  categoryList,
} = require("../controllers/categories/categoriesController");
const {
  createProduct,
  updateProduct,
} = require("../controllers/products/productsController");

const router = express.Router();

//User Profile

router.post("/registration", registration);
router.post("/login", login);
router.post("/profileUpdate", authVerifyMiddleware, profileUpdate);
router.get("/profileDetails", authVerifyMiddleware, profileDetails);
router.get("/recoverVerifyEmail/:email", recoverVerifyEmail);
router.get("/recoverVerifyOTP/:email/:otp", recoverVerifyOTP);
router.post("/recoverResetPass", recoverResetPass);

//Brands
router.post("/createBrand", authVerifyMiddleware, createBrand);
router.post("/updateBrand/:id", authVerifyMiddleware, updateBrand);
router.get(
  "/brandList/:pageNo/:perPage/:searchKeyword",
  authVerifyMiddleware,
  brandList
);
router.get("/brandDropDown", authVerifyMiddleware, brandDropDown);

//Categories
router.post("/createCategory", authVerifyMiddleware, createCategory);
router.post("/updateCategory/:id", authVerifyMiddleware, updateCategory);
router.get(
  "/categoryList/:pageNo/:perPage/:searchKeyword",
  authVerifyMiddleware,
  categoryList
);
router.get("/categoryDropDown", authVerifyMiddleware, categoryDropDown);
module.exports = router;

//Products

router.post("/createProduct", authVerifyMiddleware, createProduct);
router.post("/updateProduct/:id", authVerifyMiddleware, updateProduct);
