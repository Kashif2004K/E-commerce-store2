import express from "express";
import cors from "cors";
import { connectDB } from "./config/connectdb.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
app.use(cors());

import router from "./routes/product.route.js";

app.use(express.json());

app.use("/api/products", router);

app.listen(port, () => {
  connectDB();
  console.log(`App is running on port ${port}`);
});
