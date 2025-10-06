"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import Image from "next/image";
import { Sparkles } from "lucide-react";
import { Statistics } from "./Statistics";
import { AIMapper } from "./AlMapper";

const achievements = [
  {
    title: "Guiding citizens through the Bordeaux Métropole PLU",
    description:
      "BeTomorrow developed a bespoke agent, optimized by generative AI and advanced data search, to support Bordeaux Métropole's PLU and facilitate access to information.",
    tags: ["Tech", "LLM", "Mobility"],
    tags1: ["AI"],
    link: "/images/mockups/PLU.jpg",
  },
];

const achievements2 = [
  {
    title: "An intelligent chatbot powered by your data",
    description:
      "BeTomorrow has designed a chatbot based on RAG technology, combining LLM generation models with advanced information retrieval for optimized results.",
    tags: ["R&D", "LLM"],
    tags1: ["AI"],
    link: "/images/mockups/macbook.png",
  },
  {
    title: "Toilet Finder: user feedback analysis",
    description:
      "An innovative solution combining clustering, embeddings, and generative AI to structure user feedback, visualize it, and derive insights.",
    tags: ["R&D", "Data"],
    tags1: ["AI"],
    link: "/images/mockups/Toiletfinder.png",
  },
  {
    title: "Creating a universal chatbot to harness data effectively",
    description:
      "Our AI experts designed an interactive chatbot for advanced and intuitive business data exploration.",
    tags: ["LLM", "Data", "R&D"],
    tags1: ["AI"],
    link: "/images/mockups/iPhone.jpg",
  },
  {
    title: "AI at the heart of knowledge management and professional training",
    description:
      "Skillagora encourages exchange of skills and knowledge between co-workers, both face-to-face and remotely.",
    tags: ["Education", "LLM"],
    tags1: ["AI"],
    link: "/images/mockups/Skillagora.png",
  },
];

// Reusable hover circle component (isolated motion)
const HoverCircle = () => {
  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 20 });
  const springY = useSpring(y, { stiffness: 200, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
  };

  return (
    <div
      className="absolute inset-0 cursor-none"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => {
        setIsHovered(true);
        document.body.style.cursor = "none";
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        document.body.style.cursor = "auto";
      }}
    >
      <motion.div
        style={{ translateX: springX, translateY: springY }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1 : 0.8,
        }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="absolute -translate-x-1/2 -translate-y-1/2 w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/60 flex items-center justify-center pointer-events-none"
      >
        <span className="text-base md:text-lg font-semibold select-none">
          See
        </span>
      </motion.div>
    </div>
  );
};

export const Achievements = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="py-24 bg-grid">
      <div id="achievement" className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tight">
            OUR LATEST
          </h2>
          <h4 className="text-3xl md:text-5xl lg:text-6xl italic font-light px-4 md:px-12">
            — AI ACHIEVEMENTS
          </h4>
        </motion.div>

        {/* Featured Card */}
        {achievements.map((achievement, index) => (
          <motion.div
            key={achievement.title}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group overflow-hidden rounded-3xl cursor-pointer"
          >
            <div className="relative">
              <Image
                src={achievement.link}
                alt={achievement.title}
                width={1332}
                height={746}
                className="w-full h-auto object-cover rounded-3xl"
              />
              <HoverCircle />
            </div>

            <div className="py-10">
              <h4 className="text-2xl font-semibold mb-3">
                {achievement.title}
              </h4>
              <p className="text-lg md:text-xl mb-4 leading-relaxed font-light tracking-tight max-w-2xl">
                {achievement.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {achievement.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="rounded-full border border-gray-300 px-3 py-1 text-gray-700"
                  >
                    {tag}
                  </Badge>
                ))}
                {achievement.tags1.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="flex items-center gap-1 rounded-full px-3 py-1 bg-gradient-to-r from-indigo-600 to-orange-500 text-white"
                  >
                    <Sparkles size={16} />
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </motion.div>
        ))}

        {/* Grid Cards */}
        <div className="mt-16 space-y-16">
          {achievements2.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group grid grid-cols-1 lg:grid-cols-2 items-center gap-10 cursor-pointer"
            >
              {/* Image */}
              <div
                className={`relative ${index % 2 === 1 ? "lg:order-2" : ""}`}
              >
                <Image
                  src={achievement.link}
                  alt={achievement.title}
                  width={500}
                  height={500}
                  className="w-full h-auto rounded-3xl"
                />
                <HoverCircle />
              </div>

              {/* Text */}
              <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <h4 className="text-2xl font-semibold mb-3">
                  {achievement.title}
                </h4>
                <p className="text-lg md:text-xl mb-4 leading-relaxed font-light tracking-tight max-w-2xl">
                  {achievement.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {achievement.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="rounded-full border border-gray-300 px-3 py-1 text-gray-700"
                    >
                      {tag}
                    </Badge>
                  ))}
                  {achievement.tags1.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="flex items-center gap-1 rounded-full px-3 py-1 bg-gradient-to-r from-indigo-600 to-orange-500 text-white"
                    >
                      <Sparkles size={16} />
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Stats + AI Map */}
      <Statistics />
      <AIMapper />
    </section>
  );
};
