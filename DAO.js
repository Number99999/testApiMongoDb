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
    this.client.connect();
    this.instance = this;
  }
  async createTable(tableName) {
    await this.client
      .db(`${ConstData.dbName}`)
      .createCollection(`${tableName}`);
  }
  async insertToTable(obj, tableName) {
    let a = await this.client
      .db(`${ConstData.dbName}`)
      .collection(`${tableName}`)
      .insertOne(obj);
    // .insertOne(obj, function (err, res) {
    //     if (res) {
    //         console.log("insrt false");
    //     } else console.log("insert successfull");
    // })
  }
}
module.exports = DAO;
