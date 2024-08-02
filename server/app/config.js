// Load the express module to create a web application

const express = require("express");

const app = express();

const apiRouter = require("./routers/api/router");

app.use("/api", apiRouter);

app.get("/", (_, res) => res.status(200).send("Welcome to Wild Series ! 🧙‍♂️"));

module.exports = app;
