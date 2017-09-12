// Require installed npm package MySQL
var mysql = require("mysql");

// Create a connection to the database
var connection = mysql.createConnection({
	  port: 3306,
    host: "codeflink.net",
  	user: "amyvolkert",
  	password: "Ar7wrf5cplln",
  	database: "amyvolkert"
	});

// Connect to the database
connection.connect(function(err) {
	if (err) {
    console.log("error connecting: " + err.stack);
    return;
  }
    console.log("connected");
});

// Export connection for our ORM to use
module.exports = connection;
