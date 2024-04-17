const ConstData = require("./ConstData");
var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017";

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  else console.log("connected");
  var dbo = db.db("newestDB");
  dbo.collection("newestDB").findOne({}, function (err, result) {
    if (err) throw err;
    console.log(result.name);
    db.close();
  });
});
