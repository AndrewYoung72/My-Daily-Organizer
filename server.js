const express = require('express');
const path = require('path');
// const fs = require('fs');
const textData = require('./db/db.json')
const PORT = 3001;
const app = express();



//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api', api);

//Get route for notes
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, 'notes.html'))
);

//Get route for index.html
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, 'index.html'))
);

app.get('/api/notes', (req, res) => {
  // Let the client know that their request was received
  res.json(`${req.method} request received`);

  // Show the user agent information in the terminal
  console.info(req.rawHeaders);

  // Log our request to the terminal
  console.info(`${req.method} request received`);
});

// POST request
app.post('/api/notes', (req, res) => {
  // Let the client know that their POST request was received
  res.json(`${req.method} request received`);

  // Show the user agent information in the terminal
  console.info(req.rawHeaders);

  // Log our request to the terminal
  console.info(`${req.method} request received`);
});

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
