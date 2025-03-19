import express from 'express';
import dotenv from 'dotenv';
import path from "path";
import { connectDb } from './config/db.js';
import turfsRoute from './routes/turfsRoute.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();
app.use(express.json());

app.use("/api/turfs", turfsRoute)

console.log("Before if condition")
console.log("NODE_ENV value:", process.env.NODE_ENV);
console.log("NODE_ENV type:", typeof process.env.NODE_ENV);

if (process.env.NODE_ENV.trim() === "production") {
    const staticPath = path.join(__dirname, "/frontend/dist");
    console.log("Serving static files from:", staticPath);
    app.use(express.static(staticPath));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
    });
}


app.listen(PORT, () => {
    connectDb();
    console.log('Server running at http://localhost:'+PORT);
    console.log("NODE_ENV:", process.env.NODE_ENV)
});

// 