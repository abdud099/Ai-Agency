"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

// ───────────────────────────────────────────────
// Menu Data
// ───────────────────────────────────────────────
export const menuData = [
  {
    label: "Agency",
    content: [
      {
        title: "AGENCY",
        links: ["Our Vision", "Innovation", "Our Story", "Our Team", "Join Us"],
      },
    ],
    image: "/images/banners/visuel_agence.png",
  },
  {
    label: "Industries",
    content: [
      {
        title: "INDUSTRIES",
        links: [
          "Industry",
          "Health",
          "Mobility",
          "Education",
          "Media",
          "Bank - Insurance",
          "Sport",
        ],
      },
    ],
    image: "/images/banners/visuel_secteur.png",
  },
  {
    label: "Expertise",
    content: [
      {
        title: "EXPERTISE",
        links: [
          "Tech",
          "Product Management",
          "Product Design",
          "Agility",
          "Product Marketing",
        ],
      },
      {
        title: "OUR EXPERTISE TECH",
        links: [
          "Mobile Application Development",
          "Artificial Intelligence",
          "Data & Tech Consulting",
          "Web Development",
          "IoT",
          "Cloud Native Consulting",
          "R&D",
          "Creative Dev & 3D",
        ],
      },
    ],
    image: "/images/banners/visuel_expertise.png",
  },
  {
    label: "Our Projects",
  },
  {
    label: "Resources",
    content: [
      {
        title: "BY TYPE",
        links: [
          "All",
          "Article",
          "Webinar",
          "E-book",
          "Use Case",
          "Document",
          "Event",
        ],
      },
      {
        title: "BY EXPERTISE",
        links: [
          "Tech",
          "Product Management",
          "Product Design",
          "Agility",
          "Product Marketing",
        ],
      },
    ],
    image: "/images/banners/visuel_ressources.png",
  },
];

// ───────────────────────────────────────────────
// NavItem Component
// ───────────────────────────────────────────────
const NavItem = ({
  label,
  content,
  image,
}: {
  label: React.ReactNode;
  content?: { title: string; links: string[] }[];
  image?: string;
}) => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className="relative"
      onMouseEnter={() => content && setOpen(true)}
      onMouseLeave={() => content && setOpen(false)}
      ref={menuRef}
    >
      <button className="text-sm font-medium text-gray-800 hover:text-[#335bff] transition-colors flex items-center gap-1 cursor-pointer">
        {label}
        {content && <ChevronDown className="w-4 h-4" />}
      </button>

      <AnimatePresence>
        {open && content && (
          <motion.div
            initial={{ opacity: 0, y: -15, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.98 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed left-1/2 top-24 -translate-x-1/2 w-[92%] max-w-7xl bg-white rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.08)] border border-gray-100 z-50 overflow-hidden backdrop-blur-md"
          >
            <div className="grid grid-cols-1 md:grid-cols-[1.6fr_1fr] gap-10 p-8 md:p-12">
              {/* Left Content */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                {content.map((section) => (
                  <div key={section.title}>
                    <h4 className="text-gray-500 uppercase tracking-wider text-sm font-semibold mb-4">
                      {section.title}
                    </h4>
                    <ul className="space-y-3">
                      {section.links.map((link: string) => (
                        <li key={link}>
                          <a
                            href="#"
                            className="block text-base font-semibold text-gray-900 hover:text-[#335bff] transition-all duration-200 group"
                          >
                            {link}
                            <span className="block w-0 group-hover:w-full h-[2px] bg-[#335bff] transition-all duration-300 mt-1"></span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Right Image */}
              {image && (
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 30 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="hidden md:flex items-center justify-center relative"
                >
                  <div className="relative w-[504px] h-[334px] rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-300 ease-out">
                    <Image
                      src={image}
                      alt="Menu Visual"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// ───────────────────────────────────────────────
// Desktop MegaMenu
// ───────────────────────────────────────────────
export default function MegaMenu() {
  return (
    <nav className="hidden lg:flex items-center gap-8">
      {menuData.map((item) => (
        <NavItem
          key={item.label}
          label={item.label}
          content={item.content}
          image={item.image}
        />
      ))}
    </nav>
  );
}
