// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


// =============================================================
var friendsArray = [{
  name: "William Eddington Darlingsforthshireham III",
  photo: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTcxMTQ4MzY2Nl5BMl5BanBnXkFtZTgwMzAxOTY3MjI@._V1_SY1000_CR0,0,759,1000_AL_.jpg",
  scores: [1,2,3,4,5,1,2,3,4,5]
}];

console.log(friendsArray);


// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "/app/public/home2.html"));
});

app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "/app/public/survey2.html"));
});

app.get("/api/friends", function(req, res) {
  res.json(friendsArray);
});


app.post("/api/friends", function(req, res) {
  var newFriend = req.body;

  console.log(newFriend);

  friendsArray.push(newFriend);

  var newVar = friendsArray[0];

  res.json(newVar);
});


app.listen(PORT, function() {
  console.log(`our app is running on port ${ PORT }`);
});
