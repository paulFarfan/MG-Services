import { motion } from "framer-motion";
import { getPublicEmployees } from "@/services/employeeService";
import EmployeeCard from "@/components/team/EmployeeCard";
const team = getPublicEmployees();

export default function TeamSection() {
  return (
    <section id="team" className="py-24 md:py-40 bg-[#F9FAF9]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-[#2E7D32] text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            Our Team
          </p>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading text-[#1A1A1A] mb-6">
            Meet the people behind the clean
          </h2>

          <p className="text-lg text-[#1A1A1A]/60 max-w-2xl mx-auto leading-relaxed">
            We believe you should know who's coming to your home. These are real
            people who genuinely care about what they do.
          </p>
        </motion.div>

        <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory -mx-6 px-6 lg:mx-0 lg:px-0 lg:grid lg:grid-cols-5 lg:overflow-visible">
          {team.map((member, i) => (
            <EmployeeCard key={member.id} employee={member} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
