// Import the ORM from orm.js to modify the database
var orm = require('../config/orm.js');

var burger = {
  // Grab all of the burgers from the db
  // orm.all refers to var orm all function in orm.js
  all: function(cb) {
    orm.all('burgers', function(res) {
      cb(res);
    })
  }
}

  // Create a new burger in the db
  // The variables cols and vals are arrays
  // create: function(cols, vals, cb) {
  //   orm.create("burgers", cols, vals, function(res) {
  //     cb(res);
  //   });
  // },

  // Update a burger in the db
//   update: function(objColVals, condition, cb) {
//     orm.update("burgers", objColVals, condition, function(res) {
//       cb(res);
//     });
//   },
// // May not need this
//   delete: function(condition, cb) {
//     orm.delete("burgers", condition, function(res) {
//       cb(res);
//     });
//   }
// }

// Export the database functions for the controller
module.exports = burger;
