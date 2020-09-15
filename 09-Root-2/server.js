const express = require("express");

const app = express();
const PORT = 3000;

const faction = [{
    routeName : "birds",
    name : "The Eyrie Dynasty",
    craftingPower: "strong",
    numberOfWarriors: "Twenty",
}, {
    routeName : "cats",
    name : "Marquise De Cat",
    craftingPower: "Weak",
    numberOfWarriors: "Twenty-Five",
}];

app.get ("/", function (req, res) {
    res.send("Welcome to the Root homepage!");
});

app.get("/faction", function (req, res) {
    const chosen = req.params.faction;
    res.json(faction);
    console.log(chosen);
    res.end();
});

app.listen(PORT, function () {
  console.log("Works");
});
