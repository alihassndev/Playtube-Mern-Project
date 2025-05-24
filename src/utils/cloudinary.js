// src/utils/cloudinary.js
import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

// load env only if needed here (not recommended if loaded in index.js already)
import dotenv from "dotenv";
dotenv.config();

// console.log("Cloudinary ENV Values:");
// console.log("CLOUD_NAME:", process.env.CLOUDINARY_CLOUD_NAME);
// console.log("API_KEY:", process.env.CLOUDINARY_API_KEY);
// console.log("API_SECRET:", process.env.CLOUDINARY_API_SECRET);

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (filePath) => {
  try {
    if (!filePath) return null;
    const response = await cloudinary.uploader.upload(filePath, {
      resource_type: "auto",
    });
    if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
    return response;
  } catch (error) {
    console.error("❌ Cloudinary upload error:", error);
    return null;
  }
};

export { uploadOnCloudinary };
