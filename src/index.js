import express from "express";
import dotenv, { config } from "dotenv";
import mongoose from "mongoose";

import courseRoute from "./routes/courseRoutes";

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

app.set("view engine", "pug");
app.set("views", "./views");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/courses", courseRoute);
app.listen(port, () => {
  console.log(`Appication is running on port : ${port}`);
});
