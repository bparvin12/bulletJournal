const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const morgan = require ('morgan');
const bodyParser = require ('body-parser');
const mongoose = require ('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/APIAuthentication');


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Auth
app.use(morgan('dev'));
app.use(bodyParser.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Database configuration
// Save the URL of our database as well
const databaseUrl="QueueTheButler";
let collection = [];

// ============================================================================
// Should I use let or const here if ideally, the user can add their own new 
//  tables?
// ----------------------------------------------------------------------------
// USe mongojs to hook to database to the db variable
let db = mongojs(databaseUrl, collection);
// ============================================================================
// ----------------------------------------------------------------------------

//This makes sure that any errors are logged if mongodb runs into an issue
db.on ("error", function(error)) {
  console.log("Database Error: ", error):
}):

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
