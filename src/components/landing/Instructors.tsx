import Image from "next/image";
import { Linkedin, Facebook, Mail } from "lucide-react";
import { Instructor } from "@/types/Landing";

export default function Instructors({ items }: { items: Instructor[] }) {
  return (
    <section id="instructors" className="vm-section bg-white">
      <div className="vm-container">
        <h2 className="vm-section-title">Meet Our Instructors</h2>
        <div className="vm-divider" />
        <p className="vm-section-subtitle">
          Engineers, master technicians and industry veterans dedicated to your success.
        </p>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((person) => (
            <article key={person.id} className="group vm-card">
              <div className="relative aspect-square overflow-hidden bg-vm-ink-100">
                <Image
                  src={person.avatar}
                  alt={person.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-vm-navy-950 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="flex gap-2 justify-center">
                    <a
                      href="#"
                      aria-label="LinkedIn"
                      className="h-8 w-8 rounded-full bg-white/10 hover:bg-vm-gold-500 hover:text-vm-navy-900 text-white flex items-center justify-center transition-colors"
                    >
                      <Linkedin size={16} />
                    </a>
                    <a
                      href="#"
                      aria-label="Facebook"
                      className="h-8 w-8 rounded-full bg-white/10 hover:bg-vm-gold-500 hover:text-vm-navy-900 text-white flex items-center justify-center transition-colors"
                    >
                      <Facebook size={16} />
                    </a>
                    <a
                      href="#"
                      aria-label="Email"
                      className="h-8 w-8 rounded-full bg-white/10 hover:bg-vm-gold-500 hover:text-vm-navy-900 text-white flex items-center justify-center transition-colors"
                    >
                      <Mail size={16} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-5 text-center">
                <h3 className="text-lg font-bold text-vm-navy-900">{person.name}</h3>
                <p className="text-sm text-vm-red-500 font-medium mt-1">
                  {person.designation}
                </p>
                <p className="mt-3 text-sm text-vm-ink-400 leading-relaxed">
                  {person.bio}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
