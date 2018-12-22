var express = require("express");
var router = express.Router();

// Import MySQL connection.
var connection = require("../config/connection.js");

// Create all our routes and set up logic within those routes where required.
router.get("/results", function(req, res) {
  connection.query("SELECT * FROM games;", function(err, data) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return res.status(500).end();
    }
    res.render("results", { games: data });
  });
});

router.get("/", function(req, res) {
  connection.query("SELECT * FROM games;", function(err, data) {
    if (err) {
      return res.status(500).end();
    }
    res.render("passport", { games: data });
  });
});

router.post("/api/user_pick", function(req, res) {
  connection.query("INSERT INTO user_pick (winner) VALUES ( ?)",[req.body.winner], function(err,result) {
    if (err) {
      // If an error occurred, send a generic server failure
      console.error("error connecting: " + err.stack);
      return res.status(500).end();
    }
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api/user_pick/:id", function(req, res) {
  connection.query(
    "UPDATE user_pick SET winner = ? WHERE id = ?",
    [req.body.winner, req.params.id],
    function(err, result) {
      if (err) {
        // If an error occurred, send a generic server failure
        console.error("error connecting: " + err.stack);
        return res.status(500).end();
      }
      else if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();
    }
  );
});

router.delete("/api/user_pick/:id", function(req, res) {
  connection.query("DELETE FROM user_pick WHERE id = ?", [req.params.id], function(err, result) {
    if (err) {
      // If an error occurred, send a generic server failure
    console.error("error connecting: " + err.stack);
      return res.status(500).end();
    }
    else if (result.affectedRows === 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    }
    res.status(200).end();
  });
});

// Export routes for server.js to use.
module.exports = router;
