// Some data to make the trick

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

const getAllCategories = (_, res) => res.status(200).json(categories);

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
