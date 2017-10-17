// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var htmlRoutes = require('./app/routing/htmlRoutes.js');
var apiRoutes = require('./app/routing/apiRoutes.js');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


// Routes

app.use('/',htmlRoutes);
app.use('/survey',htmlRoutes);

app.get('/api/friends',apiRoutes);
app.post('/api/friends',apiRoutes);




app.listen(PORT, function() {
  console.log(`our app is running on port ${ PORT }`);
});
