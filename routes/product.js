const express = require("express");
const router = express.Router();

const {
  getProductById,
  createProduct,
  getProduct,
  photo,
  deleteProduct,
  updateProduct,
  getAllProducts,
  getAllUniqueCategories,
} = require("../controllers/product");
const { isSignedIn, isAuthenticated, isAdmin } = require("../controllers/auth");
const { getUserById } = require("../controllers/user");

// Param
router.param("userId", getUserById);
router.param("productId", getProductById);

// All of Actual Routes

// CREATE
router.post(
  "/product/create/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  createProduct
);

// READ
router.get("/product/:productId", getProduct);
router.get("/product/photo/:productId", photo);

// DELETE
router.delete(
  "/product/:productId/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  deleteProduct
);
// UPDATE

router.put(
  "/product/:productId/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  updateProduct
);

// LISTING
router.get("/products", getAllProducts);

router.get("/products/categories", getAllUniqueCategories);

module.exports = router;
