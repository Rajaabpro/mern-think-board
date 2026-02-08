import express from 'express';
import { getNotes, getNoteById, createNote, updateNote, deleteNote } from '../controllers/notesController.js';

const router = express.Router();

router.get('/getNotes', getNotes);
router.get('/getNoteById/:id', getNoteById);
router.post('/createNote', createNote);
router.put('/updateNote/:id', updateNote);
router.delete('/deleteNote/:id', deleteNote);
export default router;