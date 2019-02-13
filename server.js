const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const morgan = require ('morgan');
const bodyParser = require ('body-parser');
const mongoose = require ('mongoose');
const cors = require('cors');
const moment = require('moment');


const QueueTheButlerDB = "APIAuthentication"; // we might want to rename the database name
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/' + QueueTheButlerDB);  // We might need to rename this


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


// Use mongooose to hook to database to the db variable
const db = mongoose.connection;

//This makes sure that any errors are logged if mongodb runs into an issue
db.on('error', console.error.bind(console, 'connection error:'));
 
db.once('open', function() {
  console.log("Connection Successful!");
}); 

// Define API routes here


app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/src/pages/Login/Login"));
});

//Auth
app.use('/users', require("./routes/users"));
app.use('/calorietrackers', require("./routes/calorietrackers"));
app.use('/tasks', require("./routes/tasks"));

// Send every other request to the React app
// Define any API routes before this runs. "*" Opens up every other route besides all the routes that have been defined. 
// THIS ROUTE NEEDS TO BE LAST
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port https://localhost:${PORT}!`);
});
