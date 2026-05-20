"use client";

import { ArrowRight } from "lucide-react";

export default function NewsletterForm() {
  return (
    <form className="mt-6 flex" onSubmit={(e) => e.preventDefault()}>
      <input
        type="email"
        placeholder="Your email"
        aria-label="Email for newsletter"
        className="flex-1 bg-white/10 border border-white/20 px-4 py-2.5 rounded-l-md text-sm focus:outline-none focus:border-vm-gold-500"
      />
      <button
        type="submit"
        className="bg-vm-red-500 hover:bg-vm-red-600 px-4 rounded-r-md transition-colors"
        aria-label="Subscribe"
      >
        <ArrowRight size={18} />
      </button>
    </form>
  );
}
