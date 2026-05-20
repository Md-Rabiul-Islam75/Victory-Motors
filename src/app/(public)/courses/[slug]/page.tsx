import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Clock,
  Calendar,
  MapPin,
  CheckCircle2,
  GraduationCap,
  ArrowRight,
  BookOpen,
  Tag,
} from "lucide-react";
import PageHero from "@/components/landing/PageHero";
import { landingContent } from "@/data/landing";

export function generateStaticParams() {
  return landingContent.courses.map((c) => ({ slug: c.slug }));
}

export default async function CourseDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = landingContent.courses.find((c) => c.slug === slug);
  if (!course) notFound();

  const related = landingContent.courses.filter((c) => c.slug !== slug).slice(0, 3);

  return (
    <main className="bg-white">
      <PageHero
        title={course.title}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Courses", href: "/#courses" },
          { label: course.title },
        ]}
      />

      <section className="vm-section">
        <div className="vm-container">
          <div className="grid lg:grid-cols-5 gap-10">
            <div className="lg:col-span-2 space-y-6">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-vm-ink-100 shadow-xl ring-1 ring-vm-ink-200">
                <Image src={course.image} alt={course.title} fill className="object-cover" />
                <span className="absolute top-4 left-4 bg-vm-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {course.level}
                </span>
              </div>
              <Link href="/contact" className="vm-btn-primary w-full">
                Book Now <ArrowRight size={18} />
              </Link>

              <div className="bg-vm-navy-900 text-white rounded-2xl p-6">
                <h3 className="font-bold text-vm-gold-500 uppercase tracking-wider text-sm">
                  Need Help?
                </h3>
                <p className="mt-2 text-sm text-vm-navy-100">
                  Talk to our admissions team to find the right course for your goals.
                </p>
                <Link
                  href="/contact"
                  className="mt-4 inline-flex items-center gap-2 text-vm-gold-500 hover:gap-3 transition-all text-sm font-semibold"
                >
                  Contact Admissions <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <span className="inline-flex items-center gap-1.5 bg-vm-red-50 text-vm-red-600 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                    <Tag size={12} />
                    {course.category}
                  </span>
                  <h1 className="mt-3 text-3xl md:text-4xl font-bold text-vm-navy-900">
                    {course.title}
                  </h1>
                </div>
                <div className="bg-vm-gold-50 border border-vm-gold-500/30 rounded-xl px-5 py-3">
                  <p className="text-xs uppercase tracking-wider text-vm-ink-400">
                    Course Fee
                  </p>
                  <p className="text-2xl font-bold text-vm-red-600">{course.price}</p>
                </div>
              </div>

              <div className="mt-6 grid sm:grid-cols-3 gap-3">
                <div className="flex items-center gap-3 bg-vm-ink-100 rounded-lg p-3">
                  <Clock size={20} className="text-vm-red-500 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-vm-ink-400">Duration</p>
                    <p className="font-semibold text-vm-navy-900 text-sm">{course.duration}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-vm-ink-100 rounded-lg p-3">
                  <Calendar size={20} className="text-vm-red-500 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-vm-ink-400">Class Days</p>
                    <p className="font-semibold text-vm-navy-900 text-sm">{course.totalDays}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-vm-ink-100 rounded-lg p-3">
                  <MapPin size={20} className="text-vm-red-500 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-vm-ink-400">Mode</p>
                    <p className="font-semibold text-vm-navy-900 text-sm">{course.mode}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h2 className="text-xl font-bold text-vm-navy-900 flex items-center gap-2">
                  <BookOpen size={20} className="text-vm-red-500" />
                  Description
                </h2>
                <p className="mt-3 text-vm-ink-600 leading-relaxed">
                  {course.description}
                </p>
              </div>

              <div className="mt-8">
                <h2 className="text-xl font-bold text-vm-navy-900">Course Outline</h2>
                <ul className="mt-4 grid sm:grid-cols-2 gap-3">
                  {course.outline.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 bg-vm-ink-100 rounded-lg p-3"
                    >
                      <span className="flex-shrink-0 h-6 w-6 rounded-full bg-vm-red-500 text-white text-xs font-bold flex items-center justify-center">
                        {idx + 1}
                      </span>
                      <span className="text-sm text-vm-ink-600 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 bg-vm-navy-50 border-l-4 border-vm-red-500 rounded-r-xl p-5">
                <h2 className="text-lg font-bold text-vm-navy-900 flex items-center gap-2">
                  <CheckCircle2 size={20} className="text-vm-red-500" />
                  Eligibility Criteria
                </h2>
                <p className="mt-2 text-vm-ink-600 leading-relaxed text-sm">
                  {course.eligibility}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="vm-section bg-vm-ink-100">
          <div className="vm-container">
            <h2 className="vm-section-title">Related Courses</h2>
            <div className="vm-divider" />
            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((c) => (
                <Link key={c.id} href={c.href} className="vm-card group block">
                  <div className="relative aspect-[16/10] overflow-hidden bg-vm-navy-100">
                    <Image
                      src={c.image}
                      alt={c.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-vm-navy-900">{c.title}</h3>
                    <div className="mt-3 flex items-center justify-between text-sm text-vm-ink-600">
                      <span className="flex items-center gap-1.5">
                        <Clock size={14} className="text-vm-red-500" />
                        {c.duration}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <GraduationCap size={14} className="text-vm-red-500" />
                        {c.level}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
