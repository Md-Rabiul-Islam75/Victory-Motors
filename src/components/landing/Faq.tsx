"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { FaqItem } from "@/types/Landing";

export default function Faq({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<string | null>(items[0]?.id ?? null);

  return (
    <section id="faq" className="vm-section bg-vm-ink-100">
      <div className="vm-container max-w-4xl">
        <h2 className="vm-section-title">Frequently Asked Questions</h2>
        <div className="vm-divider" />
        <p className="vm-section-subtitle">
          Everything you need to know before you join Victory Motors.
        </p>

        <div className="mt-12 space-y-3">
          {items.map((item) => {
            const isOpen = open === item.id;
            return (
              <div
                key={item.id}
                className={`bg-white rounded-xl border transition-all ${
                  isOpen
                    ? "border-vm-red-500 shadow-lg"
                    : "border-transparent shadow-sm hover:shadow-md"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : item.id)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-vm-navy-900 text-base md:text-lg">
                    {item.question}
                  </span>
                  <span
                    className={`flex-shrink-0 h-9 w-9 rounded-full flex items-center justify-center transition-colors ${
                      isOpen
                        ? "bg-vm-red-500 text-white"
                        : "bg-vm-ink-100 text-vm-navy-900"
                    }`}
                  >
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-vm-ink-600 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
