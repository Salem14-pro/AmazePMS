"use client";

import { Sparkles, Play } from "lucide-react";
import BoomerangVideoBg from "./boomerang-video-bg";
import { motion } from "framer-motion";

const BG_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260511_131941_d136af49-e243-493a-be14-6ff3f24e09e6.mp4";

export function HeroSection() {
  return (
    <section className="relative w-full min-h-screen sm:h-screen overflow-hidden bg-[#1f2a1d]">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full"
      >
        <BoomerangVideoBg
          src={BG_VIDEO}
          className="absolute inset-0 w-full h-full opacity-90 mix-blend-screen"
        />
        {/* Soft overlay gradient for better text readability and premium feel */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1f2a1d]/80 via-transparent to-transparent pointer-events-none" />
      </motion.div>

      {/* Hero copy — centered */}
      <div className="relative z-10 flex flex-col items-center text-center pt-28 sm:pt-36 md:pt-40 px-4 sm:px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="font-normal leading-[0.95] text-white text-[2rem] sm:text-4xl md:text-5xl lg:text-[4.75rem] xl:text-[5.25rem] max-w-5xl tracking-tight"
          style={{
            fontFamily:
              '"Neue Haas Grotesk Display Pro 55 Roman", "Neue Haas Grotesk Text Pro", "Helvetica Neue", Helvetica, Arial, sans-serif',
          }}
        >
          Spaces that work,{" "}
          <span className="text-[#a4cfa9] italic font-light">
            people who
            <br className="hidden sm:block" /> make it happen
          </span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
          className="mt-6 sm:mt-8 text-white/70 text-sm sm:text-base md:text-lg leading-relaxed max-w-md px-2"
        >
          Security, housekeeping, technical services and more — managed in-house
          by a 15,000+ workforce across India.
        </motion.p>
      </div>

      {/* Bottom-left CTA block */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
        className="absolute left-4 right-4 sm:right-auto sm:left-6 md:left-10 bottom-6 sm:bottom-8 md:bottom-10 z-10 max-w-sm"
      >
        <div className="flex items-center gap-2 text-[#a4cfa9] mb-3">
          <Sparkles className="w-4 h-4" />
          <span className="text-sm font-medium tracking-wide uppercase text-xs">
            Integrated Solutions
          </span>
        </div>
        <p className="text-white/80 text-xs leading-relaxed mb-6 max-w-xs font-normal">
          Amaze PMS brings every facility service under one roof — security,
          cleaning, MEP, landscaping — so you deal with one team, not ten
          vendors.
        </p>
        <div className="flex items-center gap-4 flex-wrap">
          <a
            href="#contact"
            className="group relative inline-flex h-11 items-center justify-center overflow-hidden rounded-full bg-white px-6 font-medium text-[#1f2a1d] transition-transform active:scale-95"
          >
            <span className="absolute inset-0 bg-[#f0f4fa] translate-y-full transition-transform duration-300 group-hover:translate-y-0" style={{ transitionTimingFunction: 'cubic-bezier(0.76,0,0.24,1)' }}></span>
            <span className="relative text-sm font-semibold">Get a Quote</span>
          </a>
          <a
            href="#about"
            className="text-white text-sm font-medium hover:text-[#a4cfa9] transition-colors"
          >
            Learn More
          </a>
        </div>
      </motion.div>

      {/* Bottom-right video link */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
        className="hidden sm:flex absolute right-6 md:right-10 bottom-8 md:bottom-10 z-10 items-center gap-3 text-white/90 text-sm group cursor-pointer"
      >
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 backdrop-blur-md border border-white/20 group-hover:bg-white/20 transition-all duration-300">
          <Play className="w-3.5 h-3.5 fill-white text-white ml-0.5" />
        </div>
        <span className="font-medium group-hover:text-white transition-colors">See how we operate</span>
        <span className="text-white/40 font-mono text-xs">2:10</span>
      </motion.div>
    </section>
  );
}
