import React from "react";
import { motion } from "framer-motion";
import { MessageSquare, Users, Smile } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    num: "01",
    title: "Request a Quote",
    desc: "Tell us about your home, your needs, and your preferred schedule. It takes less than two minutes.",
  },
  {
    icon: Users,
    num: "02",
    title: "Meet Your Cleaner",
    desc: "You'll know who's coming before the appointment. No strangers, no surprises.",
  },
  {
    icon: Smile,
    num: "03",
    title: "Enjoy Your Clean Home",
    desc: "Relax while we take care of everything. Come home to a space that feels brand new.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 md:py-40 bg-white">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-[#2E7D32] text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            How It Works
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading text-[#1A1A1A] mb-6">
            Simple as 1, 2, 3
          </h2>
          <p className="text-lg text-[#1A1A1A]/60 max-w-xl mx-auto leading-relaxed">
            Getting started is effortless. We handle the details so you don't
            have to.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="text-center relative"
            >
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-px bg-[#2E7D32]/15" />
              )}
              <div className="w-20 h-20 rounded-full bg-[#E8F5E9] flex items-center justify-center mx-auto mb-6 relative">
                <step.icon className="w-8 h-8 text-[#2E7D32]" />
                <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#2E7D32] text-white text-xs font-bold flex items-center justify-center">
                  {step.num}
                </span>
              </div>
              <h3 className="text-2xl font-heading text-[#1A1A1A] mb-3">
                {step.title}
              </h3>
              <p className="text-[#1A1A1A]/60 leading-relaxed max-w-xs mx-auto">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
