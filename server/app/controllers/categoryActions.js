// Some data to make the trick

const tables = require("../../database/tables");

const categories = [
  {
    id: 1,
    name: "Science-Fiction",
  },
  {
    id: 2,
    name: "Comédie",
  },
];

const getAllCategories = async (_, res) => res.status(200).json(await tables.category.readAll());

const getOneCategory = (req, res) => {
  const { id } = req.params;
  const findCategory = categories.find(
    (category) => category.id === parseInt(id, 10)
  );

  if (!findCategory)
    res.status(404).send(`Category (with id: ${id}) not found ! 🧟`);
  return res.status(200).json(findCategory);
};

module.exports = {
  getAllCategories,
  getOneCategory,
};
