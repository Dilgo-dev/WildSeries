const tables = require("../../database/tables");

const handleError = (res, error, message) => {
  console.error(message, error);
  return res.status(500).json({ error: message });
};

const browse = async (_, res) => {
  try {
    const categories = await tables.category.readAll();
    return res.status(200).json(categories);
  } catch (error) {
    return handleError(res, error, "An error occurred while retrieving categories");
  }
};

const read = async (req, res) => {
  const { id } = req.params;
  try {
    const category = await tables.category.readOne(id);
    if (!category || category.length === 0) {
      return res.status(404).json({ error: `Category (with id: ${id}) not found!` });
    }
    return res.status(200).json(category);
  } catch (error) {
    return handleError(res, error, "An error occurred while reading the category");
  }
};

const edit = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  try {
    const result = await tables.category.updateOne(id, name);
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: `Category (with id: ${id}) not found!` });
    }
    return res.status(200).json({ message: `Category (with id: ${id}) updated successfully!` });
  } catch (error) {
    return handleError(res, error, "An error occurred while updating the category");
  }
};

const add = async (req, res) => {
  const { name } = req.body;
  try {
    const result = await tables.category.addOne(name);
    console.info(`Category ${name} created with id: ${result.insertId}`);
    return res.status(201).json({ message: `Category ${name} created successfully!`, id: result.insertId });
  } catch (error) {
    return handleError(res, error, "An error occurred while adding the category");
  }
};

const destroy = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await tables.category.deleteOne(id);
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: `Category (with id: ${id}) not found!` });
    }
    console.info(`Category (with id: ${id}) deleted`);
    return res.status(200).json({ message: `Category (with id: ${id}) deleted successfully!` });
  } catch (error) {
    return handleError(res, error, "An error occurred while deleting the category");
  }
};

module.exports = {
  browse,
  read,
  edit,
  add,
  destroy
};