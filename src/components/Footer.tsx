// components/ShortcutSection.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

export default function ShortcutSection() {
  return (
    <section className="relative overflow-hidden bg-grid">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-20 lg:py-28">
        {/* Newsletter Section */}
        <div className="flex flex-col lg:flex-row items-start gap-8">
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 max-w-2xl"
          >
            <h3 className="text-4xl sm:text-5xl md:text-6xl font-light">GET</h3>
            <h4 className="italic text-4xl sm:text-5xl md:text-6xl font-extralight tracking-wide mt-2">
              — SHORTCUT!
            </h4>

            <p className="mt-4 text-sm md:text-base font-bold">
              A compilation of best practices in digital innovation.
            </p>
            <p className="text-sm md:text-base text-gray-500 mt-1">
              Shortcut is BeTomorrow&apos;s quarterly newsletter.
            </p>
          </motion.div>

          {/* Newsletter Form */}
          <motion.form
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="w-full lg:w-[480px]"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Newsletter submitted (demo)");
            }}
          >
            <div className="flex flex-col gap-4">
              <input
                placeholder="Your name"
                className="w-full rounded-full h-12 px-6 bg-white/90 border border-white/50 focus:outline-none focus:ring-0"
              />
              <div className="flex gap-3">
                <input
                  placeholder="Your e-mail"
                  className="flex-1 rounded-full h-12 px-6 bg-white/90 border border-white/50 focus:outline-none focus:ring-0"
                />
                <button
                  type="submit"
                  className="rounded-full h-12 px-6 bg-[#e6eefb] text-[#081227] font-medium shadow hover:scale-105 transition-transform"
                >
                  Confirm →
                </button>
              </div>
            </div>
          </motion.form>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-black/30" />

        {/* Middle Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 font-extralight tracking-tight leading-[0.9]"
          >
            <span className="block text-[3.5rem] sm:text-[5rem] md:text-[7rem]">
              LET&apos;S BUILD
            </span>
            <span className="block text-[3.5rem] sm:text-[5rem] md:text-[7rem]">
              TOMORROW
            </span>
            <span className="block text-[3.5rem] sm:text-[5rem] md:text-[7rem]">
              TOGETHER
            </span>
          </motion.h1>

          {/* Right: Links + CTA */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Desktop Links */}
            <div className="flex justify-end gap-12 ">
              <div>
                <h5 className="text-lg font-semibold text-gray-500 mb-3">
                  PAGES
                </h5>
                <ul className="space-y-3 text-xl">
                  {[
                    "Our vision",
                    "Projects",
                    "Team",
                    "Resources",
                    "Join us",
                  ].map((item) => (
                    <li key={item} className="hover:underline cursor-pointer">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h5 className="text-lg font-semibold text-gray-500 mb-3">
                  FOLLOW US
                </h5>
                <ul className="space-y-3 text-xl">
                  {["LinkedIn ↗", "Dribbble ↗", "Instagram ↗"].map((item) => (
                    <li key={item} className="hover:underline cursor-pointer">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="self-end rounded-full bg-[#0f2340] text-white px-8 py-4 shadow-lg hover:shadow-xl transition"
              onClick={() => alert(`Let's talk (demo)`)}
            >
              Let&apos;s talk about it →
            </motion.button>
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="my-10 border-t border-black/30" />

        {/* Footer */}
        <footer className="flex flex-col md:flex-row items-center justify-between text-[#0a1628] gap-4 md:gap-0">
          {/* Left */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2">
              <Image
                src="/images/icons/logo.png"
                alt="BeTomorrow Logo"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <span className="font-semibold text-2xl">BeTomorrow</span>
              <span className="font-light text-3xl px-4">|</span>
              <span className="font-extrabold text-xl px-4">bpifrance</span>
            </div>
            <p className="text-sm mt-3 leading-snug md:leading-normal">
              BeTomorrow is a member of <br className="hidden md:block" />
              <span className="font-bold text-sm md:text-lg">
                BPI EXCELLENCE club
              </span>
            </p>
          </div>

          {/* Right Section */}
          <div className="flex flex-col md:flex-row gap-2 md:gap-6 md:items-center justify-center text-sm mt-3 md:mt-0">
            <a href="#" className="hover:underline">
              LEGAL NOTICE
            </a>
            <a href="#" className="hover:underline">
              PRIVACY POLICY
            </a>
            <span>2025 © BETOMORROW</span>
          </div>
        </footer>
      </div>
    </section>
  );
}
