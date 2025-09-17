import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import authRoutes from './routes/auth.route.js';
import taskRoutes from './routes/task.route.js';


// dotenv

dotenv.config()
const app = express();

const PORT = process.env.PORT || 3000

app.use(express.json());

// api route for auth
app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);

// testing api using postman

app.get('/', (req, res) => {
    res.send('Hello from Node');
})



app.listen(PORT, () => {
    connectDB();
    console.log(`Server started running on port: ${PORT}`);
})