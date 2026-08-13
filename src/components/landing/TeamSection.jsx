import React from "react";
import { motion } from "framer-motion";

const team = [
  {
    name: "Sarah Mitchell",
    role: "Senior Cleaner",
    years: 6,
    languages: ["English", "Mandarin"],
    tags: ["Detail Oriented", "Pet Friendly", "Deep Cleaning Expert"],
    photo: "images/Sarah.png",
    bio: "Sarah brings meticulous attention to detail and a warm smile to every home she cleans.",
  },
  {
    name: "Marco Rossi",
    role: "Cleaning Specialist",
    years: 4,
    languages: ["English", "Italian"],
    tags: ["Friendly", "Reliable", "Kitchen Expert"],
    photo: "images/Marco.png",
    bio: "Marco's dedication to quality and his friendly nature make him a favourite among our clients.",
  },
  {
    name: "Priya Sharma",
    role: "Team Lead",
    years: 7,
    languages: ["English", "Hindi", "Tamil"],
    tags: ["Detail Oriented", "Eco Cleaning Expert", "Reliable"],
    photo: "images/Priya.jpg",
    bio: "Priya leads our team with passion and ensures every client receives five-star service.",
  },
  {
    name: "James Cooper",
    role: "Cleaning Specialist",
    years: 3,
    languages: ["English"],
    tags: ["Pet Friendly", "Friendly", "End of Lease Expert"],
    photo: "images/James.png",
    bio: "James is known for his positive energy and thorough approach to every cleaning task.",
  },
  {
    name: "Emma Williams",
    role: "Senior Cleaner",
    years: 5,
    languages: ["English", "French"],
    tags: ["Detail Oriented", "Airbnb Specialist", "Reliable"],
    photo: "images/Emma.jpg",
    bio: "Emma's experience with Airbnb turnovers and her eye for detail make every space guest-ready.",
  },
];

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
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="min-w-[280px] snap-center lg:min-w-0 bg-white rounded-3xl overflow-hidden border border-[#2E7D32]/5 hover:border-[#2E7D32]/15 transition-all duration-500 hover:shadow-xl hover:shadow-[#2E7D32]/5 hover:-translate-y-1 group"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-heading text-[#1A1A1A] mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-[#2E7D32] font-medium mb-1">
                  {member.role}
                </p>
                <p className="text-xs text-[#1A1A1A]/50 mb-4">
                  {member.years} years experience ·{" "}
                  {member.languages.join(", ")}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {member.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full bg-[#E8F5E9] text-[#2E7D32] font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-[#1A1A1A]/50 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
