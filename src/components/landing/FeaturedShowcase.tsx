import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { LandingContent } from "@/types/Landing";

const highlights = [
  "Hands-on workshop sessions on live vehicles",
  "Lifetime access to course materials",
  "Job placement support upon graduation",
  "Industry-recognised certification",
];

export default function FeaturedShowcase({
  showcase,
}: {
  showcase: LandingContent["featuredShowcase"];
}) {
  return (
    <section className="relative overflow-hidden bg-vm-navy-900 text-white">
      <div className="absolute inset-0 opacity-20">
        <Image src={showcase.image} alt="" fill className="object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-vm-navy-950 via-vm-navy-900/95 to-vm-navy-900/70" />

      <div className="relative vm-container py-16 md:py-20 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <span className="inline-block bg-vm-gold-500 text-vm-navy-900 px-3 py-1 rounded text-xs font-bold uppercase tracking-wider">
            {showcase.subtitle}
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold leading-tight">
            {showcase.title}
          </h2>
          <p className="mt-5 text-vm-navy-100 text-lg leading-relaxed">
            {showcase.description}
          </p>

          <ul className="mt-6 grid sm:grid-cols-2 gap-3">
            {highlights.map((h) => (
              <li key={h} className="flex items-start gap-2 text-vm-navy-100">
                <CheckCircle2 size={20} className="text-vm-gold-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm">{h}</span>
              </li>
            ))}
          </ul>

          <a href={showcase.ctaHref} className="mt-8 vm-btn-gold">
            {showcase.ctaLabel}
            <ArrowRight size={18} />
          </a>
        </div>

        <div className="relative hidden lg:block">
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-vm-red-500/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-vm-gold-500/20 rounded-full blur-3xl" />
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl ring-4 ring-white/10">
            <Image src={showcase.image} alt={showcase.title} fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
