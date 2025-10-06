"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import { TrainingTeam } from "./TrainingTeam";
import { AllExperts } from "./AllExperts";

const points = [
  {
    title: "Understand with simplicity",
    description:
      "Discover the fundamentals of artificial intelligence and its possibilities thanks to a theoretical introduction designed to demystify generative AI.",
  },
  {
    title: "Take action",
    description:
      "Participate in collaborative workshops using an innovative card game developed by our teams. In small groups, devise high value-added business solutions.",
  },
  {
    title: "Leave with an actionable roadmap",
    description:
      "Our experts qualify and prioritize the use cases identified. You'll receive a detailed roadmap incorporating feasibility, complexity, ROI analysis, and potential impact.",
  },
];

export const GenAIWorkshops = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-20 sm:py-24 bg-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <Image
              src="/images/people/formation.jpg"
              alt="Gen AI Workshop"
              width={470}
              height={938}
              className="rounded-3xl shadow-lg object-cover w-full max-w-[420px] h-auto"
            />
          </motion.div>

          {/* Right: Text Content */}
          <div className="space-y-8">
            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-left"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tight">
                DISCOVER OUR
              </h2>
              <span className="text-3xl md:text-5xl italic px-4 md:px-10 font-light">
                — GEN AI WORKSHOPS
              </span>
              <p className="text-base sm:text-lg mt-4 text-muted-foreground">
                Adapted to all levels and designed to fit your schedule, these
                sessions help you develop practical skills and integrate AI into
                your daily workflow.
              </p>
            </motion.div>

            {/* Key Points */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-5"
            >
              <h4 className="text-base font-semibold text-foreground">
                A unique, value-added workshop to:
              </h4>

              <div className="space-y-4">
                {points.map((point, i) => (
                  <div key={i} className="flex gap-3">
                    <Check className="w-5 h-5 text-[#0009f4] mt-1 shrink-0" />
                    <div>
                      <h5 className="font-semibold text-base sm:text-lg text-foreground">
                        {point.title}
                      </h5>
                      <p className="text-sm sm:text-base text-muted-foreground">
                        {point.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Button className="rounded-full bg-[#032143] text-white w-full sm:w-auto cursor-pointer">
                  Get more information
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  className="rounded-full w-full sm:w-auto cursor-pointer"
                >
                  Download our presentation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Additional Sections */}
      <TrainingTeam />
      <AllExperts />
    </section>
  );
};
