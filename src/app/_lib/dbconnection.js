import mongoose from "mongoose";

export function dbConnection() {
  mongoose
    .connect(
      `mongodb+srv://amira:${process.env.MONGO_SECRET}@cluster0.zloaxda.mongodb.net/todo`
    )
    .then(() => {
      console.log("Connected to db");
    })
    .catch((err) => {
      console.log(`error connect to db ${err}`);
    });
}
