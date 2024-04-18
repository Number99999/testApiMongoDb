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

app.post("/login", async function (req, res) {
  const query = req.query;
  const username = query.username;
  const password = query.password;
  let resFind = await dbConnect.findOne(query);
  console.log(resFind);
  res.send(`${resFind}`);
});
app.post("/users/create", (req, res) => {
  const query = req.query;
  const username = query.username;
  const password = query.password;
});

app.listen(8080, () => {});
const dbConnect = new DAO();
async function test() {
  let s = await dbConnect.findOne(
    { username: "duong", password: "sieucapdeptrai" },
    "newestDB"
  );
  console.log(s);
}

test()
//endregion
