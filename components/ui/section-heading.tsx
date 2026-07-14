import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  as: Heading = "h2",
  className,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  as?: "h1" | "h2" | "h3";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? <p className="eyebrow mb-4">{eyebrow}</p> : null}
      <div className={cn("hairline mb-6", align === "center" && "mx-auto")} />
      <Heading className={Heading === "h1" ? "text-h1" : "text-h2"}>{title}</Heading>
      {intro ? (
        <p className="measure mt-5 text-lg text-slate-brand">{intro}</p>
      ) : null}
    </div>
  );
}
