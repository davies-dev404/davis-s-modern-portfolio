export function AfriNexLogo({ className = "", showTagline = true }) {
  return (
    <div className={`inline-flex items-center gap-3 select-none group ${className}`}>
      {/* Hexagonal Tech Emblem (Royal Sapphire & Electric Cyan) */}
      <div className="relative flex items-center justify-center w-11 h-11 md:w-12 md:h-12 transition-transform duration-300 group-hover:scale-105">
        <svg
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-sm"
        >
          <defs>
            <linearGradient id="afrinexHexGrad" x1="0" y1="0" x2="80" y2="80" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#2563eb" />
              <stop offset="50%" stopColor="#1d4ed8" />
              <stop offset="100%" stopColor="#0284c7" />
            </linearGradient>
            <linearGradient id="afrinexApexGrad" x1="12" y1="12" x2="68" y2="68" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#2563eb" />
            </linearGradient>
          </defs>
          {/* Outer Hexagon */}
          <path
            d="M40 4L72 22.5V59.5L40 78L8 59.5V22.5L40 4Z"
            fill="url(#afrinexHexGrad)"
            stroke="#38bdf8"
            strokeWidth="2"
            strokeOpacity="0.6"
          />
          {/* Inner Cutout Hexagon */}
          <path
            d="M40 13L64 26.8V54.2L40 68L16 54.2V26.8L40 13Z"
            fill="#0f172a"
          />
          {/* Stylized 'A' + Circuit Node Nexus */}
          <path
            d="M40 20L56 54H47.5L40 37.5L32.5 54H24L40 20Z"
            fill="url(#afrinexApexGrad)"
          />
          {/* Forward Arrow Crossbar */}
          <path d="M31 45H49L40 38.5L31 45Z" fill="#ffffff" />
          {/* Nodes */}
          <circle cx="40" cy="20" r="3" fill="#ffffff" />
          <circle cx="24" cy="54" r="2.5" fill="#38bdf8" />
          <circle cx="56" cy="54" r="2.5" fill="#38bdf8" />
        </svg>
      </div>

      {/* Brand Wordmark */}
      <div className="flex flex-col leading-none">
        <span className="font-display font-extrabold text-xl md:text-2xl tracking-tight text-stax-black">
          Afri<span className="text-primary">Nex</span>{" "}
          <span className="font-semibold text-stax-medium-gray">Tech</span>
        </span>
        {showTagline && (
          <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-primary mt-1">
            Digital Solutions
          </span>
        )}
      </div>
    </div>
  );
}
