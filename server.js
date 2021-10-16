const express = require("express"); // use module express
const bodyParser = require("body-parser"); // use module body-parser

// create our express app
const app = express();

// middleware
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// route
const routes = require("./controllers/router");
app.use("/", routes);

//Configure the server port
const port = 3000;
app.listen(port, () => {
  console.info("[server ] listeniing at port:" + port);
  console.info("[server ] http://localhost:" + port);
});
