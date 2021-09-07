import express from "express";
import dotenv, { config } from "dotenv";
import mongoose from "mongoose";

dotenv.config();
const port = process.env.PORT;
const app = express();
const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connection successfuly"));
app.listen(port, () => {
  console.log(`Appication is running on port : ${port}`);
});
