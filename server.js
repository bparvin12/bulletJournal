const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const morgan = require ('morgan');
const bodyParser = require ('body-parser');
const mongoose = require ('mongoose');
const cors = require('cors');


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/APIAuthentication');


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Auth
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here

// Send every other request to the React app
// Define any API routes before this runs
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/src/pages/Login/Login"));
});

//Auth
app.use('/users', require("./routes/users"));


app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port https://localhost:${PORT}!`);
});
