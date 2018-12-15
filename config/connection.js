var mysql = require("mysql2");
require("dotenv").config();
var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
  } else {
  
    connection = mysql.createConnection({
      'port': 3306,
      'host': process.env.HOST,
      'user': process.env.USERID,
      'password': process.env.PASSWORD,
      'database': process.env.DATABASE
    })
  
  }

//var connection = mysql.createConnection({
 // host: "localhost",
 // port: 3306,
 // user: "root",
 // password: "",
  //database: "nfl_games_db"
//});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;