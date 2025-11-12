// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";
// import connectDB from "./config/db.js";
// import authRoutes from "./routes/authRoutes.js";
// import noteRoutes from "./routes/noteRoutes.js";

// dotenv.config();
// connectDB();

// const app = express();
// app.use(cors());
// app.use(express.json());

// app.use("/auth", authRoutes);
// app.use("/notes", noteRoutes);

// app.listen(process.env.PORT, () =>
//   console.log(`Server running on port ${process.env.PORT} ✅`)
// );

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

app.use("/auth", authRoutes);
app.use("/notes", noteRoutes);

app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT} ✅`)
);