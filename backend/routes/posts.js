import { Router } from "express";
import db, { persist } from "../db.js";

const router = Router();

function randomId(prefix) {
  return `${prefix}_${Math.random().toString(36).slice(2, 10)}`;
}

// GET /api/posts?sort=new|top — feed, without the full comment bodies (keeps list light)
router.get("/", (req, res) => {
  const posts = [...db.posts]
    .sort((a, b) =>
      req.query.sort === "top"
        ? b.upvotes - a.upvotes
        : new Date(b.createdAt) - new Date(a.createdAt)
    )
    .map(({ comments, ...rest }) => ({ ...rest, commentCount: comments.length }));
  res.json({ posts });
});

// GET /api/posts/:id — single post with its comments
router.get("/:id", (req, res) => {
  const post = db.posts.find((p) => p.id === req.params.id);
  if (!post) return res.status(404).json({ error: "Post not found" });
  const { comments, ...rest } = post;
  res.json({ post: rest, comments });
});

// POST /api/posts — create a new hidden-gem / experience post
router.post("/", (req, res) => {
  const { author, destinationId, title, body } = req.body;
  if (!author || !title || !body) {
    return res.status(400).json({ error: "author, title and body are required" });
  }
  const post = {
    id: randomId("p"),
    author,
    destinationId: destinationId || null,
    title,
    body,
    upvotes: 0,
    createdAt: new Date().toISOString(),
    comments: [],
  };
  db.posts.unshift(post);
  persist();
  const { comments, ...rest } = post;
  res.status(201).json({ post: rest });
});

// POST /api/posts/:id/upvote
router.post("/:id/upvote", (req, res) => {
  const post = db.posts.find((p) => p.id === req.params.id);
  if (!post) return res.status(404).json({ error: "Post not found" });
  post.upvotes += 1;
  persist();
  const { comments, ...rest } = post;
  res.json({ post: rest });
});

// POST /api/posts/:id/comments
router.post("/:id/comments", (req, res) => {
  const { author, body } = req.body;
  if (!author || !body) return res.status(400).json({ error: "author and body are required" });
  const post = db.posts.find((p) => p.id === req.params.id);
  if (!post) return res.status(404).json({ error: "Post not found" });

  const comment = {
    id: randomId("c"),
    author,
    body,
    createdAt: new Date().toISOString(),
  };
  post.comments.push(comment);
  persist();
  res.status(201).json({ comment });
});

export default router;
