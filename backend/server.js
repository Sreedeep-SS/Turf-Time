import express from 'express';
import dotenv from 'dotenv';
import { connectDb } from './config/db.js';
import turfsRoute from './routes/turfsRoute.js';

dotenv.config();

const app = express();
app.use(express.json());

app.use("/api/turfs", turfsRoute)

app.listen(5000, () => {
    connectDb();
    console.log('Server running on port 5000!');
});

// 