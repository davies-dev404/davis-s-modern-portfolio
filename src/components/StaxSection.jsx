import { cn } from "@/lib/utils";

export function StaxSection({
  children,
  className,
  background = "white",
  width = "wide", // wide, full, content
  padding = true,
}) {
  const bgColors = {
    white: "bg-[#121212] text-white transition-colors duration-300",
    light: "bg-[#17171c] text-white transition-colors duration-300",
    dark: "bg-[#0d0d11] text-white transition-colors duration-300",
    accent:
      "bg-gradient-to-b from-[#1a1f3c] via-[#151828] to-[#121212] text-white transition-colors duration-300",
    black: "bg-[#0d0d11] text-white transition-colors duration-300",
  };

  const widthClasses = {
    wide: "alignwide",
    full: "alignfull",
    content: "aligncontent",
  };

  return (
    <section
      className={cn(
        bgColors[background],
        padding ? "py-16 md:py-24" : "",
        className
      )}
    >
      <div className={cn(width !== "full" ? widthClasses[width] : "w-full")}>
        {children}
      </div>
    </section>
  );
}
