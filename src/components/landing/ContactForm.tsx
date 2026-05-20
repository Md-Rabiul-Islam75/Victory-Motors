"use client";

import { useState } from "react";
import { Send } from "lucide-react";

type FormState = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

const empty: FormState = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(empty);
  const [submitted, setSubmitted] = useState(false);

  const update = (key: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm(empty);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div className="relative">
          <input
            type="text"
            required
            value={form.name}
            onChange={update("name")}
            placeholder=" "
            className="peer w-full border-0 border-b-2 border-vm-ink-200 bg-transparent py-3 focus:outline-none focus:border-vm-red-500 text-vm-navy-900"
          />
          <label className="absolute left-0 top-3 text-vm-ink-400 pointer-events-none transition-all peer-focus:-top-3 peer-focus:text-xs peer-focus:text-vm-red-500 peer-[:not(:placeholder-shown)]:-top-3 peer-[:not(:placeholder-shown)]:text-xs">
            Your Name
          </label>
        </div>
        <div className="relative">
          <input
            type="email"
            required
            value={form.email}
            onChange={update("email")}
            placeholder=" "
            className="peer w-full border-0 border-b-2 border-vm-ink-200 bg-transparent py-3 focus:outline-none focus:border-vm-red-500 text-vm-navy-900"
          />
          <label className="absolute left-0 top-3 text-vm-ink-400 pointer-events-none transition-all peer-focus:-top-3 peer-focus:text-xs peer-focus:text-vm-red-500 peer-[:not(:placeholder-shown)]:-top-3 peer-[:not(:placeholder-shown)]:text-xs">
            Your Email
          </label>
        </div>
        <div className="relative">
          <input
            type="tel"
            value={form.phone}
            onChange={update("phone")}
            placeholder=" "
            className="peer w-full border-0 border-b-2 border-vm-ink-200 bg-transparent py-3 focus:outline-none focus:border-vm-red-500 text-vm-navy-900"
          />
          <label className="absolute left-0 top-3 text-vm-ink-400 pointer-events-none transition-all peer-focus:-top-3 peer-focus:text-xs peer-focus:text-vm-red-500 peer-[:not(:placeholder-shown)]:-top-3 peer-[:not(:placeholder-shown)]:text-xs">
            Your Phone
          </label>
        </div>
        <div className="relative">
          <input
            type="text"
            value={form.subject}
            onChange={update("subject")}
            placeholder=" "
            className="peer w-full border-0 border-b-2 border-vm-ink-200 bg-transparent py-3 focus:outline-none focus:border-vm-red-500 text-vm-navy-900"
          />
          <label className="absolute left-0 top-3 text-vm-ink-400 pointer-events-none transition-all peer-focus:-top-3 peer-focus:text-xs peer-focus:text-vm-red-500 peer-[:not(:placeholder-shown)]:-top-3 peer-[:not(:placeholder-shown)]:text-xs">
            Your Subject
          </label>
        </div>
      </div>

      <div className="relative">
        <textarea
          required
          rows={5}
          value={form.message}
          onChange={update("message")}
          placeholder=" "
          className="peer w-full border-0 border-b-2 border-vm-ink-200 bg-transparent py-3 focus:outline-none focus:border-vm-red-500 text-vm-navy-900 resize-none"
        />
        <label className="absolute left-0 top-3 text-vm-ink-400 pointer-events-none transition-all peer-focus:-top-3 peer-focus:text-xs peer-focus:text-vm-red-500 peer-[:not(:placeholder-shown)]:-top-3 peer-[:not(:placeholder-shown)]:text-xs">
          Your Message
        </label>
      </div>

      <div className="flex items-center gap-4 pt-2">
        <button type="submit" className="vm-btn-primary">
          Send Message <Send size={16} />
        </button>
        {submitted && (
          <span className="text-sm font-medium text-emerald-600">
            ✓ Thanks — we&apos;ll be in touch shortly.
          </span>
        )}
      </div>
    </form>
  );
}
