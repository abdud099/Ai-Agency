"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { menuData } from "./NavItem";

export default function MegaMenuMobile() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const toggleMenu = (label: string) => {
    setOpenMenu(openMenu === label ? null : label);
  };

  return (
    <div className="flex flex-col gap-2 lg:hidden">
      {menuData.map((item) => (
        <div key={item.label} className="border-b border-white/10 pb-2">
          <button
            onClick={() => toggleMenu(item.label)}
            className="w-full flex justify-between items-center py-3 text-lg font-semibold"
          >
            {item.label}
            {item.content && (
              <ChevronDown
                className={`w-5 h-5 transition-transform ${
                  openMenu === item.label ? "rotate-180" : ""
                }`}
              />
            )}
          </button>

          <AnimatePresence>
            {openMenu === item.label && item.content && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="pl-4 space-y-4"
              >
                {item.content.map((section) => (
                  <div key={section.title}>
                    <h4 className="text-sm text-gray-400 uppercase mb-2">
                      {section.title}
                    </h4>
                    <ul className="space-y-2">
                      {section.links.map((link) => (
                        <li key={link}>
                          <a
                            href="#"
                            className="block text-base font-medium hover:text-blue-400 transition"
                          >
                            {link}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
