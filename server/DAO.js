const { MongoClient, Long } = require("mongodb");
const ConstData = require("./ConstData");
class DAO {
  static instance;
  curDB;
  client = new MongoClient(ConstData.url);
  static get instance() {
    if (!this.instance) this.instance = new DAO();
    return this.instance;
  }
  constructor() {
    this.client.connect().then(() => {
      this.curDB = this.client.db(ConstData.dbName);
    });
    this.instance = this;
  }
  async createTable(tableName) {
    await this.client.db(ConstData.dbName).createCollection(`${tableName}`);
  }
  async insertToTable(obj, tableName) {
    await this.client
      .db(ConstData.dbName)
      .collection(`${tableName}`)
      .insertOne(obj);
  }
  async insertOne(obj, table) {
    await this.client.db(ConstData.dbName).collection(table).insertOne(obj);
  }
  async insertMany(listObj, table) {
    await this.client
      .db(ConstData.dbName)
      .collection(table)
      .insertMany(listObj);
  }
  async findOne(obj, table) {
    await this.client
      .db(ConstData.dbName)
      .collection(table)
      .findOne(obj, function (err, res) {
        if(err) return null;
        return res;
      });
  }
}
module.exports = DAO;
