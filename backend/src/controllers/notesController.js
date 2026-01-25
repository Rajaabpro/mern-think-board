import Note from "../models/Note.js";
export async function getNotes(req, res) {
  try {
    const notes = await Note.find();
    res.status(200).json(notes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export const createNote = (req, res) => {
  res.sendStatus(201).send("Note created");
};

export const updateNote = (req, res) => {
  res.sendStatus(200).send("Note updated");
};

export const deleteNote = (req, res) => {
  res.sendStatus(200).send("Note deleted");
};
