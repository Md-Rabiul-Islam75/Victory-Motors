import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import PageHero from "@/components/landing/PageHero";
import ContactForm from "@/components/landing/ContactForm";
import { landingContent } from "@/data/landing";

export const metadata = {
  title: "Contact Us — Victory Motors",
  description:
    "Get in touch with Victory Motors for course enquiries, admissions and corporate training.",
};

export default function ContactPage() {
  const { site } = landingContent;
  const cards = [
    {
      icon: Phone,
      title: "Call Us",
      lines: [site.phone],
      href: `tel:${site.phone}`,
    },
    {
      icon: Mail,
      title: "Email",
      lines: [site.email],
      href: `mailto:${site.email}`,
    },
    {
      icon: MapPin,
      title: "Our Location",
      lines: site.address.split(",").map((s) => s.trim()),
    },
    {
      icon: Clock,
      title: "Office Hours",
      lines: [site.hours],
    },
  ];

  return (
    <main className="bg-white">
      <PageHero
        title="Contact Us"
        subtitle="Have a question about a course, admission or a corporate training? We'd love to hear from you."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Contact Us" },
        ]}
      />

      <section className="vm-section">
        <div className="vm-container">
          <div className="text-center">
            <span className="text-vm-red-500 font-semibold tracking-widest uppercase text-sm">
              Get in Touch
            </span>
            <h2 className="mt-2 vm-section-title">Touch in {site.name}</h2>
            <div className="vm-divider" />
            <p className="vm-section-subtitle">
              Reach out through any of the channels below — or drop us a message and our admissions team will get back to you within one business day.
            </p>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {cards.map(({ icon: Icon, title, lines, href }) => {
              const content = (
                <div className="vm-card h-full p-6 text-center">
                  <div className="mx-auto inline-flex items-center justify-center h-14 w-14 rounded-xl bg-vm-red-500 text-white">
                    <Icon size={26} />
                  </div>
                  <h3 className="mt-4 font-bold text-vm-navy-900 uppercase tracking-wider text-sm">
                    {title}
                  </h3>
                  <div className="mt-2 space-y-0.5 text-sm text-vm-ink-600">
                    {lines.map((l, i) => (
                      <p key={i}>{l}</p>
                    ))}
                  </div>
                </div>
              );
              return href ? (
                <a key={title} href={href} className="block">
                  {content}
                </a>
              ) : (
                <div key={title}>{content}</div>
              );
            })}
          </div>

          <div className="mt-16 grid lg:grid-cols-5 gap-10 items-start">
            <div className="lg:col-span-2 bg-vm-navy-900 text-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold">Visit Our Campus</h3>
              <div className="h-1 w-12 bg-vm-red-500 rounded-full mt-3" />
              <p className="mt-5 text-vm-navy-100 text-sm leading-relaxed">
                Our campus combines modern classrooms with a fully-equipped workshop floor — come visit, sit in on a class and meet the instructors before you enroll.
              </p>

              <div className="mt-6 space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin size={20} className="text-vm-gold-500 flex-shrink-0 mt-0.5" />
                  <span>{site.address}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={20} className="text-vm-gold-500 flex-shrink-0" />
                  <a href={`tel:${site.phone}`} className="hover:text-vm-gold-500 transition-colors">
                    {site.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={20} className="text-vm-gold-500 flex-shrink-0" />
                  <a href={`mailto:${site.email}`} className="hover:text-vm-gold-500 transition-colors break-all">
                    {site.email}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Clock size={20} className="text-vm-gold-500 flex-shrink-0" />
                  <span>{site.hours}</span>
                </div>
              </div>

              <div className="mt-8">
                <p className="text-xs uppercase tracking-widest text-vm-gold-500">Follow Us</p>
                <div className="mt-3 flex gap-3">
                  {site.socials.facebook && (
                    <a href={site.socials.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="h-9 w-9 rounded-full bg-white/10 hover:bg-vm-red-500 flex items-center justify-center transition-colors">
                      <Facebook size={16} />
                    </a>
                  )}
                  {site.socials.instagram && (
                    <a href={site.socials.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="h-9 w-9 rounded-full bg-white/10 hover:bg-vm-red-500 flex items-center justify-center transition-colors">
                      <Instagram size={16} />
                    </a>
                  )}
                  {site.socials.linkedin && (
                    <a href={site.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="h-9 w-9 rounded-full bg-white/10 hover:bg-vm-red-500 flex items-center justify-center transition-colors">
                      <Linkedin size={16} />
                    </a>
                  )}
                  {site.socials.youtube && (
                    <a href={site.socials.youtube} target="_blank" rel="noreferrer" aria-label="YouTube" className="h-9 w-9 rounded-full bg-white/10 hover:bg-vm-red-500 flex items-center justify-center transition-colors">
                      <Youtube size={16} />
                    </a>
                  )}
                </div>
              </div>
            </div>

            <div className="lg:col-span-3 bg-vm-ink-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-vm-navy-900">Send a Message</h3>
              <div className="h-1 w-12 bg-vm-red-500 rounded-full mt-3" />
              <p className="mt-4 text-sm text-vm-ink-600">
                Fill in the form below — required fields are marked with a focus underline.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
