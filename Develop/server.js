// Dependencies
const express = require("express");
const app = express();

// Sets a port 
const PORT = 8080;

// Use a middleware to parse the JSON data
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
app.use(express.static("public"));

// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);


app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});