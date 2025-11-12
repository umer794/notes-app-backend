import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import noteRoutes from "./routes/noteRoutes.js";

dotenv.config();
connectDB();

const app = express();

// 🔥 YE EXACT CORS CODE DAALO 🔥
app.use(cors({
  origin: [
    "http://localhost:5173",
    "http://localhost:3000",
    "https://notes-app-frontend-vp55.vercel.app",
    "https://notes-app-frontend-gc1p.vercel.app"
  ],
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/notes", noteRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Backend is working! ✅" });
});

app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT} ✅`)
);