import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

export const connectDB = async () => {
  try {
    const connection = await mongoose.connect(
      `${process.env.DATABASE_URL}/${DB_NAME}`
    );
    console.log(`DATABASE Connected ! HOST : ${connection.connection.host}`);
  } catch (error) {
    console.log("DATABASE Connection error :", error);
    process.exit(1);
    // throw error;
  }
};
