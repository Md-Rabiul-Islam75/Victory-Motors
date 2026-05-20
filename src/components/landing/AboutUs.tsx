import { GraduationCap, UserCog, Clock, Users } from "lucide-react";
import { LandingContent, Stat } from "@/types/Landing";

const iconMap: Record<Stat["icon"], React.ComponentType<{ size?: number; className?: string }>> = {
  graduate: GraduationCap,
  instructor: UserCog,
  clock: Clock,
  students: Users,
};

export default function AboutUs({ about }: { about: LandingContent["about"] }) {
  return (
    <section id="about" className="vm-section bg-white">
      <div className="vm-container">
        <div className="grid lg:grid-cols-5 gap-10 items-center">
          <div className="lg:col-span-2 relative">
            <div className="relative aspect-square rounded-2xl bg-gradient-to-br from-vm-navy-900 via-vm-navy-700 to-vm-red-600 p-8 flex flex-col justify-center text-white shadow-2xl">
              <span className="text-vm-gold-500 text-sm font-bold tracking-widest uppercase">
                Established
              </span>
              <p className="text-7xl font-bold mt-2">2026</p>
              <p className="mt-3 text-vm-navy-100">
                Training Bangladesh&apos;s next generation of automotive professionals.
              </p>
              <div className="mt-6 h-px bg-white/30" />
              <p className="mt-4 text-sm text-vm-navy-100">
                Recognised by leading dealerships across South Asia and the Middle East.
              </p>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-vm-gold-500/20 rounded-full blur-3xl -z-10" />
          </div>

          <div className="lg:col-span-3">
            <span className="text-vm-red-500 font-semibold tracking-wide uppercase text-sm">
              About Us
            </span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-vm-navy-900">
              {about.heading}
            </h2>
            <div className="h-1 w-16 bg-vm-red-500 rounded-full mt-4" />
            <p className="mt-5 text-vm-ink-600 leading-relaxed text-lg">
              {about.body}
            </p>

            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
              {about.stats.map((stat) => {
                const Icon = iconMap[stat.icon];
                return (
                  <div
                    key={stat.id}
                    className="bg-vm-ink-100 hover:bg-vm-navy-900 hover:text-white transition-colors p-5 rounded-xl text-center group"
                  >
                    <Icon size={32} className="mx-auto text-vm-red-500 group-hover:text-vm-gold-500 transition-colors" />
                    <p className="mt-3 text-2xl md:text-3xl font-bold text-vm-navy-900 group-hover:text-white">
                      {stat.value}
                    </p>
                    <p className="text-xs uppercase tracking-wider mt-1 text-vm-ink-400 group-hover:text-vm-navy-100">
                      {stat.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
