var friendsData = [
  {
    "name":"Ahmed",
    "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    "scores":[
        5,
        1,
        4,
        4,
        5,
        1,
        2,
        5,
        4,
        1
      ],
      sum: 36
  },

];

var addFriend = function(app) {
  app.post("/survey", function(req, res) {
    var newFriend = req.body;
    // call friendCompare
    newFriend.score = newFriend.score.map(function(elem) {
      return parseInt(elem);
    });
    friendsData.push(newFriend);
    console.log(friendsData);
    res.send(friendsData);
  });
}






//submit on click
  //friendMatch(this.score, friendData)
  

module.exports = friendsData;

module.exports.addFriend = addFriend;
