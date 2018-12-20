var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var game = require("../models/gamecrud.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  game.all(function(data) {
    var hbsObject = {
      games: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/user_pick", function(req, res) {
  game.create([
    "winner"
  ], [
    req.body.winner, 
  ], function(result) {
    
    res.json({ id: result.insertId });
  });
});




router.put("/api/user_pick/:id", function(req, res) {
  
  console.log(req.body.winner);
  console.log(req.params.id);
  
  var condition = "id = " + req.params.id;
  var winner = req.body.winner;
  game.update(
    winner,
    condition, 
    function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    }
  );
});

router.delete("/api/user_pick/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  game.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
