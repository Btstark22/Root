const tableData = require("../data/tableData");
const waitingArray = require("../data/waitinglistData");

module.exports = function (app) {
  app.get("/api/tables", function (req, res) {
    res.json(tableData);
  });
  app.get("/api/waitlist", function (req, res) {
    res.json(waitingArray);
  });
};
