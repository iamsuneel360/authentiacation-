import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cookieParser from "cookie-parser";
const app = express();
const port = process.env.PORT || 8000;
import userRoutes from "./routes/userRoutes.js";
import connectDB from "./db/db.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/api/auth", userRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
