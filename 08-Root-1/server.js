const express = require("express");

const app = express();
const PORT = 3000;

const birds = {
  name: "The Eyrie Dynasty",
  backstory: "Must retake forest from cats by builidng roosts",
  craftingPower: "strong",
  numberOfWarriors: "Twenty",
};

const cats = {
  name: "Marquise De Cat",
  backstory: "Recently took over forest, now must industrialize it.",
  craftingPower: "Low",
  numberOfWarriors: "Twenty-Five",
};

app.get("/", function (req, res) {
  res.send("Welcome to the Root Page!!!");
});

app.get("/birds", function (req, res) {
  res.send(birds);
});

app.get("/cats", function (req, res) {
  res.send(cats);
});

app.listen(PORT, function () {
  console.log("Works");
});
