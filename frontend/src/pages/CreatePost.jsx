import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../api.js";

export default function CreatePost() {
  const navigate = useNavigate();
  const [destinations, setDestinations] = useState([]);
  const [form, setForm] = useState({ author: "", title: "", body: "", destinationId: "" });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    api.getDestinations().then(({ destinations }) => setDestinations(destinations));
  }, []);

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    if (!form.author.trim() || !form.title.trim() || !form.body.trim()) {
      setError("Name, title and story are all required.");
      return;
    }
    setSubmitting(true);
    setError(null);
    try {
      const { post } = await api.createPost({
        ...form,
        destinationId: form.destinationId || null,
      });
      navigate(`/community/post/${post.id}`);
    } catch {
      setError("Something went wrong posting this. Try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass =
    "w-full bg-ink border border-ink-line rounded-lg px-3.5 py-2.5 text-sm text-mist placeholder:text-mist/30 focus:border-marigold outline-none";

  return (
    <div className="max-w-xl mx-auto px-5 sm:px-8 pt-12 pb-24">
      <p className="eyebrow text-marigold mb-2">new post</p>
      <h1 className="font-display text-3xl font-semibold text-mist mb-1">Share a spot</h1>
      <p className="text-mist/50 text-sm mb-8">
        Found somewhere quiet, unlisted, or worth the detour? Tell it like you'd tell a friend.
      </p>

      <form onSubmit={submit} className="flex flex-col gap-4">
        <div>
          <label className="eyebrow text-mist/40 block mb-1.5">your name</label>
          <input value={form.author} onChange={update("author")} className={inputClass} placeholder="e.g. wanderlust_riya" />
        </div>

        <div>
          <label className="eyebrow text-mist/40 block mb-1.5">link a destination (optional)</label>
          <select value={form.destinationId} onChange={update("destinationId")} className={inputClass}>
            <option value="">— none —</option>
            {destinations.map((d) => (
              <option key={d.id} value={d.id}>
                {d.name}, {d.state}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="eyebrow text-mist/40 block mb-1.5">title</label>
          <input
            value={form.title}
            onChange={update("title")}
            className={inputClass}
            placeholder="e.g. This beach near Gokarna isn't on Maps"
          />
        </div>

        <div>
          <label className="eyebrow text-mist/40 block mb-1.5">the story</label>
          <textarea
            value={form.body}
            onChange={update("body")}
            rows={6}
            className={`${inputClass} resize-none`}
            placeholder="How you found it, when to go, what made it worth it…"
          />
        </div>

        {error && <p className="text-rose text-sm">{error}</p>}

        <button
          type="submit"
          disabled={submitting}
          className="self-start eyebrow px-5 py-2.5 rounded-full bg-marigold text-ink font-semibold hover:brightness-110 transition disabled:opacity-50"
        >
          {submitting ? "posting…" : "post to community"}
        </button>
      </form>
    </div>
  );
}
