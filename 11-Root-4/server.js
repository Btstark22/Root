const express = require('express');

const app = express();
const PORT = 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

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
    res.send("This is it.")
});

app.get("/api/factions", function (req, res) {
    return res.json(factions);
});

app.get("/api/factions/:name", function (req, res) {
    let chosen = req.params.name;
    console.log(chosen);

    for (let i = 0; i < factions.length; i++) {
        if (chosen === factions[i].routeName) {
            return res.json(factions[i])
        }
    }
    return res.send("No Dice.")
});

app.listen(PORT, function () {
    console.log("App Listening on Localhost:" + PORT);
});