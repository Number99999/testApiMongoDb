// region import
const express = require("express");
const ConstData = require("./ConstData");
const DAO = require("./DAO");
// //endregion
// //region control
const app = express();
app.get("/", (req, res) => {
  res.send("hello");
});

app.post("/hello", function (req, res) {
  res.send("You just called the post method at '/hello'!\n");
});

app.listen(8080, () => {});
const dbConnect = new DAO();
const dbo = dbConnect.client.db("newestDB");
dbo.collection("newestDB").findOne({}, function (err, result) {
  if (err) throw err;
  console.log(result.name);
  db.close();
});
//endregion
