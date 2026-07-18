import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { api } from "../api.js";

export default function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [error, setError] = useState(null);
  const [author, setAuthor] = useState("");
  const [body, setBody] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const load = () => {
    api
      .getPost(id)
      .then(({ post, comments }) => {
        setPost(post);
        setComments(comments);
      })
      .catch(() => setError("Post not found."));
  };

  useEffect(load, [id]);

  const upvote = async () => {
    setPost((p) => ({ ...p, upvotes: p.upvotes + 1 }));
    try {
      await api.upvotePost(id);
    } catch {
      /* optimistic */
    }
  };

  const submitComment = async (e) => {
    e.preventDefault();
    if (!author.trim() || !body.trim()) return;
    setSubmitting(true);
    try {
      await api.addComment(id, { author, body });
      setBody("");
      load();
    } catch {
      setError("Couldn't post your comment. Try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (error) return <p className="max-w-2xl mx-auto px-5 pt-16 text-rose">{error}</p>;
  if (!post) return <p className="max-w-2xl mx-auto px-5 pt-16 text-mist/40 eyebrow">loading…</p>;

  return (
    <div className="max-w-2xl mx-auto px-5 sm:px-8 pt-12 pb-24">
      <Link to="/community" className="eyebrow text-mist/40 hover:text-mist">
        ← back to community
      </Link>

      <div className="mt-6 bg-ink-soft border border-ink-line rounded-xl p-6 flex gap-4">
        <button
          onClick={upvote}
          className="shrink-0 w-12 h-16 rounded-lg bg-ink border border-ink-line flex flex-col items-center justify-center gap-1 hover:border-marigold group"
        >
          <span className="text-marigold text-lg group-hover:-translate-y-0.5 transition-transform">▲</span>
          <span className="text-mist text-sm font-semibold font-mono">{post.upvotes}</span>
        </button>
        <div className="min-w-0">
          <p className="eyebrow text-mist/40 mb-1.5">u/{post.author}</p>
          <h1 className="font-display text-2xl font-semibold text-mist leading-snug">
            {post.title}
          </h1>
          <p className="text-mist/70 mt-3 leading-relaxed whitespace-pre-line">{post.body}</p>
          {post.destinationId && (
            <Link
              to={`/destination/${post.destinationId}`}
              className="inline-block mt-3 eyebrow text-sage hover:text-mist"
            >
              📍 view destination
            </Link>
          )}
        </div>
      </div>

      <div className="mt-8">
        <h2 className="font-display text-lg font-semibold text-mist mb-3">
          {comments.length} {comments.length === 1 ? "comment" : "comments"}
        </h2>

        <form onSubmit={submitComment} className="flex flex-col gap-2 mb-6">
          <input
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="your name"
            className="bg-ink border border-ink-line rounded-lg px-3 py-2 text-sm text-mist placeholder:text-mist/30 focus:border-marigold outline-none"
          />
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="add to the thread…"
            rows={2}
            className="bg-ink border border-ink-line rounded-lg px-3 py-2 text-sm text-mist placeholder:text-mist/30 focus:border-marigold outline-none resize-none"
          />
          <button
            type="submit"
            disabled={submitting}
            className="self-start eyebrow px-4 py-2 rounded-full bg-marigold text-ink hover:brightness-110 transition disabled:opacity-50"
          >
            {submitting ? "posting…" : "post comment"}
          </button>
        </form>

        <div className="flex flex-col gap-3">
          {comments.map((c) => (
            <div key={c.id} className="border-l-2 border-ink-line pl-4">
              <p className="eyebrow text-mist/40 mb-1">u/{c.author}</p>
              <p className="text-mist/75 text-sm leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
