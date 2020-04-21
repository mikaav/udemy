// jshint esversion:6

const express = require("express");
const app = express();

app.get("/", function (request, response) {
  response.send("Hello User");
});

app.get("/contact", function (req, res) {
  res.send("Call Me or send me Email");
});

app.get("/about", function (req, res) {
  res.send("I am localhost server working on NodeJs");
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
