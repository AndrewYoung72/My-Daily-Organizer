const express = require('express');
const path = require('path');
const fs = require('fs');

const PORT = 3001;
const app = express();



//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
// app.use('/api', api);

//Get route for notes
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, 'notes.html'))
);

//Get route for index.html
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, 'index.html'))
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
