"use client";

import { useEffect, useState } from "react";
import { MessageCircle, ArrowUp } from "lucide-react";
import { SiteInfo } from "@/types/Landing";

export default function FloatingActions({ site }: { site: SiteInfo }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <a
        href="/contact"
        className="fixed right-5 bottom-24 z-30 hidden md:flex h-20 w-20 rounded-full bg-vm-gold-500 text-vm-navy-900 font-bold text-sm items-center justify-center text-center shadow-2xl hover:scale-110 transition-transform"
      >
        <span className="leading-tight">For<br />Enquiry</span>
      </a>

      {site.socials.whatsapp && (
        <a
          href={site.socials.whatsapp}
          target="_blank"
          rel="noreferrer"
          aria-label="WhatsApp"
          className="fixed left-5 bottom-5 z-30 h-12 w-12 rounded-full bg-green-500 text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
        >
          <MessageCircle size={22} />
        </a>
      )}

      <button
        onClick={toTop}
        aria-label="Back to top"
        className={`fixed right-5 bottom-5 z-30 h-12 w-12 rounded-full bg-vm-red-500 text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-all ${
          show ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <ArrowUp size={22} />
      </button>
    </>
  );
}
