const express = require("express");
const ConstData = require("./ConstData");
const app = express();

app.post("/", function (req, res) {
  res.send("fuck u");
});

app.listen(ConstData.port);
