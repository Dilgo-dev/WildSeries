const tables = require("../../database/tables");

const browse = async (_, res) => res.status(200).json(await tables.program.readAll());

module.exports = { browse };
