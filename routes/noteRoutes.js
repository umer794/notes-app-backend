// import express from "express";
// import Note from "../models/Note.js";
// import { auth } from "../middleware/authMiddleware.js";

// const router = express.Router();

// // Get all notes
// router.get("/", auth, async (req, res) => {
//   const notes = await Note.find({ userId: req.user.id });
//   res.json(notes);
// });

// // Add note
// router.post("/", auth, async (req, res) => {
//   const note = new Note({ userId: req.user.id, ...req.body });
//   await note.save();
//   res.json(note);
// });

// // Edit note
// router.patch("/:id", auth, async (req, res) => {
//   const note = await Note.findOneAndUpdate(
//     { _id: req.params.id, userId: req.user.id },
//     req.body,
//     { new: true }
//   );
//   res.json(note);
// });

// // Delete note
// router.delete("/:id", auth, async (req, res) => {
//   await Note.findOneAndDelete({ _id: req.params.id, userId: req.user.id });
//   res.json({ message: "Note deleted" });
// });

// export default router;


import express from "express";
import Note from "../models/Note.js";
import { auth } from "../middleware/authMiddleware.js";

const router = express.Router();

// Get all notes
router.get("/", auth, async (req, res) => {
  const notes = await Note.find({ userId: req.user.id });
  res.json(notes);
});

// Add note
router.post("/", auth, async (req, res) => {
  const note = new Note({ userId: req.user.id, ...req.body });
  await note.save();
  res.json(note);
});

// Edit note - PATCH
router.patch("/:id", auth, async (req, res) => {
  const note = await Note.findOneAndUpdate(
    { _id: req.params.id, userId: req.user.id },
    req.body,
    { new: true }
  );
  res.json(note);
});

// Edit note - PUT (add this)
router.put("/:id", auth, async (req, res) => {
  try {
    const note = await Note.findOneAndUpdate(
      { _id: req.params.id, userId: req.user.id },
      req.body,
      { new: true }
    );
    if (!note) return res.status(404).json({ message: "Note not found" });
    res.json(note);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete note
router.delete("/:id", auth, async (req, res) => {
  await Note.findOneAndDelete({ _id: req.params.id, userId: req.user.id });
  res.json({ message: "Note deleted" });
});

export default router;