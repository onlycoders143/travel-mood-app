import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../api.js";
import PostCard from "../components/PostCard.jsx";

export default function Community() {
  const [posts, setPosts] = useState([]);
  const [sort, setSort] = useState("new");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    api
      .getPosts(sort)
      .then(({ posts }) => setPosts(posts))
      .catch(() => setError("Couldn't reach the backend. Is it running on port 4000?"))
      .finally(() => setLoading(false));
  }, [sort]);

  const upvote = async (postId) => {
    setPosts((prev) =>
      prev.map((p) => (p.id === postId ? { ...p, upvotes: p.upvotes + 1 } : p))
    );
    try {
      await api.upvotePost(postId);
    } catch {
      /* optimistic already applied */
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-5 sm:px-8 pt-12 pb-24">
      <div className="flex items-end justify-between flex-wrap gap-3 mb-6">
        <div>
          <p className="eyebrow text-marigold mb-2">the hidden-gem board</p>
          <h1 className="font-display text-3xl font-semibold text-mist">Community</h1>
          <p className="text-mist/50 text-sm mt-1">
            Been somewhere quiet, unlisted, or just genuinely good? Post it here.
          </p>
        </div>
        <Link
          to="/community/new"
          className="eyebrow px-4 py-2 rounded-full bg-rose text-mist hover:brightness-110 transition"
        >
          + share a spot
        </Link>
      </div>

      <div className="flex gap-2 mb-6">
        {[
          { id: "new", label: "New" },
          { id: "top", label: "Top" },
        ].map((s) => (
          <button
            key={s.id}
            onClick={() => setSort(s.id)}
            className={`eyebrow px-3 py-1.5 rounded-full border transition-colors ${
              sort === s.id
                ? "bg-marigold border-marigold text-ink"
                : "border-ink-line text-mist/60 hover:text-mist"
            }`}
          >
            {s.label}
          </button>
        ))}
      </div>

      {error && <p className="text-rose text-sm">{error}</p>}
      {!error && loading && <p className="eyebrow text-mist/40">loading feed…</p>}

      <div className="flex flex-col gap-3">
        {!loading && posts.map((p) => <PostCard key={p.id} post={p} onUpvote={upvote} />)}
      </div>
    </div>
  );
}
