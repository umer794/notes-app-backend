import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import noteRoutes from "./routes/noteRoutes.js";

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// Routes with /api prefix
app.use("/api/auth", authRoutes);
app.use("/api/notes", noteRoutes);

// Root route for testing
app.get("/", (req, res) => {
  res.json({ message: "Backend is working! ✅" });
});

app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT} ✅`)
);