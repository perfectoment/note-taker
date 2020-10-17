// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
var fs = require("fs");
var database = require("./db/db.json")
const util = require("util");
const { v4: uuidv4 } = require('uuid');
const { reverse } = require("dns");



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

app.get("/notes", function(req, res) {
  res.sendFile(path.join(__dirname, "./public/notes.html"));
  });

app.get("/api/notes", function(req, res) {
  res.json(database);})
  // fs.readFile(database, function(err, data){
  // let readData = JSON.parse(data);
  // res.json(readData);
  // })
  // console.log(database);
  // });
  
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./public/index.html"));
  });
  

//Writing the files into db.json
app.post("/api/notes", function(req, res) {
  var newNote = req.body;
  newNote.id = database.length
  database.push(newNote);
  fs.writeFile("./db/db.json", JSON.stringify(database), (err) => {
    if(err){
      throw err;
    }
    res.json("Added!")
  }); 
});
;

app.delete("/api/notes/:id", function (req, res){
 for(var i= 0; i < database.length; i++){
  if((i) === parseInt(req.params.id)){
    database.splice(i, 1)
    console.log("you deleted")
  }}
    

 fs.writeFile("./db/db.json", JSON.stringify(database), (err) => {
  if(err){
    throw err;
  } res.send("note deleted")
}); 
});




app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  