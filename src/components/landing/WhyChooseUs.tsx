import {
  Award,
  Wrench,
  Brain,
  ShieldCheck,
  Route,
  Briefcase,
} from "lucide-react";
import { Feature, LandingContent } from "@/types/Landing";

const iconMap: Record<Feature["icon"], React.ComponentType<{ size?: number; className?: string }>> = {
  expert: Award,
  system: Wrench,
  logic: Brain,
  physical: ShieldCheck,
  road: Route,
  job: Briefcase,
};

export default function WhyChooseUs({ data }: { data: LandingContent["whyChooseUs"] }) {
  return (
    <section className="vm-section bg-vm-ink-100">
      <div className="vm-container">
        <h2 className="vm-section-title">{data.heading}</h2>
        <div className="vm-divider" />
        <p className="vm-section-subtitle">{data.subheading}</p>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.features.map((feature, idx) => {
            const Icon = iconMap[feature.icon];
            return (
              <div
                key={feature.id}
                className="group relative bg-white rounded-2xl p-7 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                <div className="absolute -right-6 -top-6 w-24 h-24 bg-vm-red-500/5 rounded-full group-hover:scale-150 transition-transform duration-500" />
                <div className="relative">
                  <div className="inline-flex items-center justify-center h-14 w-14 rounded-xl bg-vm-navy-900 text-vm-gold-500 group-hover:bg-vm-red-500 group-hover:text-white transition-colors">
                    <Icon size={26} />
                  </div>
                  <span className="absolute -top-1 right-0 text-6xl font-extrabold leading-none text-vm-red-500/15 group-hover:text-vm-red-500/30 transition-colors">
                    0{idx + 1}
                  </span>
                  <h3 className="mt-5 text-xl font-bold text-vm-navy-900">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-vm-ink-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
