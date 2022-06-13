const router = require('express').Router();
const path = require('path');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid'); 

// "GET" request
router.get('/notes', (req, res) => {
    // sending file to the front end
    fs.readFile('./db/db.json', 'utf8', (err,data) => {
        const getNewData = JSON.parse(data)
        res.json(getNewData)
    })
    });

// "POST" request
router.post('/notes', (req, res) => {
    // Receive note to save on req.body
    let newNote = req.body;

    // give each note a unique id when its saved
    newNote.id = uuidv4();
        console.log(newNote)
    //add new note to db.json
    if (!newNote) {
        res.status(400).send('An error is occured when adding to database. Please try again!')
    } else {
        fs.readFile('./db/db.json', 'utf8', (err,data) => {
           if (err){console.log(err)}
           const newData = JSON.parse(data)
            newData.push(newNote)
            fs.writeFile("./db/db.json", JSON.stringify(newData), (err) =>{
                res.json("New data has been saved!")
            })
        });
        
    // Return note
    // res.json(newNote);
    }

});

// "DELETE" request
router.delete('/notes/:id', (req, res) => {
    // recieve a query parameter containing the id of a note

    // Read all notes from db.json
    
    // Delete notes with given id property

    // Rewrite notes to db.json
    fs.writeFile(path.join(__dirname, "../db/db.json"))
})


module.exports = router;