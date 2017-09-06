// Require connection
var connection = require("../config/connection.js");

// Create methods that will execute the MySQL commands in the controllers
// Object for all SQL statement functions
app.get('/', function(req, res) {
  connection.query('SELECT * FROM burgers_db;' function(err, data) {
    if (err) {
      console.log('error selecting all from burgers')
    }

    res.render("index", {burger, data})
  })
})


// Export the orm object
module.exports = orm;
