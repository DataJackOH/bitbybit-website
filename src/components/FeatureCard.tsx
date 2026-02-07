interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-sage/10 text-2xl">
        {icon}
      </div>
      <h3 className="font-heading text-lg font-bold text-charcoal">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-charcoal/60">
        {description}
      </p>
    </div>
  );
}
