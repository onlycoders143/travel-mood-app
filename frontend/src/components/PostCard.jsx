import { Link } from "react-router-dom";

function timeAgo(iso) {
  const diff = Date.now() - new Date(iso).getTime();
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  if (days < 1) return "today";
  if (days === 1) return "1 day ago";
  if (days < 30) return `${days} days ago`;
  return `${Math.floor(days / 30)} mo ago`;
}

export default function PostCard({ post, onUpvote }) {
  return (
    <div className="bg-ink-soft border border-ink-line rounded-xl p-5 flex gap-4">
      <button
        onClick={() => onUpvote(post.id)}
        className="shrink-0 w-12 h-16 rounded-lg bg-ink border border-ink-line flex flex-col items-center justify-center gap-1 hover:border-marigold group transition-colors"
        aria-label="Upvote this post"
      >
        <span className="text-marigold text-lg group-hover:-translate-y-0.5 transition-transform">▲</span>
        <span className="text-mist text-sm font-semibold font-mono">{post.upvotes}</span>
      </button>

      <div className="min-w-0">
        <p className="eyebrow text-mist/40 mb-1.5">
          u/{post.author} · {timeAgo(post.createdAt)}
        </p>
        <Link to={`/community/post/${post.id}`}>
          <h3 className="font-display text-lg font-semibold text-mist leading-snug hover:text-marigold transition-colors">
            {post.title}
          </h3>
        </Link>
        <p className="text-sm text-mist/65 mt-1.5 leading-relaxed line-clamp-2">{post.body}</p>
        {post.destinationId && (
          <Link
            to={`/destination/${post.destinationId}`}
            className="inline-block mt-2 eyebrow text-sage hover:text-mist transition-colors"
          >
            📍 view destination
          </Link>
        )}
      </div>
    </div>
  );
}
