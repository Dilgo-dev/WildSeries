const { Router } = require("express");
const {
  browse,
  read,
  edit,
  add,
  destroy
} = require("../../../controllers/categoryActions");

const router = Router();

router.get("/", browse);

router.post("/", add);

router.get("/:id", read);

router.put("/:id", edit);

router.delete("/:id", destroy);

module.exports = router;
