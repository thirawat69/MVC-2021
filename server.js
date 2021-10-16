const express = require("express"); // ใช้งาน module express
const app = express(); // สร้างตัวแปร app เป็น instance ของ express
const bodyParser = require("body-parser"); // ใช้งาน module express body-parser

//JSON parser
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

//Call router
app.use("/", require("./controllers/router"));

//Start Server at port ...
const port = 4000;
app.listen(port, () => {
  console.info("[server]  Running server at port " + port);
  console.info("[server]  http://localhost:" + port);
});
