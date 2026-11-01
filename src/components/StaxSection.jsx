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
    light: "bg-[#F9F8FC] transition-colors duration-300",
    dark: "bg-[#131946] text-white transition-colors duration-300",
    accent: "bg-gradient-to-r from-[#384AD3] via-[#25318D] to-[#131946] transition-colors duration-300",
    black: "bg-[#131946] text-white transition-colors duration-300",
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
