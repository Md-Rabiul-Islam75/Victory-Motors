"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { Testimonial } from "@/types/Landing";

export default function Testimonials({ items }: { items: Testimonial[] }) {
  const [active, setActive] = useState(0);
  const total = items.length;

  if (!total) return null;

  const prev = () => setActive((i) => (i - 1 + total) % total);
  const next = () => setActive((i) => (i + 1) % total);
  const t = items[active];

  return (
    <section id="testimonials" className="relative vm-section bg-vm-navy-900 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-vm-red-500 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-vm-gold-500 rounded-full blur-3xl" />
      </div>

      <div className="relative vm-container">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white">
          What Our Graduates Say
        </h2>
        <div className="vm-divider" />
        <p className="text-center text-vm-navy-100 max-w-2xl mx-auto mt-4">
          Real stories from real graduates building careers across Bangladesh and beyond.
        </p>

        <div className="mt-12 max-w-3xl mx-auto">
          <div className="relative bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8 md:p-12 text-center">
            <Quote
              size={56}
              className="absolute -top-7 left-1/2 -translate-x-1/2 text-vm-gold-500 bg-vm-navy-900 px-2"
            />

            <div className="flex justify-center gap-1 text-vm-gold-500">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={20} fill="currentColor" />
              ))}
            </div>

            <p className="mt-5 text-lg md:text-xl leading-relaxed text-vm-navy-100 italic">
              &ldquo;{t.message}&rdquo;
            </p>

            <div className="mt-8 flex flex-col items-center gap-3">
              <div className="relative h-16 w-16 rounded-full overflow-hidden ring-4 ring-vm-gold-500/40">
                <Image src={t.avatar} alt={t.name} fill className="object-cover" />
              </div>
              <div>
                <p className="font-bold text-white">{t.name}</p>
                <p className="text-sm text-vm-gold-500">{t.role}</p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="h-10 w-10 rounded-full bg-white/10 hover:bg-vm-red-500 transition-colors flex items-center justify-center"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2">
              {items.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-2 rounded-full transition-all ${
                    i === active ? "w-8 bg-vm-gold-500" : "w-2 bg-white/30"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="h-10 w-10 rounded-full bg-white/10 hover:bg-vm-red-500 transition-colors flex items-center justify-center"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
