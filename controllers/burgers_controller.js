// Require npm package express to create the router
// const?
var express = require('express');

// Create the router for the application
var router = express.Router();

// Import the model burger.js to use its db functions
var burger = require('../models/burger.js');

// Export route for server.js to use.
module.exports = router;
