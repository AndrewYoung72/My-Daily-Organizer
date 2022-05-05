const notes = require('express').Router();





// GET Route for retrieving all the notes
notes.get('/', (req, res) => {
  readFromFile('./notes.json').then((data) => res.json(JSON.parse(data)));
});

module.exports = notes;