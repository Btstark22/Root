const express = require('express');
const app = express();
const PORT = 3000;

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

app.get("/", function (req, res ) {
    res.send("<h1>First Route BRUH.</h1>");
});

app.get("/factions", function (req, res) {
    return res.json(factions);
});

app.get("/factions/:routeName", function (req, res) {
    let chosen = req.params.routeName
    console.log(chosen);

    for (let i = 0; i < factions.length; i++) {
        if(chosen === factions[i].routeName) {
            return res.json(factions[i])
        }
    }
    return res.send("Sucks to suck BRUH.");
});

app.post("/api/factions", function (req, res) {
    const newFaction = req.body;
    console.log(newFaction);
    factions.push(newFaction);
    res.json(newFaction);
});

app.listen(PORT, function () {
    console.log("App is running on port: " + PORT);
});