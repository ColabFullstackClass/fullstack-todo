import mongoose from "mongoose";
import config from "./config.js";

async function connectDb(){
    mongoose.connect(config.database.mongoDb.url)
    .then(() => {
      console.log("Connected to MongoDB successfully");
    })
    .catch((error) => {
      console.error("MongoDB connection error:", error);
    });
  }
  
export default connectDb;
