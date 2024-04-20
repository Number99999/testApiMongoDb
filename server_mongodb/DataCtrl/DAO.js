import ConstDataDB from "../ConstData.js";
import { MongoClient } from "mongodb";
export default class DAO {
  static _instance;
  curDB;
  client = new MongoClient(ConstDataDB.url);
  static get Instance() {
    if (!this._instance) this._instance = new DAO();
    return this._instance;
  }
  constructor() {
    this.client.connect().then(() => {
      this.curDB = this.client.db(ConstDataDB.dbName);
    });
  }
  //region create + insert
  async createTable(tableName) {
    try {
      let res = await this.checkExistCollection(tableName);
      if (!res) {
        await this.client
          .db(ConstDataDB.dbName)
          .createCollection(`${tableName}`);
      } else {
        console.log("collection existed");
      }
      return ConstDataDB.success;
    } catch (err) {
      return "err";
    }
  }
  async insertOne(obj, table) {
    try {
      const insert = await this.client
        .db(ConstDataDB.dbName)
        .collection(table)
        .insertOne(obj);
      return ConstDataDB.success;
    } catch (err) {
      return "err";
    }
  }
  async insertMany(listObj, table) {
    try {
      const insert = await this.client
        .db(ConstDataDB.dbName)
        .collection(table)
        .insertMany(listObj);
      return ConstDataDB.success;
    } catch (err) {
      return "err";
    }
  }
  //region utis
  async checkExistCollection(tableName) {
    const collections = await this.client
      .db(ConstDataDB.dbName)
      .listCollections()
      .toArray();
    const collectionNames = collections.map((c) => c.name);
    let res = false;
    if (collectionNames.includes(tableName)) {
      res = true;
    }
    return res;
  }
  async findOneFromCollection(obj, table) {
    try {
      const result = await this.client
        .db(ConstDataDB.dbName)
        .collection(table)
        .findOne(obj);
      return result;
    } catch (err) {
      console.error(err);
      return "err";
    }
  }
  async findFromCollection(fill, table) {
    try {
      const result = await this.client
        .db(ConstDataDB.dbName)
        .collection(table)
        .find(fill)
        .toArray();
      return result;
    } catch (err) {
      return "err" + err;
    }
  }
  async test() {
    // done join 2 table
    try {
      const result = await this.client
        .db(ConstDataDB.dbName)
        .collection("products")
        .aggregate([
          { $match: { username: "duong" } },
          {
            $lookup: {
              from: "user", // collection name in db
              localField: "username",
              foreignField: "username",
              as: "user",
            },
          },
          // { $limit: 1 },
          { $project: { _id: 0, username: 1, product: 1, user: 1 } },
        ])
        .toArray();
      return result;
    } catch (err) {
      return "err";
    }
  }
}
