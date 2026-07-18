import { Link } from "react-router-dom";
import SeasonBadge from "./SeasonBadge.jsx";

export default function DestinationCard({ destination }) {
  return (
    <Link
      to={`/destination/${destination.id}`}
      className="postcard shadow-postcard p-5 flex flex-col gap-3 h-full"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="eyebrow text-ink/50 mb-1">{destination.state}</p>
          <h3 className="font-display text-xl font-semibold leading-snug">
            {destination.name}
          </h3>
        </div>
        {destination.hiddenGem && (
          <span className="eyebrow bg-rose text-mist px-2 py-1 rounded-full whitespace-nowrap">
            Hidden gem
          </span>
        )}
      </div>

      <p className="text-sm text-ink/70 italic font-display">"{destination.tagline}"</p>

      <p className="text-sm text-ink/70 leading-relaxed line-clamp-3">
        {destination.description}
      </p>

      <div className="mt-auto pt-3 flex items-center justify-between border-t border-dashed border-ink/15">
        <SeasonBadge season={destination.season} />
        <span className="eyebrow text-ink/50">₹{destination.budgetPerDay}/day approx.</span>
      </div>
    </Link>
  );
}

