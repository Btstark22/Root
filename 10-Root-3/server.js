const express = require("express");

const app = express();
const PORT = 3000;

const factions = [
  {
    routeName: "birds",
    name: "The Eyrie Dynasty",
    craftingPower: "strong",
    numberOfWarriors: 20,
  },
  {
    routeName: "cats",
    name: "Marquise De Cat",
    craftingPower: "Weak",
    numberOfWarriors: 25,
  },
];

app.get("/", function (req, res) {
  res.send("Welcome to the ROOT page!");
});

app.get("/api/factions", function (req, res) {
    return res.json(factions);
});

app.get("/api/factions/:routeName", function (req, res) {
    let chosen = req.params.routeName;
    console.log(chosen);

    for (let i = 0; i < factions.length; i++) {
        if (chosen === factions[i].routeName) {
            return res.json(factions[i]);
        }
    }
});

app.listen(PORT, function () {
  console.log("Works on : " + PORT);
});
