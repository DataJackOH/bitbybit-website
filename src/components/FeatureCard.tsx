interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  accent?: "sage" | "coral";
}

export default function FeatureCard({
  icon,
  title,
  description,
  accent = "sage",
}: FeatureCardProps) {
  const accentBg = accent === "coral" ? "bg-coral/10" : "bg-sage/10";
  const accentText = accent === "coral" ? "text-coral" : "text-sage";

  return (
    <div className="rounded-2xl border border-charcoal/[0.06] bg-white p-6 shadow-sm">
      <div
        className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${accentBg} ${accentText}`}
      >
        {icon}
      </div>
      <h3 className="font-heading text-lg font-bold text-charcoal">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-charcoal/60">
        {description}
      </p>
    </div>
  );
}
