"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

const stats = [
  { value: 400, suffix: "+", label: "projects since our creation in 2002" },
  { value: 97, suffix: "%", label: "of our clients are continuing with us" },
  { value: 10, suffix: "+", label: "years of research and development in AI" },
];

// Counter Component
const Counter = ({
  end,
  suffix,
  inView,
  delay,
}: {
  end: number;
  suffix: string;
  inView: boolean;
  delay: number;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const duration = 2000; // 2 seconds
    const stepTime = 20;
    const increment = end / (duration / stepTime);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [inView, end]);

  return (
    <motion.h2
      initial={{ opacity: 0, y: 10 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="text-5xl md:text-6xl font-semibold text-black "
    >
      {count}
      {suffix}
    </motion.h2>
  );
};

export const Statistics = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section ref={ref} className="py-20 md:py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid gap-10 sm:gap-14 md:grid-cols-3 text-start">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Counter
                end={stat.value}
                suffix={stat.suffix}
                inView={inView}
                delay={index * 0.2}
              />
              <p className="text-2xl md:text-3xl mt-4 font-light tracking-tighter">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
