const express = require("express");
const app = express();
const fs = require("fs"); //include the File System module for CRUD
const logic = require("./logic");

// Home
app.get("/", (req, res) => {
  try {
    res.render("../views/home.ejs");
  } catch (error) {
    let messageError = {
      statusCode: error.statusCode || 400,
      message: error.message || error,
    };
    res.status(messageError.statusCode);
    res.json(messageError);
  }
});

// API- show all restaurant
app.get("/getRestaurant", (req, res) => {
  try {
    let result = new logic().readText(); // call logic
    res.status(200).json(result);
  } catch (error) {
    let messageError = {
      statusCode: error.statusCode || 400,
      message: error.message || error,
    };
    res.status(messageError.statusCode);
    res.json(messageError);
  }
});

// page1
app.get("/PageOne", (req, res) => {
  res.render("../views/page1.ejs");
});

// page2
app.get("/PageTwo", (req, res) => {
  res.render("../views/page2.ejs");
});

// Drop1 (page)
app.get("/Drop1", (req, res) => {
  res.render("../views/dropdown1.ejs");
});

module.exports = app;
