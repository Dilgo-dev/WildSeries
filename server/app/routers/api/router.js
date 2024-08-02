const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const itemsRouter = require("./items/router");
const programsRouter = require("./programs/router");

router.use("/items", itemsRouter);
router.use("/programs", programsRouter);

/* ************************************************************************* */

module.exports = router;
