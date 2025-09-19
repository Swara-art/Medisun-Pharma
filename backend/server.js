import express from "express";
import navbar from "./navbar/navbar.js";
import { connectDB } from "./config/db.js"

const app = express();
const PORT = 3000;

connectDB();

app.use("/", navbar);

app.get("/", (req, res) => { // homepage route
  res.send("Hello, World!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

