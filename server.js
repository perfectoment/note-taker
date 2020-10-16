// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
var fs = require("fs");
var database = require("./db/db.json")
const util = require("util");
const uuid = require("uuidv4")


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
app.post("/api/notes", function(req, res) {
  var note = req.body;
  note.id = uuidv4()
  database.push(note);
  fs.writeFile("./db/db.json", JSON.stringify(database), (err) => {
    if(err){
      throw err;
    }
    res.json("Added!")
  }); 
});
;

app.delete("/api/notes/:id"), function (req, res){
  deleteId = parseInt(req.body.id)


}

app.get("/notes", function(req, res) {
  res.sendFile(path.join(__dirname, "./public/notes.html"));
  });


app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./public/index.html"));
  });


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  