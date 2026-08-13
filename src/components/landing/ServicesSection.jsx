import React from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Home,
  Key,
  Layers,
  Building2,
  CookingPot,
} from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Regular Cleaning",
    desc: "Weekly or fortnightly cleaning to keep your home consistently fresh and inviting.",
  },
  {
    icon: Sparkles,
    title: "Deep Cleaning",
    desc: "Thorough top-to-bottom cleaning that reaches every corner, crack and crevice.",
  },
  {
    icon: Key,
    title: "End of Lease Cleaning",
    desc: "Bond-back guarantee cleaning to leave your rental spotless for final inspection.",
  },
  {
    icon: Layers,
    title: "Carpet Cleaning",
    desc: "Professional steam and dry cleaning to restore your carpets to their original beauty.",
  },
  {
    icon: Building2,
    title: "Airbnb Cleaning",
    desc: "Fast turnaround cleaning between guests to maintain your 5-star rating.",
  },
  {
    icon: CookingPot,
    title: "Kitchen & Bathroom Deep Clean",
    desc: "Intensive scrubbing and sanitising of your kitchen and bathroom surfaces.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 md:py-40 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-[#2E7D32] text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            Our Services
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading text-[#1A1A1A] mb-6">
            Tailored to your home
          </h2>
          <p className="text-lg text-[#1A1A1A]/60 max-w-2xl mx-auto leading-relaxed">
            Every home is different. We offer flexible cleaning solutions
            designed around your lifestyle.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group relative bg-[#F9FAF9] rounded-3xl p-8 border border-transparent hover:border-[#2E7D32]/15 transition-all duration-500 hover:shadow-xl hover:shadow-[#2E7D32]/5 hover:-translate-y-1 cursor-pointer overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#2E7D32]/3 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700" />
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-[#E8F5E9] flex items-center justify-center mb-5 group-hover:bg-[#2E7D32] transition-colors duration-500">
                  <s.icon className="w-5 h-5 text-[#2E7D32] group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="text-xl font-heading text-[#1A1A1A] mb-3">
                  {s.title}
                </h3>
                <p className="text-[#1A1A1A]/60 leading-relaxed text-[0.95rem]">
                  {s.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
