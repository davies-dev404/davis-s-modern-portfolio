export function AfriNexLogo({ className = "", showTagline = true }) {
  return (
    <div className={`inline-flex items-center gap-3 select-none group ${className}`}>
      {/* Sleek Modern App-Icon Monogram ("AN") */}
      <div className="relative flex items-center justify-center w-10 h-10 md:w-11 md:h-11 rounded-xl bg-gradient-to-br from-[#3444da] via-[#2633aa] to-[#121212] p-[1px] shadow-lg shadow-[#3444da]/25 transition-transform duration-300 group-hover:scale-105">
        <div className="relative flex items-center justify-center w-full h-full rounded-[11px] bg-[#14141a] overflow-hidden">
          {/* Subtle top-left glow */}
          <div className="absolute -top-3 -left-3 w-7 h-7 rounded-full bg-[#6d7cff]/30 blur-md pointer-events-none" />
          <svg
            viewBox="0 0 44 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-7 h-7 relative z-10"
          >
            <defs>
              <linearGradient id="anRibbonMain" x1="6" y1="8" x2="38" y2="36" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="50%" stopColor="#a0b3ff" />
                <stop offset="100%" stopColor="#6d7cff" />
              </linearGradient>
              <linearGradient id="anRibbonAccent" x1="18" y1="8" x2="38" y2="36" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#6d7cff" />
                <stop offset="100%" stopColor="#3444da" />
              </linearGradient>
            </defs>
            {/* Left ascending pillar of 'A' */}
            <path
              d="M8 34L17.5 10H23L13.5 34H8Z"
              fill="url(#anRibbonMain)"
            />
            {/* Shared diagonal stroke (right leg of 'A' + diagonal of 'N') */}
            <path
              d="M17.5 10H23L32.5 34H27L17.5 10Z"
              fill="url(#anRibbonAccent)"
            />
            {/* Right vertical pillar of 'N' with upward tech arrow */}
            <path
              d="M29.5 34V14.5L26.5 17.5V12.5L32.25 7.5L38 12.5V17.5L35 14.5V34H29.5Z"
              fill="url(#anRibbonMain)"
            />
            {/* Crossbar of 'A' */}
            <rect
              x="12"
              y="24"
              width="12"
              height="3.6"
              rx="1.8"
              fill="#F4EDBF"
            />
          </svg>
        </div>
      </div>

      {/* Brand Wordmark */}
      <div className="flex flex-col leading-none">
        <span className="font-display font-bold text-xl md:text-2xl tracking-tight text-white flex items-center">
          Afri
          <span className="text-color-gradient-accent">Nex</span>
          <span className="font-normal text-white/85 ml-1.5">Tech</span>
        </span>
        {showTagline && (
          <span className="text-[9px] md:text-[10px] font-mono uppercase tracking-[0.22em] text-[#a0b3ff]/80 mt-1">
            Digital Solutions
          </span>
        )}
      </div>
    </div>
  );
}
