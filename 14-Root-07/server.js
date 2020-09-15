const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.port || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

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

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
  });

  app.get("/add", function(req, res) {
      res.sendFile(path.join(__dirname, "add.html"));
  });

  app.get("/api/allfactions", function (req, res) {
      res.sendFile(path.join(__dirname, "allFactions.html"));
  });

  app.get("/api/factions/:faction", function (req, res) {
    const chosen = req.params.faction;
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

app.listen(PORT, function() {
    console.log("App Listening " + PORT);
});