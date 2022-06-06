const router = require('express').Router();
const path = require('path');
const fs = require('fs');
const { db } = require('../../db/db.json');

router.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../db/db.json'));
});

router.post('/api/notes', (req, res) => {
    
});

router.delete('/api/notes/:id', (req, res) => {
    
})
module.exports = router;