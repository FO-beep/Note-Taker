//Npm packages inorder to give our server useful functionality
const express = require("express");
const path = require("path");

const app = express(); //This tells node that we are creating an express server
const PORT = process.env.PORT || 8080; //Sets initial port

//Sets up the Express app to handle data parsing
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
app.use(express.static("public"));

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

//Router
//The below points our server to a series of route files.
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

//Listener - the code below effectively starts the server
app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);

});