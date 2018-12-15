var express = require("express");

var PORT = process.env.PORT || 8080;
var session = require("express-session");
// Requiring passport as we've configured it
var passport = require("./config/passport");


var app = express();

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));
// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Import routes and give the server access to them.
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
 // Log (server-side) when our server has started
 console.log("Server listening on: http://localhost:" + PORT);
});