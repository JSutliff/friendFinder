// Dependencies
// ===========================================

var friendsData = require("../app/data/friends");
var addFriend = require("../app/data/friends.js").addFriend;

// Routing
// ===========================================
module.exports = function(app, path) {
  // app.get('/', function(req, res) {
  //   res.json({name: 'John'});
  //   // res.sendFile(path.join(__dirname + '/../public/', 'home.html'));
  // });

  app.get('/api/survey', function(req, res) {
    res.json(friendsData);
  })

  app.post("/api/survey", function(req, res) {
    var newFriend = req.body;
    // call friendCompare
    console.log(newFriend);
    friendsData.push(newFriend);
    res.send(newFriend);
  });
}


