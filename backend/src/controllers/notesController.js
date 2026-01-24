export const getNotes = (req, res) => {
    res.sendStatus(200).send('Notes');
};

export const createNote = (req, res) => {
    res.sendStatus(201).send('Note created');
};

export const updateNote = (req, res) => {
    res.sendStatus(200).send('Note updated');
};

export const deleteNote = (req, res) => {
    res.sendStatus(200).send('Note deleted');
};