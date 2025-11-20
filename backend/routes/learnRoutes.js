import express from "express";
import {
  getMulticropping,
  getAgroforestry,
  getMarketInfo,
} from "../controllers/learnController.js";

const router = express.Router();

// These 3 match top cards on Learn.jsx
router.get("/multicropping", getMulticropping);
router.get("/agroforestry", getAgroforestry);
router.get("/market", getMarketInfo);

export default router;
