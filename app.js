const express = require("express");
const app = express();
const books = require('./books/booksController');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/books', books);

app.get("/health", (req, res) => {
  res.status(200).send("Don't panic.");
});

module.exports = app;
