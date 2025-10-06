"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronDown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import Image from "next/image";
import MegaMenu from "./NavItem";
import Link from "next/link";
import MobileNav from "./MobileNav";

export const Navigation = () => {
  const [langOpen, setLangOpen] = useState(false);
  const [language, setLanguage] = useState("En");
  const [scrolled, setScrolled] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const { scrollY } = useScroll();
  const navOpacity = useTransform(scrollY, [0, 100], [0.95, 1]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Scroll hide/show navbar
  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      setShowNav(!(current > lastScroll && current > 50));
      setLastScroll(current);
      setScrolled(current > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleLanguage = (lang: string) => {
    setLanguage(lang);
    setLangOpen(false);
  };

  return (
    <AnimatePresence>
      {showNav && (
        <>
          <motion.nav
            style={{ opacity: navOpacity }}
            initial={{ y: -80 }}
            animate={{ y: 0 }}
            exit={{ y: -80 }}
            transition={{ duration: 0.3 }}
            className={`fixed top-4 left-1/2 -translate-x-1/2 z-[999] flex items-center justify-between w-[92%] max-w-6xl ${scrolled}`}
          >
            {/* Logo */}
            <Link href="/">
              <div className="hidden md:flex items-center gap-2">
                <Image
                  src="/images/icons/logo.png"
                  alt="BeTomorrow"
                  width={28}
                  height={28}
                  className="rounded-md"
                />
                <span className="font-bold text-xl text-[#0a1628]">
                  BeTomorrow
                </span>
              </div>
            </Link>

            {/* Nav links */}
            <div className="bg-white rounded-full px-8 py-4 hidden lg:flex gap-6 items-center shadow-lg/30">
              <MegaMenu />

              {/* Let's talk AI */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-1 text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#4f46e5] to-[#f97316] hover:opacity-80 transition cursor-pointer"
              >
                <motion.span
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Sparkles className="w-4 h-4 text-[#4f46e5]" />
                </motion.span>
                Let&apos;s talk <span className="text-[#f97316]">AI</span>
              </motion.button>
            </div>

            {/* Right side */}
            <div
              className="hidden md:flex items-center gap-3"
              ref={dropdownRef}
            >
              {/* CTA button */}
              <a href="#contact">
                <motion.button
                  whileHover={{ scale: 1.07, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="relative rounded-full px-8 py-4 bg-gradient-to-r from-[#0e0d76] to-[#1e1b4b] text-white font-semibold shadow-lg overflow-hidden group"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
                  <span className="relative tracking-wide cursor-pointer">
                    Start your project
                  </span>
                </motion.button>
              </a>

              {/* Language dropdown */}
              <div className="relative">
                {/* Language Button */}
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-full border-gray-300 bg-white text-[#0a1628] flex items-center"
                  onClick={() => setLangOpen(!langOpen)}
                >
                  {language}
                  <ChevronDown
                    className={`ml-1 w-4 h-4 transition-transform duration-200 ${
                      langOpen ? "rotate-180" : ""
                    }`}
                  />
                </Button>

                {/* Dropdown */}
                <AnimatePresence>
                  {langOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 mt-2 w-24 bg-white border border-gray-200 rounded-xl shadow-md z-[1000] overflow-hidden"
                    >
                      {["En", "Fr"].map((lang) => (
                        <button
                          key={lang}
                          onClick={() => toggleLanguage(lang)}
                          className={`block w-full px-4 py-2 text-sm text-left hover:bg-gray-100 ${
                            lang === language
                              ? "font-semibold text-[#335bff]"
                              : ""
                          }`}
                        >
                          {lang}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.nav>

          {/* Mobile Navigation */}
          <MobileNav />
        </>
      )}
    </AnimatePresence>
  );
};
