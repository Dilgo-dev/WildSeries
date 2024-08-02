const { Router } = require("express");
const {
  getAllCategories,
  getOneCategory,
} = require("../../../controllers/categoryActions");

const router = Router();

router.get("/", getAllCategories);

router.get("/:id", getOneCategory);

module.exports = router;
