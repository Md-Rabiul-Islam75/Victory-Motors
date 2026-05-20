import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

type Crumb = { label: string; href?: string };

export default function PageHero({
  title,
  crumbs,
  image = "/images/banner.png",
  subtitle,
}: {
  title: string;
  crumbs: Crumb[];
  image?: string;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-vm-navy-950">
      <div className="absolute inset-0">
        <Image src={image} alt="" fill priority className="object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-vm-navy-950 via-vm-navy-900/90 to-vm-navy-900/70" />
      </div>

      <div className="relative vm-container pt-28 pb-12 md:pt-48 md:pb-16 lg:pt-52 lg:pb-20 text-center text-white">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight uppercase">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-vm-navy-100 max-w-2xl mx-auto">{subtitle}</p>
        )}
        <nav
          aria-label="Breadcrumb"
          className="mt-5 flex items-center justify-center gap-1 text-sm"
        >
          {crumbs.map((crumb, idx) => {
            const isLast = idx === crumbs.length - 1;
            return (
              <span key={`${crumb.label}-${idx}`} className="flex items-center gap-1">
                {crumb.href && !isLast ? (
                  <Link
                    href={crumb.href}
                    className="text-vm-navy-100 hover:text-vm-gold-500 transition-colors uppercase"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-vm-gold-500 uppercase">{crumb.label}</span>
                )}
                {!isLast && (
                  <ChevronRight size={14} className="text-vm-navy-100" />
                )}
              </span>
            );
          })}
        </nav>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-vm-red-500 via-vm-gold-500 to-vm-red-500" />
    </section>
  );
}
