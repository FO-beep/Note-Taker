// DEPENDENCIES
//Npm packages inorder to give our server useful functionality
const express = require("express");
const path = require("path");

const app = express(); //This tells node that we are creating an express server
const PORT = process.env.PORT || 8080; //Sets initial port

//Sets up the Express app to handle data parsing
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.use(express.static("develop/public"));

//Router
//The below points our server to a series of route files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
require("./routes/apiRoute")(app);
require("./routes/htmlRoute")(app);

//Listener - the code below effectively starts the server
app.listen(PORT, () => {
  console.log("App listening on PORT: " + PORT);
});
