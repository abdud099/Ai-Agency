"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock } from "lucide-react";
import Image from "next/image";

const articles = [
  {
    title: "AI in Healthcare: how to improve quality of life through AI?",
    date: "Oct 29, 2024",
    readTime: "7 min",
    author: "Sandrine Holcher — Marketing Manager",
    image: "/images/banners/BeTomorrow.png",
    avatar: "/images/people/Holcher.jpg",
  },
  {
    title: "Adopt AI successfully with the Product-Led Transformation",
    date: "Dec 18, 2024",
    readTime: "1 min",
    author: "Thibault Baleinier — Content Marketing Manager",
    image: "/images/banners/IT.png",
    avatar: "/images/people/Baleinier.jpg",
  },
  {
    title: "Responsible AI: key concepts and best practices",
    date: "Jan 19, 2025",
    readTime: "9 min",
    author: "Thibault Baleinier — Content Marketing Manager",
    image: "/images/banners/IA_Responsable.png",
    avatar: "/images/people/Baleinier.jpg",
  },
];

export const Resources = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground">
                STAY TUNED
              </h2>
              <h3 className="text-4xl sm:text-5xl lg:text-6xl italic font-light mt-2 text-foreground/80">
                — OUR RESOURCES
              </h3>
              <p className="text-base sm:text-lg mt-4 text-muted-foreground max-w-lg">
                100% AI resources to help you reach the top.
              </p>
            </div>

            <Button
              variant="outline"
              className="rounded-full flex items-center gap-2 mt-6 lg:mt-0 cursor-pointer"
            >
              See resources
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </motion.div>

        {/* Articles Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.article
              key={article.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div
                className="bg-white/5 backdrop-blur-sm border border-white/10
                              rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 
                              flex flex-col h-full relative"
              >
                {/* Image */}
                <div className="relative h-56 sm:h-64 md:h-72 w-full overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent transition-opacity duration-500" />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1.5 bg-gray-400/20 backdrop-blur-md rounded-full text-xs font-medium text-white">
                      ARTICLE
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <span>{article.date}</span>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-lg md:text-xl font-semibold mb-6 leading-snug transition-colors">
                    {article.title}
                  </h3>

                  {/* Author Section (Hover Reveal) */}
                  <div className="pt-4 border-t border-white/10 mt-auto opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-500 ease-out">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                        <Image
                          src={article.avatar}
                          alt={article.author}
                          width={40}
                          height={40}
                          className="object-cover"
                        />
                      </div>

                      <div className="flex items-center justify-between w-full">
                        <div className="text-sm font-medium">
                          {article.author}
                        </div>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 " />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Mobile Button */}
        <div className="mt-10 text-center lg:hidden">
          <Button
            variant="outline"
            className="rounded-full flex items-center gap-2"
          >
            See all resources
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};
