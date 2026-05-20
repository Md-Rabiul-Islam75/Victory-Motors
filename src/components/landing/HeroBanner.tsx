import Image from "next/image";
import { ArrowRight, PlayCircle } from "lucide-react";
import { HeroSlide } from "@/types/Landing";

export default function HeroBanner({ slides }: { slides: HeroSlide[] }) {
  const slide = slides[0];
  if (!slide) return null;

  return (
    <section id="home" className="relative overflow-hidden bg-vm-navy-950">
      <div className="absolute inset-0">
        <Image
          src={slide.image}
          alt={slide.title}
          fill
          priority
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-vm-navy-950 via-vm-navy-900/90 to-transparent" />
      </div>

      <div className="relative vm-container pt-28 pb-20 md:pt-52 md:pb-32 lg:pt-56 lg:pb-40">
        <div className="max-w-2xl text-white vm-fade-up">
          <span className="inline-block bg-vm-red-500/20 border border-vm-red-500 text-vm-red-500 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide">
            {slide.subtitle}
          </span>
          <h1 className="mt-6 text-4xl md:text-6xl font-bold leading-tight">
            {slide.title}{" "}
            <span className="text-vm-gold-500">{slide.highlight}</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-vm-navy-100 leading-relaxed">
            {slide.description}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href={slide.ctaHref} className="vm-btn-primary">
              {slide.ctaLabel}
              <ArrowRight size={18} />
            </a>
            <a href="#about" className="vm-btn-outline">
              <PlayCircle size={18} />
              About Us
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-vm-navy-100/80">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-vm-gold-500" />
              Industry-Certified
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-vm-gold-500" />
              Hands-on Workshop
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-vm-gold-500" />
              Job Placement Support
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-vm-red-500 via-vm-gold-500 to-vm-red-500" />
    </section>
  );
}
