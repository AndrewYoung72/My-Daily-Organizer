const router = require("express").Router();
const fs = require("fs");
const textData = require("../db/db.json");

router.get("/api/notes", (req, res) => {
  // Let the client know that their request was received
  res.json(textData);

  // Show the user agent information in the terminal
  // console.info(req.rawHeaders);

  // // Log our request to the terminal
  // console.info(`${req.method} request received`);
});


// POST request
router.post("/api/notes", (req, res) => {
  console.log("POST activated!");

  console.log(req.body);

  console.log(textData);

  textData.push(req.body);

  console.log(textData);

  fs.writeFile("./db/db.json", JSON.stringify(textData), () => {
    res.json("Hello");
  });

  // Let the client know that their POST request was received
  // res.json(`${req.method} request received`);

  // // Show the user agent information in the terminal
  // console.info(req.rawHeaders);

  // // Log our request to the terminal
  // console.info(`${req.method} request received`);
});

module.exports = router;