import { NavLink } from "react-router-dom";

const linkBase =
  "px-3 py-1.5 rounded-full text-sm font-medium transition-colors font-body";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-ink/85 border-b border-ink-line">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-2 group">
          <span className="text-2xl">🧭</span>
          <span className="font-display text-xl tracking-tight text-mist">
            Mood<span className="text-marigold">Trail</span>
          </span>
        </NavLink>
        <nav className="flex items-center gap-1 sm:gap-2">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `${linkBase} ${isActive ? "bg-marigold text-ink" : "text-mist/80 hover:text-mist hover:bg-ink-soft"}`
            }
          >
            Discover
          </NavLink>
          <NavLink
            to="/community"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? "bg-marigold text-ink" : "text-mist/80 hover:text-mist hover:bg-ink-soft"}`
            }
          >
            Community
          </NavLink>
          <NavLink
            to="/community/new"
            className="ml-1 sm:ml-2 px-3.5 py-1.5 rounded-full text-sm font-semibold bg-rose text-mist hover:brightness-110 transition"
          >
            + Share a spot
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
