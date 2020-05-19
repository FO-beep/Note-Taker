//The path package needs to be included to get the correct file path for our html.

const path = require("path");

//Routing

module.exports = function (app) {

    //If no matching route is found, default to index.


    //HTML GET requests
    //The code below handles when users visit a page. In each case below, the user is shown an HTML page of content
    app.get("/notes", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });

    //If no matching route is found, default to index.
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

};