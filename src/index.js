import "dotenv/config";
import { connectDB } from "./db/index.js";
import { app } from "./app.js";

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8080, () => {
      console.log(`Server running on port : ${process.env.PORT || 8080}`);
    });
  })
  .catch((err) => {
    console.log("MONGODB connection failed!", err);
  });
