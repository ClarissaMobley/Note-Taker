const router = require("express").Router();
const path = require("path");


// Get Note.html
router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"))
});

// Get Index.html
router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"))
});

// Export router
module.exports = router