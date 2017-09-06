// Require installed npm package MySQL
var mysql = require("mysql");

// Create a connection to the database
var connection = mysql.createConnection({
	  port: 3306,
    host: "127.0.0.1",
  	user: "root",
  	password: "password",
  	database: "burger_db"
	});

// Connect to the database
connection.connect(function(err) {
	if (err) {
    console.log("error connecting");
    return;
  }
    console.log("connected as id " + connection.threadID);
});

// Export connection for our ORM to use
module.exports = connection;
