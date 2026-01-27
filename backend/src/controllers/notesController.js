import Note from "../models/Note.js";



export async function getNotes(req, res) {
  try {
    const notes = await Note.find();
    res.status(200).json(notes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function createNote(req, res) {
  try {
    const { title, content } = req.body;
    const newNote = new Note({ title, content });x
    await newNote.save();
    res.status(201).json(newNote);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function updateNote(req, res) {
  try {
    const {title, content} = req.body;
    await Note.findByIdAndUpdate(req.params.id, {title, content});
    res.status(200).json({message: "Note updated"});
  }
  catch (error) {
    console.error("Error updating note", error);
    res.status(500).json({message: error.message});
  }
};

export const deleteNote = (req, res) => {
  res.sendStatus(200).send("Note deleted");
};