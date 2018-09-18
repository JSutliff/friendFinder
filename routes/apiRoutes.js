// Dependencies
// ===========================================

var friendsData = require("../app/data/friends");

// Routing
// ===========================================
module.exports = function(app, path) {
  app.get('/', function(req, res) {
    res.json({name: 'John'});
    // res.sendFile(path.join(__dirname + '/../public/', 'home.html'));
  });

  app.get('/survey', function(req, res) {
    // res.json({name: 'John'});
    // res.sendFile(path.join(__dirname + '/../public/', 'survey.html'));
  })

  app.post("/survey", function(req, res) {
    var newFriend = req.body;
    // call friendCompare
    console.log(newFriend);
    res.send(newFriend);
  });
}


