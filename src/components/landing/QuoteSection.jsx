import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Phone, Mail, MessageCircle } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const services = [
  "Regular Cleaning",
  "Deep Cleaning",
  "End of Lease Cleaning",
  "Carpet Cleaning",
  "Airbnb Cleaning",
  "Kitchen & Bathroom Deep Clean",
];

const propertyTypes = ["Apartment", "House", "Townhouse", "Studio", "Other"];

export default function QuoteSection() {
  const { toast } = useToast();
  const [sending, setSending] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    propertyType: "",
    message: "",
  });

  const update = (field, value) => setForm((f) => ({ ...f, [field]: value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast({
        title: "Quote request sent!",
        description: "We'll get back to you within 2 hours.",
      });
      setForm({
        name: "",
        phone: "",
        email: "",
        service: "",
        propertyType: "",
        message: "",
      });
    }, 1200);
  };

  const inputClass =
    "w-full px-5 py-4 rounded-2xl bg-[#F9FAF9] border border-[#2E7D32]/10 focus:border-[#2E7D32]/40 focus:ring-2 focus:ring-[#2E7D32]/10 outline-none transition-all duration-300 text-[#1A1A1A] placeholder:text-[#1A1A1A]/30 text-sm";

  return (
    <section id="quote" className="py-24 md:py-40 bg-[#F9FAF9]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[#2E7D32] text-sm font-semibold tracking-[0.2em] uppercase mb-4">
              Get Started
            </p>
            <h2 className="text-4xl md:text-5xl font-heading text-[#1A1A1A] mb-6 leading-tight">
              Ready to experience stress-free cleaning?
            </h2>
            <p className="text-lg text-[#1A1A1A]/60 leading-relaxed mb-10">
              Fill out the form and we'll get back to you within 2 hours with a
              personalised quote. No obligations, no pressure.
            </p>

            <div className="space-y-5">
              <a
                href="https://wa.me/61400000000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-[#2E7D32]/10 hover:border-[#2E7D32]/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#E8F5E9] flex items-center justify-center group-hover:bg-[#2E7D32] transition-colors duration-500">
                  <MessageCircle className="w-5 h-5 text-[#2E7D32] group-hover:text-white transition-colors duration-500" />
                </div>
                <div>
                  <p className="font-semibold text-[#1A1A1A] text-sm">
                    WhatsApp Us
                  </p>
                  <p className="text-xs text-[#1A1A1A]/50">
                    Quick response, easy communication
                  </p>
                </div>
              </a>
              <a
                href="tel:+61400000000"
                className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-[#2E7D32]/10 hover:border-[#2E7D32]/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#E8F5E9] flex items-center justify-center group-hover:bg-[#2E7D32] transition-colors duration-500">
                  <Phone className="w-5 h-5 text-[#2E7D32] group-hover:text-white transition-colors duration-500" />
                </div>
                <div>
                  <p className="font-semibold text-[#1A1A1A] text-sm">
                    Call Us
                  </p>
                  <p className="text-xs text-[#1A1A1A]/50">0400 000 000</p>
                </div>
              </a>
              <a
                href="mailto:hello@mgcleaningmelbourne.com.au"
                className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-[#2E7D32]/10 hover:border-[#2E7D32]/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#E8F5E9] flex items-center justify-center group-hover:bg-[#2E7D32] transition-colors duration-500">
                  <Mail className="w-5 h-5 text-[#2E7D32] group-hover:text-white transition-colors duration-500" />
                </div>
                <div>
                  <p className="font-semibold text-[#1A1A1A] text-sm">
                    Email Us
                  </p>
                  <p className="text-xs text-[#1A1A1A]/50">
                    hello@mgcleaningmelbourne.com.au
                  </p>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            onSubmit={handleSubmit}
            className="bg-white rounded-3xl p-8 md:p-10 border border-[#2E7D32]/5 shadow-xl shadow-[#2E7D32]/5"
          >
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Your name"
                required
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
                className={inputClass}
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="tel"
                  placeholder="Phone number"
                  required
                  value={form.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  className={inputClass}
                />
                <input
                  type="email"
                  placeholder="Email address"
                  required
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  className={inputClass}
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <select
                  required
                  value={form.service}
                  onChange={(e) => update("service", e.target.value)}
                  className={`${inputClass} ${!form.service ? "text-[#1A1A1A]/30" : ""}`}
                >
                  <option value="">Select service</option>
                  {services.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
                <select
                  required
                  value={form.propertyType}
                  onChange={(e) => update("propertyType", e.target.value)}
                  className={`${inputClass} ${!form.propertyType ? "text-[#1A1A1A]/30" : ""}`}
                >
                  <option value="">Property type</option>
                  {propertyTypes.map((p) => (
                    <option key={p} value={p}>
                      {p}
                    </option>
                  ))}
                </select>
              </div>
              <textarea
                placeholder="Tell us about your home and any specific needs..."
                rows={4}
                value={form.message}
                onChange={(e) => update("message", e.target.value)}
                className={`${inputClass} resize-none`}
              />
              <button
                type="submit"
                disabled={sending}
                className="w-full bg-[#2E7D32] text-white py-4 rounded-2xl font-semibold text-base hover:bg-[#256b29] transition-all duration-300 hover:shadow-xl hover:shadow-[#2E7D32]/20 disabled:opacity-60 flex items-center justify-center gap-2"
              >
                {sending ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Get My Free Quote
                  </>
                )}
              </button>
            </div>
            <p className="text-xs text-[#1A1A1A]/40 text-center mt-4">
              We respect your privacy. No spam, ever.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
