import express from "express";
import mongoose from "mongoose";
import {
  getMulticropping,
  getAgroforestry,
  getMarketInfo,
} from "../../controllers/learnController.js";  // FIXED PATH
import Resource from "../../models/Resource.js";    // FIXED PATH

const router = express.Router();

/**
 * ------------------------------------------------------------
 *  GET /api/learn
 *  Returns list of available learning resources
 *  Uses DB if available, otherwise static fallback
 * ------------------------------------------------------------
 */
router.get("/", async (req, res) => {
  try {
    if (mongoose.connection.readyState === 1) {
      const items = await Resource.find(
        {},
        { title: 1, slug: 1, summary: 1 }
      )
        .sort({ createdAt: -1 })
        .lean();

      return res.json(items);
    }

    // Static Fallback
    return res.json([
      {
        slug: "multicropping",
        title: "Multicropping",
        summary: "Growing two or more crops in the same field.",
      },
      {
        slug: "agroforestry",
        title: "Agroforestry",
        summary: "Integrating trees, plants and crops for sustainability.",
      },
      {
        slug: "market",
        title: "Market Information",
        summary: "Daily crop prices and agricultural market insights.",
      },
    ]);
  } catch (err) {
    console.error("Error fetching learn list:", err);
    res.status(500).json({ error: "Server error" });
  }
});

/**
 * ------------------------------------------------------------
 *  GET /api/learn/:slug
 *  Dynamic content fetch:
 *   1. Try DB
 *   2. Fallback to static controllers
 * ------------------------------------------------------------
 */
router.get("/:slug", async (req, res) => {
  const { slug } = req.params;

  try {
    // If DB connected → try DB first
    if (mongoose.connection.readyState === 1) {
      const item = await Resource.findOne({ slug }).lean();
      if (item) return res.json(item);
    }

    // Static fallback — match known resources
    switch (slug) {
      case "multicropping":
        return getMulticropping(req, res);

      case "agroforestry":
        return getAgroforestry(req, res);

      case "market":
        return getMarketInfo(req, res);

      default:
        return res.status(404).json({ message: "Not found" });
    }
  } catch (err) {
    console.error("Error fetching slug:", err);
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
