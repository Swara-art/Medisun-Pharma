import express from "express";
import navbar from "./navbar/navbar.js";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import Medicine from "./model/meds.js";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();
const app = express();
const port = process.env.PORT;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
connectDB();

app.use("/", navbar);
app.use("/images", express.static("frontend/public/images"));
app.use(express.static(path.join(__dirname, "../frontend/build")));

// homepage
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/build", "index.html"));
});

app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});
