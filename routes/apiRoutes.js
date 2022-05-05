const router = require("express").Router();
const fs = require("fs");
const textData = require("../db/db.json");

//GET request for API
router.get("/api/notes", (req, res) => {
  res.json(textData);

});


// POST request for API
router.post("/api/notes", (req, res) => {
  console.log("POST activated!");
  console.log(textData);
  console.log(req.body);
  
  textData.push(req.body);
  console.log(textData);

  fs.writeFile("./db/db.json", JSON.stringify(textData), () => {
    res.json("Hello");
  });

});

module.exports = router;