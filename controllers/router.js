const express = require("express");
const app = express();
const logic = require("./logic");
const books = require("../models/DB.json");

// Home
app.get("/", (req, res) => {
  res.render("../views/home.ejs");
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

// Read
app.get("/books", (req, res) => {
  res.json(books);
});

// Read by id
app.get("/books/:id", (req, res) => {
  res.json(books.find((book) => book.id === req.params.id));
});

// Write
app.post("/books", (req, res) => {
  books.push(req.body);
  res.status(201).json(req.body);
});

// Update by id
app.put("/books/:id", (req, res) => {
  const updateIndex = books.findIndex((book) => book.id === req.params.id);
  res.json(Object.assign(books[updateIndex], req.body));
});

// Delete
app.delete("/books/:id", (req, res) => {
  const deletedIndex = books.findIndex((book) => book.id === req.params.id);
  books.splice(deletedIndex, 1);
  res.status(204).send();
});

module.exports = app;
