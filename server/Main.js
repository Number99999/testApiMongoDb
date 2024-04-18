// region import
const express = require("express");
const ConstData = require("./ConstData");
const DAO = require("./DAO");
const cors = require("cors");
// //endregion
// //region control
const app = express();
app.use(cors());
app.get("/", (req, res) => {
  res.send("hello");
});

app.post("/users/login", async function (req, res) {
  const query = req.query;
  const username = query.username;
  const password = query.password;
  dbConnect.findOne(query, "user").then(dt => {
    console.log(query, dt);
    res.send(dt);
  })
});
app.post("/users/create", (req, res) => {
  const query = req.query;
  const username = query.username;
  const password = query.password;
  dbConnect.insertOne(query, "user").then(dt => {
    res.send(dt);
  })
});

app.listen(8080, () => { });
const dbConnect = new DAO();
// console.log(dbConnect.client.db(ConstData.dbName).collection("user"));
//endregion
