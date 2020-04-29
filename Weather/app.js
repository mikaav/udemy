const express = require("express");
const app = express();
const https = require("https");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  const query = req.body.cityName;
  const apiKey = "79f9b4ef647bd73165f464c8e733506c";
  const units = "metric";
  const url =
    "https://api.openweathermap.org/data/2.5/forecast/?q=" +
    query +
    "&appid=" +
    apiKey +
    "&units=" +
    units;
  https.get(url, function (response) {
    console.log(response.statusCode);

    response.on("data", function (data) {
      const weatherData = JSON.parse(data);

      const temp1 = weatherData.list[0].main.temp;
      console.log(temp1);
      const disc1 = weatherData.list[0].weather[0].description;
      const icon1 = weatherData.list[0].weather[0].icon;
      const imageURL = "http://openweathermap.org/img/wn/" + icon1 + "@2x.png";
      res.write(
        "<h1>The temperature in " +
          query +
          " is " +
          temp1 +
          " degrees Celcius </h1>"
      );
      res.write("Weather description is " + disc1);
      res.write("<img src=" + imageURL + ">");
      res.send();
    });
  });
});

//   res.send("Server is up and running");

app.listen(3000, function () {
  console.log("Server is running on port 3000");
});
