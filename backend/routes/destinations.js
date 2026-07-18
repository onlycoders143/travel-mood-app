import { Router } from "express";
import db from "../db.js";

const router = Router();

// GET /api/destinations?mood=chill&season=Winter&hiddenGem=true
router.get("/", (req, res) => {
  const { mood, season, hiddenGem } = req.query;
  let rows = db.destinations;

  if (mood) rows = rows.filter((d) => d.moods.includes(mood));
  if (season) rows = rows.filter((d) => d.season.toLowerCase() === season.toLowerCase());
  if (hiddenGem === "true") rows = rows.filter((d) => d.hiddenGem);

  res.json({ count: rows.length, destinations: rows });
});

// GET /api/destinations/:id
router.get("/:id", (req, res) => {
  const destination = db.destinations.find((d) => d.id === req.params.id);
  if (!destination) return res.status(404).json({ error: "Destination not found" });
  res.json({ destination });
});

export default router;

