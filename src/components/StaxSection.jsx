import { cn } from "@/lib/utils";

export function StaxSection({
  children,
  className,
  background = "white",
  width = "wide", // wide, full, content
  padding = true,
}) {
  const bgColors = {
    white: "bg-white transition-colors duration-300",
    light: "bg-slate-50 transition-colors duration-300",
    dark: "bg-stax-black text-white transition-colors duration-300",
    accent: "bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 transition-colors duration-300",
    black: "bg-stax-black text-white transition-colors duration-300",
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
