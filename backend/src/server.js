import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import notesRoutes from './routes/notesRoutes.js';
import connectDB from './config/db.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

connectDB();

app.use(cors());
app.use(express.json());

app.use('/api/notes', notesRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

