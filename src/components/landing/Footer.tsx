import Image from "next/image";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
  Clock,
} from "lucide-react";
import { SiteInfo, Course } from "@/types/Landing";
import NewsletterForm from "./NewsletterForm";

export default function Footer({
  site,
  courses,
}: {
  site: SiteInfo;
  courses: Course[];
}) {
  return (
    <footer id="contact" className="bg-vm-navy-950 text-vm-navy-100">
      <div className="vm-container py-16 grid lg:grid-cols-4 gap-10">
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3">
            <Image
              src={site.logo}
              alt={site.name}
              width={64}
              height={64}
              className="object-contain bg-white p-1 rounded-md"
            />
            <div>
              <p className="text-white font-bold text-lg">{site.name}</p>
              <p className="text-xs text-vm-gold-500">{site.tagline}</p>
            </div>
          </div>
          <p className="mt-5 text-sm leading-relaxed">
            Bangladesh's leading automotive training institute — dedicated to producing
            certified, job-ready automotive professionals.
          </p>
          <div className="mt-6 flex gap-3">
            {site.socials.facebook && (
              <a
                href={site.socials.facebook}
                aria-label="Facebook"
                target="_blank"
                rel="noreferrer"
                className="h-9 w-9 rounded-full bg-white/10 hover:bg-vm-red-500 flex items-center justify-center transition-colors"
              >
                <Facebook size={16} />
              </a>
            )}
            {site.socials.instagram && (
              <a
                href={site.socials.instagram}
                aria-label="Instagram"
                target="_blank"
                rel="noreferrer"
                className="h-9 w-9 rounded-full bg-white/10 hover:bg-vm-red-500 flex items-center justify-center transition-colors"
              >
                <Instagram size={16} />
              </a>
            )}
            {site.socials.linkedin && (
              <a
                href={site.socials.linkedin}
                aria-label="LinkedIn"
                target="_blank"
                rel="noreferrer"
                className="h-9 w-9 rounded-full bg-white/10 hover:bg-vm-red-500 flex items-center justify-center transition-colors"
              >
                <Linkedin size={16} />
              </a>
            )}
            {site.socials.youtube && (
              <a
                href={site.socials.youtube}
                aria-label="YouTube"
                target="_blank"
                rel="noreferrer"
                className="h-9 w-9 rounded-full bg-white/10 hover:bg-vm-red-500 flex items-center justify-center transition-colors"
              >
                <Youtube size={16} />
              </a>
            )}
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold text-lg">Quick Links</h4>
          <div className="h-0.5 w-10 bg-vm-red-500 mt-2" />
          <ul className="mt-5 space-y-2.5 text-sm">
            <li><Link href="#home" className="hover:text-vm-gold-500 transition-colors">Home</Link></li>
            <li><Link href="#about" className="hover:text-vm-gold-500 transition-colors">About Us</Link></li>
            <li><Link href="#courses" className="hover:text-vm-gold-500 transition-colors">Courses</Link></li>
            <li><Link href="#instructors" className="hover:text-vm-gold-500 transition-colors">Instructors</Link></li>
            <li><Link href="#faq" className="hover:text-vm-gold-500 transition-colors">FAQ</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold text-lg">Our Courses</h4>
          <div className="h-0.5 w-10 bg-vm-red-500 mt-2" />
          <ul className="mt-5 space-y-2.5 text-sm">
            {courses.map((c) => (
              <li key={c.id}>
                <Link href={c.href} className="hover:text-vm-gold-500 transition-colors">
                  {c.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold text-lg">Get in Touch</h4>
          <div className="h-0.5 w-10 bg-vm-red-500 mt-2" />
          <ul className="mt-5 space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-vm-gold-500 flex-shrink-0 mt-0.5" />
              <span>{site.address}</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-vm-gold-500 flex-shrink-0" />
              <a href={`tel:${site.phone}`} className="hover:text-vm-gold-500 transition-colors">
                {site.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-vm-gold-500 flex-shrink-0" />
              <a href={`mailto:${site.email}`} className="hover:text-vm-gold-500 transition-colors break-all">
                {site.email}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Clock size={18} className="text-vm-gold-500 flex-shrink-0" />
              <span>{site.hours}</span>
            </li>
          </ul>

          <NewsletterForm />
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="vm-container py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-vm-navy-100/70">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>
            Designed with care for Bangladesh's automotive professionals.
          </p>
        </div>
      </div>
    </footer>
  );
}
