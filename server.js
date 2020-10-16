// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
var fs = require("fs");
var database = require("./db/db.json")
const util = require("util");


// Set up the Express App
// =============================================================
var app = express();
var PORT =process.env.PORT ||  3000;

// Set up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
// =============================================================
//Reading the files in db.json
app.get("/api/notes", function(req, res) {
  res.json(database);
  console.log(database);
  });
  
//Writing the files into db.json
app.post("/api/notes", function(req, res) {})
  var note = req.body;
//   fs.readFile(path.join(__dirname,"./db/db.json"), "utf8", function(err, data) {
//   var parsedData = JSON.parsserve(data);
//   var combinedData = [newNote, ...parsedData];
  
  // });
  // // writeFileAsync("./db.db.json", combinedData, "utf8")


//  readFileAsync("./db/db.json", "utf8")
//  .then((notes) => 
//  [newNote, ...notes])
//  .then(updatedNotes => console.log(updatedNotes))

  
//   res.json("Successfully added note")
// });

app.get("/notes", function(req, res) {
  res.sendFile(path.join(__dirname, "./public/notes.html"));
  });


app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./public/index.html"));
  });


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  