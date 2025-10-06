"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const experts = [
  { name: "Tom Rethaller", link: "/images/people/tom-rethaller.jpg" },
  { name: "Anne Malagié", link: "/images/people/anne-malagie.jpg" },
  { name: "Stefano Marongiu", link: "/images/people/charly-ray.jpg" },
  { name: "Laurent Alvaro", link: "/images/people/laurent-alvaro.jpg" },
  { name: "Marc Allaire", link: "/images/people/marc-allaire.jpg" },
  { name: "Arnaud Pichon", link: "/images/people/paul-breton.jpg" },
  { name: "Paul Breton", link: "/images/people/property-a.png" },
  { name: "Johan Chataigner", link: "/images/people/johan-chataigner.jpg" },
  { name: "Charly Ray", link: "/images/people/property.png" },
  { name: "Florian Lassont", link: "/images/people/florian-lassont.jpg" },
];

export const AllExperts = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-0 md:py-20 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tight">
            ALL OUR
          </h2>
          <h4 className="text-3xl md:text-5xl lg:text-6xl italic font-light px-4 md:px-12">
            — AI EXPERTS
          </h4>
        </motion.div>
      </div>

      {/* Marquee Scroll */}
      <motion.div
        animate={{ x: [0, -1800] }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex gap-6 sm:gap-8"
      >
        {experts.map((expert, index) => (
          <motion.div
            key={expert.name}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="relative group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer min-w-[240px] sm:min-w-[300px] md:min-w-[360px]"
          >
            {/* Expert Image */}
            <div className="relative aspect-[3/4] w-full">
              <Image
                src={expert.link}
                alt={expert.name}
                fill
                className="object-cover rounded-3xl transform group-hover:scale-110 transition-transform duration-700"
              />
            </div>

            {/* Name Overlay */}
            <div
              className="
    absolute inset-0 flex items-end 
    bg-black/50 text-white text-lg sm:text-xl md:text-2xl font-semibold tracking-wide text-center
    px-2 pb-6
    opacity-100 md:opacity-0 md:group-hover:opacity-100 
    transition-opacity duration-500
  "
            >
              <h4>{expert.name}</h4>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
