import express from 'express';
const app = express();


app.get('/api/notes', (req, res) => {
    res.json({ notes: [] });
});

app.post('/api/notes', (req, res) => {
    res.sendStatus(201).json({ message: 'Note created' });
});
  
app.put('/api/notes/:id', (req, res) => {
    res.sendStatus(200).json({ message: 'Note updated' });
});

app.delete('/api/notes/:id', (req, res) => {
    res.sendStatus(200).json({ message: 'Note deleted' });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});