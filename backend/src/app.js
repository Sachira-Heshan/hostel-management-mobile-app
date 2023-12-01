import express from "express";
import { connectDb } from "./config/dbConfig.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 5000;

connectDb();

app.get("/", (req, res) => {
   console.log("Get success!");
});

app.listen(PORT, () => {
   console.log(`App is listening on port ${PORT}`);
});
