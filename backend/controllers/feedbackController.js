import Feedback from "../models/Feedback.js";
import fs from "fs";
import path from "path";

const fallbackDir = path.resolve("./data");
const fallbackFile = path.join(fallbackDir, "feedback_local.json");

export const submitFeedback = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message)
      return res.status(400).json({ error: "All fields required" });

    // Try saving to MongoDB model first
    try {
      const newFeedback = await Feedback.create({ name, email, message });
      return res.status(201).json({ message: "Feedback submitted successfully", data: newFeedback });
    } catch (dbErr) {
      // If DB is not available, fallback to local file store
      console.warn("DB unavailable, falling back to local storage:", dbErr.message);

      if (!fs.existsSync(fallbackDir)) fs.mkdirSync(fallbackDir, { recursive: true });

      const entry = { id: Date.now(), name, email, message, createdAt: new Date().toISOString() };

      let existing = [];
      try {
        if (fs.existsSync(fallbackFile)) {
          existing = JSON.parse(fs.readFileSync(fallbackFile, "utf8") || "[]");
        }
      } catch (readErr) {
        console.warn("Could not read fallback feedback file:", readErr.message);
      }

      existing.push(entry);
      try {
        fs.writeFileSync(fallbackFile, JSON.stringify(existing, null, 2));
      } catch (writeErr) {
        console.error("Failed to write feedback to local file:", writeErr.message);
        return res.status(500).json({ error: "Failed to save feedback" });
      }

      return res.status(201).json({ message: "Feedback saved locally (DB unavailable)", data: entry });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};
