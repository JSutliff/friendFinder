// Dependencies
// ===========================================

// var data = require("../app/data/friends");

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
}


