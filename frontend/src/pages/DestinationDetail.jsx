import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { api } from "../api.js";
import SeasonBadge from "../components/SeasonBadge.jsx";
import PostCard from "../components/PostCard.jsx";

export default function DestinationDetail() {
  const { id } = useParams();
  const [destination, setDestination] = useState(null);
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    api
      .getDestination(id)
      .then(({ destination }) => setDestination(destination))
      .catch(() => setError("Destination not found."));

    api
      .getPosts()
      .then(({ posts }) => setPosts(posts.filter((p) => p.destinationId === id)))
      .catch(() => {});
  }, [id]);

  const upvote = async (postId) => {
    setPosts((prev) => prev.map((p) => (p.id === postId ? { ...p, upvotes: p.upvotes + 1 } : p)));
    try {
      await api.upvotePost(postId);
    } catch {
      /* optimistic update already applied */
    }
  };

  if (error) {
    return <p className="max-w-3xl mx-auto px-5 pt-16 text-rose">{error}</p>;
  }
  if (!destination) {
    return <p className="max-w-3xl mx-auto px-5 pt-16 text-mist/40 eyebrow">loading…</p>;
  }

  return (
    <div className="max-w-3xl mx-auto px-5 sm:px-8 pt-12 pb-24">
      <Link to="/" className="eyebrow text-mist/40 hover:text-mist">← back to discover</Link>

      <div className="postcard shadow-postcard mt-6 p-8">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div>
            <p className="eyebrow text-ink/50 mb-1">{destination.state}</p>
            <h1 className="font-display text-3xl sm:text-4xl font-semibold">{destination.name}</h1>
            <p className="italic font-display text-ink/60 mt-2">"{destination.tagline}"</p>
          </div>
          {destination.hiddenGem && (
            <span className="eyebrow bg-rose text-mist px-3 py-1.5 rounded-full">Hidden gem</span>
          )}
        </div>

        <p className="mt-6 leading-relaxed text-ink/80">{destination.description}</p>

        <div className="mt-6 flex flex-wrap items-center gap-3 pt-5 border-t border-dashed border-ink/15">
          <SeasonBadge season={destination.season} />
          <span className="eyebrow text-ink/50">best months: {destination.bestMonths}</span>
          <span className="eyebrow text-ink/50">≈ ₹{destination.budgetPerDay}/day</span>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {destination.moods.map((m) => (
            <span key={m} className="eyebrow bg-ink/5 px-2.5 py-1 rounded-full text-ink/60">
              #{m}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-10">
        <h2 className="font-display text-xl font-semibold text-mist mb-4">
          Traveller stories from here
        </h2>
        {posts.length === 0 ? (
          <p className="text-mist/40 text-sm">
            No stories yet.{" "}
            <Link to="/community/new" className="text-marigold hover:underline">
              Be the first to share one.
            </Link>
          </p>
        ) : (
          <div className="flex flex-col gap-3">
            {posts.map((p) => (
              <PostCard key={p.id} post={p} onUpvote={upvote} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
