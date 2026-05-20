import Image from "next/image";
import { Target, Eye, Quote, GraduationCap, UserCog, Clock, Users } from "lucide-react";
import PageHero from "@/components/landing/PageHero";
import Instructors from "@/components/landing/Instructors";
import WhyChooseUs from "@/components/landing/WhyChooseUs";
import { landingContent } from "@/data/landing";
import { Stat } from "@/types/Landing";

const iconMap: Record<Stat["icon"], React.ComponentType<{ size?: number; className?: string }>> = {
  graduate: GraduationCap,
  instructor: UserCog,
  clock: Clock,
  students: Users,
};

export const metadata = {
  title: "About Us — Victory Motors",
  description:
    "Learn about Victory Motors — our story, mission, vision, leadership and instructors.",
};

export default function AboutPage() {
  const { about, instructors, whyChooseUs, site } = landingContent;

  return (
    <main className="bg-white">
      <PageHero
        title="About Us"
        subtitle="A decade of building Bangladesh's automotive talent — one technician, one engineer, one workshop at a time."
        crumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
      />

      <section className="vm-section">
        <div className="vm-container grid lg:grid-cols-5 gap-12 items-center">
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
              Our Story
            </span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-vm-navy-900">
              {about.heading}
            </h2>
            <div className="h-1 w-16 bg-vm-red-500 rounded-full mt-4" />
            <p className="mt-5 text-vm-ink-600 leading-relaxed text-lg">{about.body}</p>
            <p className="mt-4 text-vm-ink-600 leading-relaxed">{about.story}</p>
          </div>
        </div>
      </section>

      <section className="vm-section bg-vm-ink-100">
        <div className="vm-container">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all">
              <div className="inline-flex items-center justify-center h-14 w-14 rounded-xl bg-vm-red-500 text-white">
                <Target size={26} />
              </div>
              <h3 className="mt-5 text-2xl font-bold text-vm-navy-900">Our Mission</h3>
              <div className="h-1 w-12 bg-vm-red-500 rounded-full mt-2" />
              <p className="mt-4 text-vm-ink-600 leading-relaxed">{about.mission}</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all">
              <div className="inline-flex items-center justify-center h-14 w-14 rounded-xl bg-vm-navy-900 text-vm-gold-500">
                <Eye size={26} />
              </div>
              <h3 className="mt-5 text-2xl font-bold text-vm-navy-900">Our Vision</h3>
              <div className="h-1 w-12 bg-vm-red-500 rounded-full mt-2" />
              <p className="mt-4 text-vm-ink-600 leading-relaxed">{about.vision}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="vm-section">
        <div className="vm-container">
          <div className="text-center">
            <span className="text-vm-red-500 font-semibold tracking-widest uppercase text-sm">
              Chairman&apos;s Message
            </span>
            <h2 className="mt-2 vm-section-title">A Word from Our Founder</h2>
            <div className="vm-divider" />
          </div>

          <div className="mt-12 max-w-5xl mx-auto grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-1">
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl ring-4 ring-vm-gold-500/30">
                <Image
                  src={about.chairman.avatar}
                  alt={about.chairman.name}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="mt-4 text-center font-bold text-vm-navy-900 text-lg">
                {about.chairman.name}
              </p>
              <p className="text-center text-sm text-vm-red-500 font-medium">
                {about.chairman.role}
              </p>
            </div>
            <div className="md:col-span-2 relative">
              <Quote size={48} className="text-vm-red-500/20 absolute -top-2 -left-2" />
              <p className="relative text-lg md:text-xl text-vm-ink-600 leading-relaxed italic">
                &ldquo;{about.chairman.message}&rdquo;
              </p>
              <div className="mt-6 h-1 w-20 bg-vm-red-500 rounded-full" />
              <p className="mt-3 text-sm text-vm-ink-400">— {about.chairman.name}, {site.name}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative vm-section bg-vm-navy-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-vm-red-500 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-vm-gold-500 rounded-full blur-3xl" />
        </div>
        <div className="relative vm-container">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white">
            Victory Motors in Numbers
          </h2>
          <div className="vm-divider" />
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            {about.stats.map((stat) => {
              const Icon = iconMap[stat.icon];
              return (
                <div
                  key={stat.id}
                  className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 text-center"
                >
                  <Icon size={36} className="mx-auto text-vm-gold-500" />
                  <p className="mt-4 text-3xl md:text-4xl font-bold">{stat.value}</p>
                  <p className="text-xs uppercase tracking-wider mt-1 text-vm-navy-100">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <WhyChooseUs data={whyChooseUs} />

      <Instructors items={instructors} />
    </main>
  );
}
