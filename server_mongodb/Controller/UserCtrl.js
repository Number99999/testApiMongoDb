import UserModel from "../models/UserModel.js";
import DAO from "../DataCtrl/DAO.js";
export class UserCtrl {
  static _instance;
  static get Instance() {
    if (!this._instance) this._instance = new UserCtrl();
    return this._instance;
  }
  constructor() {}

  async createUser(obj) {
    try {
      const user = new UserModel(obj);
      await DAO.Instance.insertOne(user.toObj(), "user");
      return true;
    } catch (err) {
      return false;
    }
  }

  async findUser(obj) {
    try {
      const user = new UserModel(obj);
      const res = await DAO.Instance.findOneFromCollection(
        user.toObj(),
        "user"
      );
      return res;
    } catch (error) {
      return "err";
    }
  }
}
