import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const conenctDB = async () => {
  try {
    const dbInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(`MongoDB connected ! DB Host ${dbInstance.connection.host}`);
  } catch (error) {
    console.error("Mongo DB connection Error: ", error);
  }
};

export default conenctDB;
