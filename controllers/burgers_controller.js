// Require npm package express to create the router
var express = require('express');

// Create the router for the application
var router = express.Router();

// Import the model burger.js to use its db functions
var burger = require('../models/burger.js');

// Create all of the routes and set up logic within the routes where needed
// ta does This route gets all the data
router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render('index', hbsObject);
  });
});

// TA does This route allows an insertion into the data
router.post("/", function(req, res) {
  burger.create([
    "name", "devoured"
  ], [
    req.body.name, req.body.devoured
  ], function() {
    res.redirect("/");
  });
});

// TA does This route puts data to a specific URI
router.put("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.update({
    devoured: req.body.devoured
  }, condition, function() {
    res.redirect("/");
  });
});

router.delete("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  cat.delete(condition, function() {
    res.redirect("/");
  });
});

// Export route for server.js to use.
module.exports = router;
