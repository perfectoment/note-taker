// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
var fs = require("fs");
var database = require("./db/db.json")
var notes = []

// Sets up the Express App
// =============================================================
var app = express();
var PORT =process.env.PORT ||  3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
// =============================================================
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/index.html"));
  });

app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/notes.html"));
  });

app.get("/api/notes", function(req, res) {
  return res.json(database);
  });

app.post("/api/notes", function(req, res) {
  var newNote = req.body;
  database.push(newNote);
  console.log(newNote);

});



app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  