var router = require("express").Router();
var friendsArray = require("./../data/friends.js");


	router.get('/api/friends', function(req, res) {
	  res.json(friendsArray);
	});


	router.post('/api/friends', function(req, res) {
	  var newFriend = req.body;

	  console.log(newFriend);

	  var differenceArray = [];

	  for (var i=0; i<friendsArray.length; i++){
	    var tempDifArray = [];

	    for(var j=0; j<friendsArray[i].scores.length; j++){
	      var temp = Math.abs(parseInt(friendsArray[i].scores[j]) - parseInt(newFriend.scores[j]));
	      tempDifArray.push(temp);
	    }

	    var sum = tempDifArray.reduce(add, 0);

	    function add(a, b) {
	        return a + b;
	    }

	    differenceArray.push(sum);

	  }

	  var min = differenceArray.reduce(function(a,b){
	    return Math.min(a,b);
	  })

	  var maxPosition = differenceArray.indexOf(min);

	  var newVar = friendsArray[maxPosition];

	  friendsArray.push(newFriend);

	  res.json(newVar);
	});

module.exports = router;