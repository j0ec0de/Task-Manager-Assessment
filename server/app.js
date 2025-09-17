import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

// dotenv

dotenv.config()
const app = express();

const PORT = process.env.PORT || 3000

app.use(express.json());

// testing api using postman

app.get('/', (req, res) => {
    res.send('Hello from Node');
})



app.listen(PORT, () => {
    connectDB();
    console.log(`Server started running on port: ${PORT}`);
})