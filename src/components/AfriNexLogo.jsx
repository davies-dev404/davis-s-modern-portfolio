export function AfriNexLogo({ className = "" }) {
  return (
    <div className={`inline-flex items-center select-none group ${className}`}>
      <img
        src="/assets/afrinex-logo-dark.png"
        alt="AfriNex Tech Logo"
        width="185"
        height="61"
        decoding="async"
        className="h-10 sm:h-11 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
      />
    </div>
  );
}
