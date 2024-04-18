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
    try {
      await this.client.db(ConstData.dbName).createCollection(`${tableName}`);
      return ConstData.success;
    } catch (err) {
      return "err";
    }
  }
  async insertOne(obj, table) {
    try {
      await this.client.db(ConstData.dbName).collection(table).insertOne(obj);
      return ConstData.success;;
    } catch (err) {
      return "err";
    }
  }
  async insertMany(listObj, table) {
    try {
      await this.client
        .db(ConstData.dbName)
        .collection(table)
        .insertMany(listObj);
      return ConstData.success;;
    }
    catch (err) {
      return "err";
    }
  }
  async findOne(obj, table) {
    try {
      const result = await this.client
        .db(ConstData.dbName)
        .collection(table)
        .findOne(obj);
      return result;
    } catch (err) {
      console.error(err);
      return "err";
    }
  }
}
module.exports = DAO;
