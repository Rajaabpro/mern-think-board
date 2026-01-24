import express from 'express';
import dotenv from 'dotenv';
import notesRoutes from './routes/notesRoutes.js';
import connectDB from './config/db.js';

const app = express();
dotenv.config();
const port = process.env.PORT || 3000;
connectDB();

app.use('/api/notes', notesRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

