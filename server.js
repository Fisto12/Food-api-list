import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import foodRouter from './routes/food.js'

const app = express();

// app.use(morgan("dev"));
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/food',foodRouter)


const MONGODB_URL = "mongodb+srv://FoodApi:12345@fisi.ivom7.mongodb.net/FoodApi";
const port = 5000;

mongoose
  .connect(MONGODB_URL)
  .then(() => {
    app.listen(port, () => console.log(`Server running on port ${port}`));
  })
  .catch((error) => console.log(`${error} did not connect`));
