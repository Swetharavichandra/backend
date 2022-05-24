import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import router from "./components/user-routes";


const app = express();
app.use(cors());
app.use(express.json());
app.use("/user", router);


let port = process.env.PORT || 4000;
var url =
  process.env.MONGODB_URI ||
  "mongodb+srv://swetha:Swez161119@cluster0.m6uuy.mongodb.net/airbnb?retryWrites=true&w=majority";

mongoose
  .connect(url)
  .then(() => {
    app.listen(port);
  })
  .then(() => {
    console.log("connected");
  })
  .catch((err) => {
    console.log(err);
  });
