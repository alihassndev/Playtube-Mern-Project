import dotenv from "dotenv";
dotenv.config();

import conenctDB from "./db/index.js";
import { app } from "./app.js";

conenctDB()
  .then(() => {
    app.on("error", (error) => {
      console.error("Server Error: ", error);
      throw error;
    });

    app.listen(process.env.PORT || 3000, () => {
      console.log(`Server is listening at port: ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.error("DB connection error !!", err);
  });

// =====================================

// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
// import express from "express";
// const app = express();

// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);

//     app.on("error", (error) => {
//       console.log(error);
//       throw error;
//     });

//     app.listen(process.env.PORT, () => {
//       console.log(`Server is listening on port ${process.env.PORT}`);
//     });
//   } catch (error) {
//     console.error(error);
//     throw error;
//   }
// })();
