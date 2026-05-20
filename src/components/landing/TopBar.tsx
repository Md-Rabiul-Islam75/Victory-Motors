import { Mail, Phone, Clock, ShieldCheck } from "lucide-react";
import { SiteInfo } from "@/types/Landing";

export default function TopBar({ site }: { site: SiteInfo }) {
  return (
    <div className="hidden md:block bg-vm-navy-900 text-white text-sm">
      <div className="vm-container flex flex-wrap items-center justify-between gap-3 py-2.5">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-1">
          <a
            href={`mailto:${site.email}`}
            className="flex items-center gap-2 hover:text-vm-gold-400 transition-colors"
          >
            <Mail size={16} />
            <span>{site.email}</span>
          </a>
          <a
            href={`tel:${site.phone}`}
            className="flex items-center gap-2 hover:text-vm-gold-400 transition-colors"
          >
            <Phone size={16} />
            <span>{site.phone}</span>
          </a>
          <span className="hidden md:flex items-center gap-2">
            <Clock size={16} />
            <span>{site.hours}</span>
          </span>
        </div>
        <a
          href="#verify"
          className="flex items-center gap-2 border border-white/40 hover:bg-white hover:text-vm-navy-900 px-3 py-1.5 rounded-md transition-colors"
        >
          <ShieldCheck size={16} />
          <span>Certificate Verification</span>
        </a>
      </div>
    </div>
  );
}
