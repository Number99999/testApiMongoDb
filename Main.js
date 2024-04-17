// region import
// const express = require("express");
// const ConstData = require("./ConstData");
const DAO = require("./DAO");
// //endregion
// //region control
// const app = express();
// app.get("/", (req, res) => {
//   res.send("hello");
// });

// app.post("/hello", function (req, res) {
//   res.send("You just called the post method at '/hello'!\n");
// });
(async() => {
    const dbConnect = new DAO();
    console.log("running")
    // dbConnect.insertToTable({ duong: "deptraivcl", level: "siêu cấp level 3" }, "newestDB")
    await dbConnect.createTable("user");

})()
// app.listen(8080, () => {});
//endregion
