var friendsData = [
  {
    "name":"Tom",
    "photo":"https://www.usmagazine.com/wp-content/uploads/tom-from-myspace-lg.jpg",
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
  {
    "name":"Hank with a tank",
    "photo":"https://i.pinimg.com/originals/03/0d/ef/030def3cc8df95a131d93c125ee92dab.jpg",
    "scores":[
        1,
        5,
        2,
        1,
        1,
        3,
        2,
        4,
        5,
        1
      ],
      sum: 25
  },
  {
    "name":"White Rasta Pasta",
    "photo":"https://yourfaircity.files.wordpress.com/2013/11/white-hippe.jpg",
    "scores":[
        4,
        4,
        4,
        5,
        5,
        2,
        5,
        5,
        1,
        1
      ],
      sum: 36
  },
  {
    "name":"Mingus Wookerton",
    "photo":"https://thump-images.vice.com/images/2015/04/02/how-to-spot-a-festival-wook-body-image-1428006079.jpg",
    "scores":[
        1,
        4,
        5,
        2,
        3,
        3,
        1,
        1,
        1,
        1
      ],
      sum: 22
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
    // console.log(friendsData);
    res.send(friendsData);
  });
}






//submit on click
  //friendMatch(this.score, friendData)
  

module.exports = friendsData;

module.exports.addFriend = addFriend;
