// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Root Faction Data
// =============================================================
const factions = [
    {
      routeName: "birds",
      name: "The Eyrie Dynasty",
      craftingPower: "Medium",
      numberOfWarriors: 20,
    },
    {
      routeName: "cats",
      name: "Marquise De Cat",
      craftingPower: "Weak",
      numberOfWarriors: 25,
    },
    {
        routeName: "mice",
        name: "The Woodland Alliance",
        craftingPower: "Strong",
        numberOfWarriors: 10,
    }
  ];

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/factions", function (req, res) {
  return res.json(factions);
});

app.get("/api/factions/:faction", function(req, res) {
  let chosen = req.params.faction
  console.log(chosen);

  for (let i = 0; i < factions.length; i++) {
    if (chosen === factions[i].routeName) {
      return res.json(factions[i]);
    }
  }
  return res.json(false);
});

app.post("/api/factions", function (req, res) {
  let newFaction = req.body;
  console.log(newFaction);
  factions.push(newFaction);
  res.json(newFaction);
});

app.listen(PORT, function () {
    console.log("App listening on Port 3000")
});
