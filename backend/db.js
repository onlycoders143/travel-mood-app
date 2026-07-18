// db.js — plain JSON-file storage. No native/C++ build step required (unlike
// sqlite drivers), so this installs and runs the same on Windows, Mac, and Linux.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { MOODS, SEASONS, DESTINATIONS, POSTS } from "./seed-data.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DB_FILE = path.join(__dirname, "moodtrail-data.json");

function load() {
  if (!fs.existsSync(DB_FILE)) {
    const initial = { destinations: DESTINATIONS, posts: POSTS };
    fs.writeFileSync(DB_FILE, JSON.stringify(initial, null, 2));
    return initial;
  }
  try {
    return JSON.parse(fs.readFileSync(DB_FILE, "utf-8"));
  } catch {
    // Corrupt or empty file — reseed rather than crash.
    const initial = { destinations: DESTINATIONS, posts: POSTS };
    fs.writeFileSync(DB_FILE, JSON.stringify(initial, null, 2));
    return initial;
  }
}

const db = load();

export function persist() {
  fs.writeFileSync(DB_FILE, JSON.stringify(db, null, 2));
}

export { MOODS, SEASONS };
export default db;
