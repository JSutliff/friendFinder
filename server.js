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
// =============================================================
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.use(express.static(__dirname + "/app/public"));

// Sets up server routes
// =============================================================
require("./routes/htmlRoutes")(app, path);
require("./routes/apiRoutes")(app);
var friends = require("./app/data/friends.js");
var addFriend = require("./app/data/friends.js");

console.log(friends);
// addFriend(app);

// app.post("/survey", function(req, res) {
//   var newFriend = req.body;
//   // call friendCompare
//   console.log(newFriend);
//   res.send(newFriend);

// });

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

