"use client";

import {
  ShieldCheck,
  Building2,
  Wrench,
  Leaf,
  Bug,
  HeadphonesIcon,
  Car,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: ShieldCheck,
    title: "Security Services",
    description:
      "Trained personnel and surveillance systems to protect your premises around the clock.",
  },
  {
    icon: Building2,
    title: "House Keeping",
    description:
      "Daily cleaning, deep cleaning, and upkeep for offices, residential complexes, and commercial spaces.",
  },
  {
    icon: Wrench,
    title: "Technical Services",
    description:
      "Mechanical, electrical, and plumbing maintenance handled by skilled in-house technicians.",
  },
  {
    icon: Leaf,
    title: "Landscaping",
    description:
      "Garden design, lawn care, and green space management for corporate and residential properties.",
  },
  {
    icon: Bug,
    title: "Pest Control",
    description:
      "Scheduled and emergency pest management to keep your environment safe and hygienic.",
  },
  {
    icon: HeadphonesIcon,
    title: "Help Desk",
    description:
      "Centralised issue tracking and resolution so nothing falls through the cracks.",
  },
  {
    icon: Car,
    title: "Parking Management",
    description:
      "Organised parking operations for commercial complexes and gated communities.",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-32 bg-[#f7f9f5] relative overflow-hidden">
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 rounded-full bg-[#e8efe5]/50 blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h2 className="text-3xl md:text-5xl font-medium mb-6 text-[#1f2a1d] tracking-tight">
              End-to-end facility <br />
              services, <span className="text-[#336443] italic">in-house.</span>
            </h2>
            <p className="text-[#1f2a1d] text-lg">
              We deliver every core service through our own trained teams. No fragmentation, no contractor delays.
            </p>
          </motion.div>
          <motion.a 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            href="#contact" 
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#336443] hover:text-[#1f2a1d] transition-colors group"
          >
            View all services
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-8 rounded-3xl bg-white border border-[#e4e9df]/50 hover:border-[#a4cfa9]/50 transition-colors"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#f7f9f5] to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />
              
              <div className="relative z-10">
                <div className="h-12 w-12 rounded-2xl bg-[#f0f4eb] group-hover:bg-[#336443] group-hover:text-white transition-colors duration-300 flex items-center justify-center mb-6 text-[#336443]">
                  <service.icon className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-medium text-[#1f2a1d] mb-3 group-hover:text-[#336443] transition-colors">
                  {service.title}
                </h3>
                <p className="text-[#1f2a1d] text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
