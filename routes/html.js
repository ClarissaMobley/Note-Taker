const router = require("express").Router();
const path = require("path");


// Get Notes
router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"))
});

// Get HTML
router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"))
});


module.exports = router