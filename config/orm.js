// All of the MySQL code follows to collect data; the code will be modified using models/cat.js

// Import the MySQL connection located in connection.js
var connection = require("./connection.js");

// Object Relational Mapper (ORM) for all of the SQL statement functions
// Select ALL. The cb var represents the funtion being passed from server.js
var orm = {
  all: function(tableInput, cb) {
    connection.query('SELECT * FROM ' + tableInput + ';', function(err, res){
      if(err) throw err;
      cb(res);
    })
  }
}

// connection.query(queryString, function(err, result) {
//       if (err) {
//         throw err;
//       }
//       cb(result);
//     });
//   },
//   create: function(table, cols, vals, cb) {
//     var queryString = "INSERT INTO " + table;
//
//     queryString += " (";
//     queryString += cols.toString();
//     queryString += ") ";
//     queryString += "VALUES (";
//     queryString += printQuestionMarks(vals.length);
//     queryString += ") ";
//
//     console.log(queryString);
//
//     connection.query(queryString, vals, function(err, result) {
//       if (err) {
//         throw err;
//       }
//       cb(result);
//     });
//   },
//   update: function(table, objColVals, condition, cb) {
//     var queryString = "UPDATE " + table;
//
//     queryString += " SET ";
//     queryString += objToSql(objColVals);
//     queryString += " WHERE ";
//     queryString += condition;
//
//     console.log(queryString);
//     connection.query(queryString, function(err, result) {
//       if (err) {
//         throw err;
//       }
//
//       cb(result);
//     });
//   },
// };

  // delete: function(table, condition, cb) {
  //   var queryString = "DELETE FROM " + table;
  //   queryString += " WHERE ";
  //   queryString += condition;
  //
  //   connection.query(queryString, function(err, result) {
  //     if (err) {
  //       throw err;
  //     }
  //
  //     cb(result);
  //   });
  // };

// Export the orm object for the model
module.exports = orm;
