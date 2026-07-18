import express from "express";
import cors from "cors";
import moodsRouter from "./routes/moods.js";
import destinationsRouter from "./routes/destinations.js";
import postsRouter from "./routes/posts.js";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.get("/api/health", (req, res) => res.json({ ok: true, service: "moodtrail-backend" }));

app.use("/api/moods", moodsRouter);
app.use("/api/destinations", destinationsRouter);
app.use("/api/posts", postsRouter);

app.use((req, res) => res.status(404).json({ error: "Route not found" }));

app.listen(PORT, () => {
  console.log(`MoodTrail backend running on http://localhost:${PORT}`);
});
