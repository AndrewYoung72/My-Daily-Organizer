const router = require("express").Router();
const res = require("express/lib/response");
const fs = require("fs");
const textData = require("../db/db.json");

//GET request for API
router.get("/api/notes", (req, res) => {
  res.json(textData);

});


// POST request for API
router.post("/api/notes", (req, res) => {
  console.log("POST activated!");
  console.log(req.body);
  textData.push(req.body);
  console.log(textData);

  fs.writeFile("./db/db.json", JSON.stringify(textData), () => {
    res.json("Hello");
  });

});

router.delete(`/api/notes/:id`, (req, res) => {
  console.log(`${req.method} request received`);
  fs.readFileSync("./db/db.json", textData, (err) => 
  err ? console.log(err) : console.log(textData))
  res.json(req.body);
  // fs.readFile("./db/db.json", );
  
});

module.exports = router;