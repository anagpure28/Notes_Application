const express = require("express");
const { NoteModel } = require("../models/note.model");
const { auth } = require("../middleware/auth.middleware");

const noteRouter = express.Router();

//Post the Note
noteRouter.use(auth);
noteRouter.post("/create", async (req, res) => {
  try {
    const note = new NoteModel(req.body);
    await note.save();
    res.json({ msg: "New Note has been added", note: req.body });
  } catch (err) {
    res.json({ error: err.message });
  }
});

//Get the Node
noteRouter.get("/", async (req, res) => {
  try {
    const notes = await NoteModel.find({ userID: req.body.userID });
    res.send(notes);
  } catch (err) {
    res.json({ error: err.message });
  }
});

//Update the Note
noteRouter.patch("/update/:noteID", async (req, res) => {
  const userIDinUserDoc = req.body.userID;
  const { noteID } = req.params;
  try {
    const note = await NoteModel.findOne({ _id: noteID });
    const userIDinNoteDoc = note.userID;
    if (userIDinUserDoc === userIDinNoteDoc) {
      await NoteModel.findByIdAndUpdate({ _id: noteID }, req.body);
      res.json({ msg: `${note.title} has been updated` });
    } else {
      res.json({ msg: "Not Authorized!!" });
    }
  } catch (err) {
    res.json({ error: err });
  }
});

//Delete the Note
noteRouter.delete("/delete/:noteID", async (req, res) => {
  const userIDinUserDoc = req.body.userID;
  const { noteID } = req.params;
  try {
    const note = await NoteModel.findOne({ _id: noteID });
    const userIDinNoteDoc = note.userID;
    if (userIDinUserDoc === userIDinNoteDoc) {
      await NoteModel.findByIdAndDelete({ _id: noteID });
      res.json({ msg: `${note.user}'s note has been deleted.` });
    } else {
      res.json({ msg: "Not Authorized!!" });
    }
  } catch (err) {
    res.json({ error: err });
  }
});

module.exports = {
  noteRouter,
};
