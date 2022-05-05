const router = require("express").Router();
const path = require("path");

router.get("/notes", (req, res) => {
  // res.sendFile("./public/notes.html")

  res.sendFile(path.join(__dirname, "../public/notes.html"))
});

//Get route for index.html
router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"))
});

module.exports = router;