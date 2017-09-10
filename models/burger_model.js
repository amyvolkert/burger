// Import the ORM from orm.js to modify the database
var orm = require('../config/orm.js');

var burger = {
  // Grab all of the burgers from the db
  // orm.all refers to var orm all function in orm.js; inserting burgers as table input
  all: function(cb) {
    orm.all('burgers', function(res) {
      cb(res);
    })
  }
}

// Export the database functions for the controller
module.exports = burger;
