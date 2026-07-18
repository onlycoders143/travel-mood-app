export default function MoodCard({ mood, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`stamp shrink-0 w-36 h-40 sm:w-40 sm:h-44 flex flex-col items-center justify-center gap-2 p-4 transition-all duration-300 ${
        active ? "scale-105 -translate-y-1" : "opacity-80 hover:opacity-100"
      }`}
      style={{
        background: active ? mood.tint : "#17263A",
        border: `1px solid ${active ? mood.tint : "#26384F"}`,
        boxShadow: active ? `0 14px 30px -10px ${mood.tint}88` : "none",
      }}
    >
      <span className="text-3xl">{mood.emoji}</span>
      <span
        className={`font-display font-semibold text-base leading-tight text-center ${
          active ? "text-ink" : "text-mist"
        }`}
      >
        {mood.label}
      </span>
      <span
        className={`eyebrow text-center leading-snug ${
          active ? "text-ink/70" : "text-mist/50"
        }`}
      >
        {mood.description}
      </span>
    </button>
  );
}
