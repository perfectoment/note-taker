# Note Taker

I created a server that responds to requestions for two different HTML routes and displays an API for notes. You can enter in your notes, the notes are saved on the server and the notes can be deleted when you are done.

## Code Snippet for Note Taker
```
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
  ```


## Built With

* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [Node.js](https://nodejs.org/en/)
* [Express.js](http://expressjs.com/)

## Deployed Link

* [Here is a link to the deployed site!](https://arcane-thicket-80594.herokuapp.com/)


## Author

* **Ryan Nemec** 

- [Link to Portfolio Site](https://perfectoment.github.io/Ryan-Portfolio/)
- [Link to Github](https://github.com/perfectoment)
- [Link to LinkedIn](https://www.linkedin.com/in/ryan-nemec-5a6b3a66/)