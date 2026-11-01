export function AfriNexLogo({ className = "", showTagline = true, variant = "default" }) {
  const isLight = variant === "light";

  return (
    <div className={`inline-flex items-center gap-3 select-none group ${className}`}>
      {/* Savannah Informatics-Inspired Enterprise Emblem (#384AD3 Royal Indigo, #131946 Deep Navy & #ED5829 Coral Node) */}
      <div className="relative flex items-center justify-center w-11 h-11 md:w-12 md:h-12 transition-transform duration-300 group-hover:scale-105">
        <svg
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-sm"
        >
          <defs>
            <linearGradient id="savannahHexGrad" x1="0" y1="0" x2="80" y2="80" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#384AD3" />
              <stop offset="55%" stopColor="#25318D" />
              <stop offset="100%" stopColor="#8015E8" />
            </linearGradient>
            <linearGradient id="savannahApexGrad" x1="16" y1="16" x2="64" y2="64" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#8F98E2" />
              <stop offset="100%" stopColor="#384AD3" />
            </linearGradient>
          </defs>
          {/* Outer Rounded Hexagon */}
          <path
            d="M40 4L72 22.5V59.5L40 78L8 59.5V22.5L40 4Z"
            fill="url(#savannahHexGrad)"
            stroke="#B5BCF0"
            strokeWidth="2"
            strokeOpacity="0.7"
          />
          {/* Inner Cutout Hexagon */}
          <path
            d="M40 13L64 26.8V54.2L40 68L16 54.2V26.8L40 13Z"
            fill="#131946"
          />
          {/* Stylized 'A' + Enterprise Data Node */}
          <path
            d="M40 20L56 54H47.5L40 37.5L32.5 54H24L40 20Z"
            fill="url(#savannahApexGrad)"
          />
          {/* Forward Trajectory Crossbar */}
          <path d="M31 45H49L40 38.5L31 45Z" fill="#ffffff" />
          {/* Signature Savannah Coral & Lavender Nodes */}
          <circle cx="40" cy="20" r="3.5" fill="#ED5829" />
          <circle cx="24" cy="54" r="2.5" fill="#B5BCF0" />
          <circle cx="56" cy="54" r="2.5" fill="#B5BCF0" />
        </svg>
      </div>

      {/* Brand Wordmark */}
      <div className="flex flex-col leading-none">
        <span
          className={`font-display font-extrabold text-xl md:text-2xl tracking-tight ${
            isLight ? "text-white" : "text-[#131946]"
          }`}
        >
          Afri<span className={isLight ? "text-[#B5BCF0]" : "text-[#384AD3]"}>Nex</span>{" "}
          <span className={`font-semibold ${isLight ? "text-white/85" : "text-[#25318D]"}`}>
            Tech
          </span>
        </span>
        {showTagline && (
          <span
            className={`text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] mt-1 ${
              isLight ? "text-[#B5BCF0]" : "text-[#ED5829]"
            }`}
          >
            Informatics &amp; Digital Solutions
          </span>
        )}
      </div>
    </div>
  );
}
