import { useEffect, useState } from "react";
import { api } from "../api.js";
import MoodCard from "../components/MoodCard.jsx";
import DestinationCard from "../components/DestinationCard.jsx";

export default function Home() {
  const [moods, setMoods] = useState([]);
  const [seasons, setSeasons] = useState([]);
  const [activeMood, setActiveMood] = useState(null);
  const [activeSeason, setActiveSeason] = useState(null);
  const [hiddenOnly, setHiddenOnly] = useState(false);
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    api
      .getMoods()
      .then(({ moods, seasons }) => {
        setMoods(moods);
        setSeasons(seasons);
      })
      .catch(() => setError("Couldn't reach the backend. Is it running on port 4000?"));
  }, []);

  useEffect(() => {
    setLoading(true);
    const params = {};
    if (activeMood) params.mood = activeMood;
    if (activeSeason) params.season = activeSeason;
    if (hiddenOnly) params.hiddenGem = "true";

    api
      .getDestinations(params)
      .then(({ destinations }) => {
        setDestinations(destinations);
        setError(null);
      })
      .catch(() => setError("Couldn't reach the backend. Is it running on port 4000?"))
      .finally(() => setLoading(false));
  }, [activeMood, activeSeason, hiddenOnly]);

  return (
    <div>
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-5 sm:px-8 pt-14 pb-10">
        <p className="eyebrow text-marigold mb-3">real-time, mood-first travel discovery</p>
        <h1 className="font-display text-4xl sm:text-5xl font-semibold leading-[1.1] max-w-2xl text-mist">
          Where do you feel like going,{" "}
          <span className="italic text-marigold">right now?</span>
        </h1>
        <p className="text-mist/60 mt-4 max-w-xl leading-relaxed">
          Pick a mood like you'd pick a postcard. We'll match it against the season and
          show you places real travellers have actually vouched for — hidden gems included.
        </p>
      </section>

      {/* Mood stamp picker — signature element */}
      <section className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex gap-4 overflow-x-auto mood-scroll pb-4 pt-1">
          {moods.map((mood) => (
            <MoodCard
              key={mood.id}
              mood={mood}
              active={activeMood === mood.id}
              onClick={() => setActiveMood(activeMood === mood.id ? null : mood.id)}
            />
          ))}
        </div>
      </section>

      {/* Filters */}
      <section className="max-w-6xl mx-auto px-5 sm:px-8 mt-6 flex flex-wrap items-center gap-2">
        <span className="eyebrow text-mist/40 mr-1">season</span>
        {seasons.map((s) => (
          <button
            key={s}
            onClick={() => setActiveSeason(activeSeason === s ? null : s)}
            className={`eyebrow px-3 py-1.5 rounded-full border transition-colors ${
              activeSeason === s
                ? "bg-periwinkle border-periwinkle text-ink"
                : "border-ink-line text-mist/60 hover:text-mist"
            }`}
          >
            {s}
          </button>
        ))}
        <button
          onClick={() => setHiddenOnly((v) => !v)}
          className={`eyebrow px-3 py-1.5 rounded-full border ml-2 transition-colors ${
            hiddenOnly
              ? "bg-rose border-rose text-mist"
              : "border-ink-line text-mist/60 hover:text-mist"
          }`}
        >
          🔎 hidden gems only
        </button>
        {(activeMood || activeSeason || hiddenOnly) && (
          <button
            onClick={() => {
              setActiveMood(null);
              setActiveSeason(null);
              setHiddenOnly(false);
            }}
            className="eyebrow px-3 py-1.5 text-mist/40 hover:text-mist"
          >
            clear filters ✕
          </button>
        )}
      </section>

      {/* Results */}
      <section className="max-w-6xl mx-auto px-5 sm:px-8 mt-8 pb-20">
        {error && (
          <p className="text-rose bg-ink-soft border border-rose/40 rounded-lg px-4 py-3 text-sm">
            {error}
          </p>
        )}

        {!error && loading && (
          <p className="text-mist/40 eyebrow py-10 text-center">loading destinations…</p>
        )}

        {!error && !loading && destinations.length === 0 && (
          <div className="text-center py-16">
            <p className="font-display text-xl text-mist/70">Nothing matches that combo yet.</p>
            <p className="text-mist/40 text-sm mt-1">Try a different mood or season.</p>
          </div>
        )}

        {!error && !loading && destinations.length > 0 && (
          <>
            <p className="eyebrow text-mist/40 mb-4">{destinations.length} places match your mood</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {destinations.map((d) => (
                <DestinationCard key={d.id} destination={d} />
              ))}
            </div>
          </>
        )}
      </section>
    </div>
  );
}
