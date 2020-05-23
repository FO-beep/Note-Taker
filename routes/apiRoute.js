//Load Data - here we link the routes to a series of "data" sources.
//These data sources hold arrays of information
const fs = require("fs");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);

var noteData = require("../db/noteData")

//Routing
module.exports = function (app) {

    //API GET requests
    app.get("/api/notes", function (req, res) {
        res.json(noteData);
    });


    //API POST requests
    app.post("/api/notes", function (req, res) {

        let newNotes = req.body;

        let lastID = noteData[noteData.length - 1]["id"];
        let newID = lastID + 1;
        newNotes["id"] = newID;


        //req.body is available since we're using the body parsing middleware
        console.log("Req.body: ", req.body);
        noteData.push(newNotes);


        //
        writeFileAsync("./db/db.json", JSON.stringify(noteData)).then(function () {
            console.log("db.json has successfully been updated!");

        })

        res.json(newNotes);
    });

    //Delete
    app.delete("/api/notes/:id", function (req, res) {

        console.log("Req.params: ", req.params);
        let userId = parseInt(req.params.id);

        console.log(userId);


        for (let i = 0; i < noteData.length; i++) {
            if (userId === noteData[i].id) {

                noteData.splice(i, 1);
                let dbJSON = JSON.stringify(noteData, null, 2);


                writeFileAsync("./db/db.json", dbJSON).then(function () {
                    console.log("Note has been deleted successfully!");

                });
            }
        }

        res.json(noteData);

    });



};