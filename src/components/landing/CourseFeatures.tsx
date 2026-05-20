import Image from "next/image";
import { Clock, ArrowUpRight, GraduationCap } from "lucide-react";
import { Course } from "@/types/Landing";

export default function CourseFeatures({ courses }: { courses: Course[] }) {
  return (
    <section id="courses" className="vm-section bg-vm-ink-100">
      <div className="vm-container">
        <h2 className="vm-section-title">Our Course Features</h2>
        <div className="vm-divider" />
        <p className="vm-section-subtitle">
          Industry-aligned programmes built around real workshops, modern diagnostic tools and hands-on practice.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course) => (
            <article key={course.id} className="vm-card group">
              <div className="relative aspect-[4/3] overflow-hidden bg-vm-navy-100">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-vm-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {course.level}
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-vm-navy-900 line-clamp-2 min-h-[3.5rem]">
                  {course.title}
                </h3>
                <p className="mt-2 text-sm text-vm-ink-400 line-clamp-3">
                  {course.description}
                </p>
                <div className="mt-4 flex items-center justify-between text-sm">
                  <span className="flex items-center gap-1.5 text-vm-ink-600">
                    <Clock size={14} className="text-vm-red-500" />
                    {course.duration}
                  </span>
                  <span className="flex items-center gap-1.5 text-vm-ink-600">
                    <GraduationCap size={14} className="text-vm-red-500" />
                    Certified
                  </span>
                </div>
                <a
                  href={course.href}
                  className="mt-5 inline-flex items-center gap-1.5 text-vm-red-500 font-semibold hover:gap-3 transition-all"
                >
                  View Details <ArrowUpRight size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
