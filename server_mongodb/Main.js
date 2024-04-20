// region import
import express from "express";
import EmailCtrl from "./Controller/EmailerCtrl.js";
import DAO from "./DataCtrl/DAO.js";
import cors from "cors";
import { UserCtrl } from "./Controller/UserCtrl.js";
//endregion
// region control
const app = express();
const mailer = EmailCtrl.instance;
app.use(cors());
app.get("/", (req, res) => {
  res.send("hello");
});

app.post("/users/login", async function (req, res) {
  const query = req.query;
  const username = query.username;
  const password = query.password;
  const requestDB = await UserCtrl.Instance.findUser(query);
  res.send(requestDB);
});
app.post("/users/create", async function (req, res) {
  const query = req.query;
  const username = query.username;
  const password = query.password;
  const requestDB = await dbConnect.insertOne(query, "user");
  res.statusCode = 200;
  res.send(requestDB);
});

app.listen(8080, () => {});
const dbConnect = new DAO();
// mailer.sendMail(
//   "a duong sieu cap dep trai",
//   "nguyenngocduong.ecorphd@gmail.com"
// );
//endregion

import crypto from "crypto";
const serecKey = crypto.randomBytes(32);
const iv = crypto.randomBytes(32);
console.log("key: " + serecKey, "iv: " + iv);


function cryp(text){
  const cipher = crypto.createCipheriv("aes-256-cbc", serecKey, iv);
  let encrypted = cipher.update(text, "utf8", "hex");
  encrypted += cipher.final("hex");
  return encrypted;
}
console.log(cryp("duong sieu cap dep trai"))