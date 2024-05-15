const router = require("express").Router();
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

// Get notes
router.get("/notes", (req, res) => {
  fs.readFile("./db/db.json", (err, data) => {
    if (err) {
      console.log(err);
      return res.status(404).json({ message: "Notes not found" });
    }

    const notes = JSON.parse(data);
    res.json(notes);
  });
});

// Post Note
router.post("/notes", (req, res) => {
  fs.readFile("./db/db.json", (err, data) => {
    if (err) {
      console.log(err);
      return res.status(404).json({ message: "Notes not found" });
    }

    const notes = JSON.parse(data);
    console.log(req.body);

    const newNote = {
      ...req.body,
      id: uuidv4(),
    };

    notes.push(newNote);
    fs.writeFile("./db/db.json", JSON.stringify(notes), (err) => {
      console.log(err);
      return res.json(notes);
    });
  });
});

// Delete Note
router.delete("/notes/:id", (req, res) => {
  fs.readFile("./db/db.json", (err, data) => {
    if (err) {
      console.log(err);
      return res.status(404).json({ message: "Notes not found" });
    }

    const notes = JSON.parse(data);
    console.log(req.params.id);
    const filteredNotes = notes.filter((note) => note.id != req.params.id);
    fs.writeFile("./db/db.json", JSON.stringify(filteredNotes), (err) => {
      console.log(err);
      return res.json(filteredNotes);
    });
  });
});

// Export router
module.exports = router;
