const express = require("express");

const PORT = 3001;
const app = express();

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
// app.use('/api/notes', api);
//Get route for notes


app.use(require('./routes/apiRoutes'))
app.use(require('./routes/htmlRoutes'))




app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
