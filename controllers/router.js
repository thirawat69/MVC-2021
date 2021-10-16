const express = require("express");
const app = express();
const logic = require("./logic");
const books = require("../models/DB.json");

// หน้าแรก path: "/".
app.get("/", (req, res) => {
  res.render("../views/home.ejs");
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
