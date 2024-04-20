export default class UserModel {
  // class UserModel {
  username;
  password;
  createTime;
  constructor(obj = null) {
    if (obj) {
      this.username = obj.username.replace(" ", "");
      this.password = obj.password.replace(" ", "");
    }
  }

  toObj() {
    return {
      username: this.username,
      password: this.password,
    };
  }
}

// module.exports = { UserModel };
