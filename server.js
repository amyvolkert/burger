// Require installed npm packages
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var exphbs = require('express-handlebars');

// Create an instance of the express app
var app = express();

// Specify the port; may use = process.env.PORT || 3000
var port = 3000;

// Parse the text as URL encoded data
app.use(bodyParser.urlencoded({ extended: false }));
// TA
// Serve static content for the app from the public directory
// app.use(express.static("public"));

// Override with POST having ?_method=TA move
app.use(methodOverride("_method"));


// Set handlebars as the default templating 'engine' of express and envoke exphbs object
// Pass in a default layout of main
app.engine('handlebars', exphbs({defaultLayout: "main"}));
app.set('view engine', 'handlebars');

//TA
// Data
var burgers = [
  {name: '', devoured: ''},
  {devoured: ''},
];

//Routes
app.get('/index/:name', function(req,res) {
  for (var i = 0; i < burgers.length; i++) {
    if (burgers[i].name === req.params.name) {
      return res.render('burgers', burgers[i]);
    }
  }
});
