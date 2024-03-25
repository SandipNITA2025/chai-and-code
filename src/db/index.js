import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

export const connectDB = async () => {
  try {
    const connection = await mongoose.connect(
      `${process.env.DATABASE_URL}/${DB_NAME}`
    );
    console.log(`DATABASE connected ! HOST : ${connection.connection.host}`);
  } catch (error) {
    console.log("DATABASE connection error :", error);
    process.exit(1);
    // throw error;
  }
};
