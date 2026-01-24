import express from 'express';
const app = express();


app.get('/api/notes', (req, res) => {
    res.send('Notes') ;
});

app.post('/api/notes', (req, res) => {
    res.sendStatus(201).json({ message: 'Note created' });
});
  
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});