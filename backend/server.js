import express from 'express';
import dotenv from 'dotenv';
import { connectDb } from './config/db.js';
import turfsRoute from './routes/turfsRoute.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());

app.use("/api/turfs", turfsRoute)

app.listen(PORT, () => {
    connectDb();
    console.log('Server running at http:://localhost:'+PORT);
});

// 