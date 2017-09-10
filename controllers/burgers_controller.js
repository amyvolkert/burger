// Require npm package express to create the router
var express = require('express');

// Create the router for the application
var router = express.Router();

// Import the model burger.js to use its db functions
var burger = require('../models/burger_model.js');

// Create all of the routes and set up logic within the routes where needed
// TA does This route gets all the data
router.get("/", function(req, res) {
  burger.all(function(data) {
    console.log(data);
    res.render('index');
  })
})

// Export route for server.js to use.
module.exports = router;
