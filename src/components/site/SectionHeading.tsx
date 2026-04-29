export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`w-full max-w-4xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <div className={`flex items-center gap-3 mb-5 ${align === "center" ? "justify-center" : ""}`}>
          <span className="gold-divider" />
          <span className="text-xs uppercase tracking-[0.35em] text-gold">{eyebrow}</span>
          <span className="gold-divider" />
        </div>
      )}
      <h2 className="font-display text-3xl md:text-4xl lg:text-[2.75rem] text-navy leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
