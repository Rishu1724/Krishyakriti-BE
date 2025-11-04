import express from "express";
import { getAIPrediction } from "../services/aiService.js";

const router = express.Router();

router.post("/predict", async (req, res) => {
  try {
    const result = await getAIPrediction(req.body);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
