const AbstractRepository = require("./AbstractRepository");

class CategoryRepository extends AbstractRepository {
  constructor() {
    super({ table: "category" });
  }

  async readAll() {
    const [rows] = await this.database.query(`SELECT * FROM ${this.table}`);
    return rows;
  }

  async readOne(id) {
    const [row] = await this.database.query(`SELECT * FROM ${this.table} where id = ?`, [id]);
    return row;
  }

  async addOne(name) {
    const [row] = await this.database.query(`INSERT INTO ${this.table} (name) VALUES (?)`, [name]);
    return row;
  }

  async updateOne(id, name) {
    const [row] = await this.database.query(
      `UPDATE ${this.table} SET name = ? WHERE id = ?`,
      [name, id]
    );
    return row;
  }

  async deleteOne(id) {
    const [row] = await this.database.query(
      `DELETE FROM ${this.table} WHERE id = ?`,
      [id]
    );
    return row;
  }

}

module.exports = CategoryRepository;
