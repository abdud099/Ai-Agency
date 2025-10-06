"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

import Image from "next/image";
import MegaMenuMobile from "./MegaMenuMobile";
import Link from "next/link";

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState("En");

  const toggleLanguage = (lang: string) => {
    setLanguage(lang);
  };

  return (
    <div className="lg:hidden fixed top-4 left-1/2 -translate-x-1/2 z-[1000] w-[92%] max-w-6xl">
      {/* Navbar Header */}
      <div className="flex items-center justify-between px-5 py-3 rounded-full bg-transparent backdrop-blur-2xl shadow-md border border-white/40">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center gap-2">
            <Image
              src="/images/icons/logo.png"
              alt="BeTomorrow"
              width={28}
              height={28}
              className="rounded-md"
            />
            <span className="font-semibold text-xl text-[#0a1628]">
              BeTomorrow
            </span>
          </div>
        </Link>

        {/* Right Controls */}
        <div className="flex items-center gap-3">
          {/* Language Toggle */}
          <Button
            variant="outline"
            size="sm"
            className="rounded-full border-gray-300 bg-white text-[#0a1628]"
            onClick={() => setLanguage(language === "En" ? "Fr" : "En")}
          >
            {language}
          </Button>

          {/* Menu Button */}
          <Button
            variant="outline"
            size="icon"
            className="rounded-full border-gray-300 bg-white"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>
      </div>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="mt-3 rounded-3xl bg-white/90 backdrop-blur-md shadow-xl border border-gray-200 overflow-hidden px-6 py-6"
          >
            {/* Menu Content */}
            <div className="flex flex-col gap-6">
              <MegaMenuMobile />

              {/* Let's Talk AI */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 text-base font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#4f46e5] to-[#f97316]"
              >
                <Sparkles className="w-4 h-4 text-[#4f46e5]" />
                Let&apos;s talk <span className="text-[#f97316]">AI</span>
              </motion.button>

              {/* CTA Button */}
              <a href="#contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="w-full rounded-full py-3 bg-gradient-to-r from-[#0e0d76] to-[#1e1b4b] text-white font-semibold shadow-md"
                >
                  Start your project
                </motion.button>
              </a>

              {/* Language Switch */}
              <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                {["En", "Fr"].map((lang) => (
                  <button
                    key={lang}
                    onClick={() => toggleLanguage(lang)}
                    className={`px-4 py-2 text-sm rounded-full border ${
                      lang === language
                        ? "bg-[#335bff] text-white border-transparent"
                        : "border-gray-300 text-[#0a1628]"
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileNav;
