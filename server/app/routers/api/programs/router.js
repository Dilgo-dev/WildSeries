const { Router } = require("express");
const { browse } = require("../../../controllers/programActions");

const router = Router();

router.get("/", browse);

module.exports = router;
