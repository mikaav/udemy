// jshint esversion:6

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

// for index.html (Calculator)

app.get("/", function (request, response) {
  response.sendFile(__dirname + "/index.html");
});

app.post("/", function (request, response) {
  var num1 = Number(request.body.n1);
  var num2 = Number(request.body.n2);
  var result = num1 + num2;

  response.send("The result of the calculation is:" + result);

  // response.send("Thanks for using our app");
});

// for bmiCalculator.html  (BMI Calculator)

app.get("/bmicalculator", function (request, response) {
  response.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmiCalculator", function (request, response) {
  var w1 = Number(request.body.val1);
  var h1 = Number(request.body.val2);
  var result1 = w1 * h1;

  response.send("Your BMI is " + result1);
});

//for runnind server

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
