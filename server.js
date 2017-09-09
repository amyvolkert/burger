// Require installed npm packages
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var exphbs = require('express-handlebars');

// Specify the port; may use = process.env.PORT || 3000
var port = 3000;

// Create an instance of the express app
var app = express();

// TA
// Serve static content for the app from the public directory
app.use(express.static("public"));

// Parse the text as URL encoded data
app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=TA move
app.use(methodOverride("_method"));


// Set handlebars as the default templating 'engine' of express and envoke exphbs object
// Pass in a default layout of main
app.engine('handlebars', exphbs({defaultLayout: "main"}));
app.set('view engine', 'handlebars');


// Import express routes and give the server access to them
var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);

app.listen(port);
