import express from "express";
import dotenv from "dotenv";

// dotenv

dotenv.config()
const app = express();

const PORT = process.env.PORT || 3000


app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server started running on port: ${PORT}`);
})