"use client";

import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <section id="about" className="py-32 bg-white selection:bg-[#336443]/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-3xl overflow-hidden aspect-[4/3] relative group"
          >
            <div className="absolute inset-0 bg-[#336443]/10 z-10 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-0" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
              alt="Modern office managed by Amaze PMS"
              className="object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </motion.div>

          {/* Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-sm font-semibold tracking-widest text-[#336443] uppercase mb-3">
                The Action Group
              </p>
              <h2 className="text-3xl md:text-5xl font-medium mb-6 text-[#1f2a1d] tracking-tight">
                Excellence in <br />
                Facility Management.
              </h2>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[#1f2a1d] text-lg leading-relaxed mb-10 max-w-xl"
            >
              Amaze PMS Pvt Ltd is the Property Management arm of the ACTION
              GROUP of Companies, founded in 2001 by Mr. Subhani Abdul — a
              veteran of the Indian Navy. We deliver comprehensive, in-house
              facility management across India with uncompromising standards.
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4">
              {[
                "15,000+ strong workforce",
                "200+ clients PAN India",
                "All services delivered in-house",
                "Founded by a Navy veteran",
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + (i * 0.1) }}
                  className="flex items-center gap-3"
                >
                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#f0f4eb]">
                    <CheckCircle2 className="h-4 w-4 text-[#336443]" />
                  </div>
                  <span className="text-[#1f2a1d] text-sm font-medium">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
