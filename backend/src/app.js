import express from "express";
import { connectDb } from "./config/dbConfig.js";
import { authRouter as authRoutes } from "./routes/authRoutes.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 5000;

connectDb();

app.get("/", (req, res) => {
   res.status(200).json({ message: "You will be success! " });
   console.log("Get success!");
});

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
   console.log(`App is listening on port ${PORT}`);
});
