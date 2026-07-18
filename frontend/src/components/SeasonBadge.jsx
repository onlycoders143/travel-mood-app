const SEASON_COLORS = {
  Winter: { bg: "#7C93C7", fg: "#101B2A" },
  Summer: { bg: "#F2A93B", fg: "#101B2A" },
  Monsoon: { bg: "#6FA98B", fg: "#101B2A" },
  "Post-Monsoon": { bg: "#C77CBB", fg: "#101B2A" },
};

export default function SeasonBadge({ season }) {
  const c = SEASON_COLORS[season] || { bg: "#26384F", fg: "#EAF0F5" };
  return (
    <span
      className="eyebrow inline-flex items-center px-2.5 py-1 rounded-full font-semibold"
      style={{ background: c.bg, color: c.fg }}
    >
      {season}
    </span>
  );
}
