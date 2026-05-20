"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ChevronDown,
  Menu,
  X,
  Cog,
  Phone,
  Mail,
  MapPin,
  ShieldCheck,
} from "lucide-react";
import { Course, SiteInfo } from "@/types/Landing";

type NavLink =
  | { label: string; href: string }
  | { label: string; children: { label: string; href: string }[] };

export default function Navbar({
  site,
  courses,
}: {
  site: SiteInfo;
  courses: Course[];
}) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const links: NavLink[] = [
    { label: "Home", href: "/" },
    {
      label: "Courses",
      children: courses.map((c) => ({ label: c.title, href: `/courses/${c.slug}` })),
    },
    { label: "About", href: "/about" },
    { label: "Instructors", href: "/#instructors" },
    { label: "Testimonials", href: "/#testimonials" },
    { label: "FAQ", href: "/#faq" },
    { label: "Contact", href: "/contact" },
  ];

  const lgTransparent = !scrolled;

  const positionClass = scrolled
    ? "fixed top-0 bg-white/95 backdrop-blur shadow-md"
    : "fixed top-0 bg-white shadow-md lg:absolute lg:top-[44px] lg:bg-transparent lg:shadow-none";

  return (
    <>
      <header
        className={`inset-x-0 z-40 transition-colors duration-300 ${positionClass}`}
      >
        <div className="vm-container flex items-center justify-between py-3">
          <Link href="/" className="flex items-center gap-3 group">
            <span
              className={`relative h-11 w-11 sm:h-14 sm:w-14 inline-flex items-center justify-center ${
                lgTransparent
                  ? "lg:rounded-full lg:bg-vm-red-500/10 lg:backdrop-blur lg:ring-1 lg:ring-white/20"
                  : ""
              }`}
            >
              {lgTransparent ? (
                <>
                  <Image
                    src={site.logo}
                    alt={site.name}
                    fill
                    className="object-contain lg:hidden"
                    priority
                  />
                  <Cog
                    size={28}
                    className="hidden lg:block text-vm-red-500"
                    strokeWidth={2.5}
                  />
                </>
              ) : (
                <Image
                  src={site.logo}
                  alt={site.name}
                  fill
                  className="object-contain"
                  priority
                />
              )}
            </span>
            <div className="leading-tight">
              <p
                className={`text-base sm:text-lg font-bold transition-colors ${
                  lgTransparent
                    ? "text-vm-navy-900 lg:text-white"
                    : "text-vm-navy-900"
                }`}
              >
                {lgTransparent ? (
                  <>
                    <span className="lg:hidden">{site.name}</span>
                    <span className="hidden lg:inline">
                      <span className="text-vm-red-500">VICTORY</span>{" "}
                      <span className="text-white">MOTORS</span>
                    </span>
                  </>
                ) : (
                  site.name
                )}
              </p>
              <p
                className={`text-[10px] sm:text-xs transition-colors ${
                  lgTransparent
                    ? "text-vm-ink-400 lg:text-vm-gold-500"
                    : "text-vm-ink-400"
                }`}
              >
                {site.tagline}
              </p>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-7">
            {links.map((link) =>
              "children" in link ? (
                <div key={link.label} className="relative group">
                  <button
                    className={`flex items-center gap-1 py-2 font-medium transition-colors ${
                      lgTransparent
                        ? "text-white hover:text-vm-gold-500"
                        : "text-vm-ink-600 hover:text-vm-red-500"
                    }`}
                  >
                    {link.label}
                    <ChevronDown
                      size={16}
                      className="group-hover:rotate-180 transition-transform"
                    />
                  </button>
                  <div className="absolute left-0 top-full pt-2 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all">
                    <div className="bg-vm-navy-900 text-white rounded-md shadow-2xl py-2 min-w-[280px]">
                      {link.children.map((c) => (
                        <Link
                          key={c.label}
                          href={c.href}
                          className="block px-4 py-2.5 hover:bg-vm-red-500 transition-colors text-sm"
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`py-2 font-medium transition-colors ${
                    lgTransparent
                      ? "text-white hover:text-vm-gold-500"
                      : "text-vm-ink-600 hover:text-vm-red-500"
                  }`}
                >
                  {link.label}
                </Link>
              ),
            )}
            <Link href="/contact" className="vm-btn-primary px-5 py-2 text-sm">
              Apply Now
            </Link>
          </nav>

          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="lg:hidden h-10 w-10 inline-flex items-center justify-center rounded-md text-vm-navy-900 hover:bg-vm-ink-100 transition-colors"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      <button
        onClick={() => setOpen(false)}
        aria-label="Close menu"
        tabIndex={open ? 0 : -1}
        className={`lg:hidden fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />

      <aside
        aria-hidden={!open}
        className={`lg:hidden fixed top-0 right-0 bottom-0 z-50 w-[85vw] max-w-sm bg-white shadow-2xl transform transition-transform duration-300 ease-out flex flex-col ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 bg-vm-navy-900 text-white">
          <div className="flex items-center gap-3">
            <span className="relative h-10 w-10 inline-block bg-white rounded-md p-0.5">
              <Image
                src={site.logo}
                alt={site.name}
                fill
                className="object-contain"
              />
            </span>
            <div className="leading-tight">
              <p className="font-bold text-sm">{site.name}</p>
              <p className="text-[10px] text-vm-gold-500">{site.tagline}</p>
            </div>
          </div>
          <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="h-9 w-9 inline-flex items-center justify-center rounded-full bg-white/10 hover:bg-vm-red-500 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-4 py-3">
          {links.map((link) =>
            "children" in link ? (
              <details key={link.label} className="group border-b border-vm-ink-200">
                <summary className="flex items-center justify-between py-3 cursor-pointer font-medium text-vm-navy-900 list-none">
                  {link.label}
                  <ChevronDown
                    size={18}
                    className="text-vm-ink-400 group-open:rotate-180 group-open:text-vm-red-500 transition-all"
                  />
                </summary>
                <div className="pb-3 pl-3 flex flex-col gap-1">
                  {link.children.map((c) => (
                    <Link
                      key={c.label}
                      href={c.href}
                      onClick={() => setOpen(false)}
                      className="py-2 text-sm text-vm-ink-600 hover:text-vm-red-500 transition-colors"
                    >
                      › {c.label}
                    </Link>
                  ))}
                </div>
              </details>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block border-b border-vm-ink-200 py-3 font-medium text-vm-navy-900 hover:text-vm-red-500 transition-colors"
              >
                {link.label}
              </Link>
            ),
          )}

          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="vm-btn-primary w-full mt-5"
          >
            Apply Now
          </Link>

          <a
            href="#verify"
            onClick={() => setOpen(false)}
            className="mt-3 w-full inline-flex items-center justify-center gap-2 border-2 border-vm-navy-900 text-vm-navy-900 hover:bg-vm-navy-900 hover:text-white transition-colors px-5 py-2.5 rounded-md text-sm font-semibold"
          >
            <ShieldCheck size={16} />
            Certificate Verification
          </a>
        </nav>

        <div className="border-t border-vm-ink-200 p-4 bg-vm-ink-100 space-y-3 text-sm">
          <a
            href={`tel:${site.phone}`}
            className="flex items-center gap-3 text-vm-ink-600 hover:text-vm-red-500 transition-colors"
          >
            <Phone size={16} className="text-vm-red-500 flex-shrink-0" />
            <span>{site.phone}</span>
          </a>
          <a
            href={`mailto:${site.email}`}
            className="flex items-center gap-3 text-vm-ink-600 hover:text-vm-red-500 transition-colors break-all"
          >
            <Mail size={16} className="text-vm-red-500 flex-shrink-0" />
            <span>{site.email}</span>
          </a>
          <div className="flex items-start gap-3 text-vm-ink-600">
            <MapPin size={16} className="text-vm-red-500 flex-shrink-0 mt-0.5" />
            <span className="text-xs leading-relaxed">{site.address}</span>
          </div>
        </div>
      </aside>
    </>
  );
}
