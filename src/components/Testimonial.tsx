"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { Resources } from "./Resources";

export const Testimonial = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section ref={ref} className="py-24 bg-grid">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col lg:flex-row items-center justify-between gap-10 rounded-2xl"
        >
          {/* Left: Image */}
          <div className="flex-shrink-0 flex justify-center lg:justify-start w-full lg:w-auto">
            <div className="relative w-[260px] h-[260px] sm:w-[300px] sm:h-[300px] lg:w-[330px] lg:h-[330px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/people/Aurelien.png"
                alt="Aurelien"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 260px, (max-width: 1024px) 300px, 330px"
                priority
              />
            </div>
          </div>

          {/* Right: Text */}
          <div className="text-center lg:text-left max-w-3xl px-2">
            <h3 className="text-2xl md:text-4xl font-bold mb-2 tracking-wide text-[#0a1628]">
              AURÉLIEN BRAUD
            </h3>
            <p className="text-base md:text-lg mb-6 tracking-tight text-gray-700">
              Marketing Director, Keolis Bordeaux Métropole
            </p>
            <blockquote className="italic text-lg md:text-xl leading-relaxed text-gray-800">
              “We were impressed by BeTomorrow&apos;s approach and their ability
              to mobilize all the necessary mobile expertise gathered under one
              roof. We found in their teams a level of rigor and skills that
              matched our ambitions and the complexity of this project.”
            </blockquote>
          </div>
        </motion.div>
      </div>

      <div className="mt-16">
        <Resources />
      </div>
    </section>
  );
};
