import { Router } from "express";
import { MOODS, SEASONS } from "../db.js";

const router = Router();

// GET /api/moods
router.get("/", (req, res) => {
  res.json({ moods: MOODS, seasons: SEASONS });
});

export default router;
