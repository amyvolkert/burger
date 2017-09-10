// All of the MySQL code follows to collect data; the code will be modified using models/cat.js

// Import the MySQL connection located in connection.js
var connection = require("./connection.js");

// Object Relational Mapper (ORM) for all of the SQL statement functions
// orm.all method. The cb var represents the funtion being passed from server.js
var orm = {
  all: function(tableInput, cb) {
    connection.query("SELECT * FROM " + tableInput + ";", function(err, res){
      if(err) throw err;
      cb(res)
    })
  }
}

// Export the orm object for the model burger_model.js
module.exports = orm;
