import express from 'express';

 router = express.Router();
router.get('/', (req, res) => {
    res.sendStatus(200).send('Notes');
});

router.post('/', (req, res) => {
    res.sendStatus(201).send('Note created');
});

router.put('/:id', (req, res) => {
    res.sendStatus(200).send('Note updated');
});

router.delete('/:id', (req, res) => {
    res.sendStatus(200).send('Note deleted');
});
export default router;