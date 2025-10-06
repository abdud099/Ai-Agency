"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const steps = [
  {
    number: "01",
    title: "Exploration and skills enhancement",
    description:
      "For a tailor-made implementation of your project, we organize a phase of ideation and acculturation to artificial intelligence within your company. This involves setting up awareness-raising workshops and training courses to align your stakeholders with the relevant issues and use cases. Our team carries out an AI maturity audit of your structure and identifies high-impact strategic opportunities for your company.",
  },
  {
    number: "02",
    title: "Framing and structuring AI initiatives",
    description:
      "We draw up a roadmap aligned with your business and technological objectives. We prioritize the relevant use cases for your company, while validating the technical and business prerequisites necessary for their implementation. This stage includes the development of MVPs and prototypes, enabling you to rapidly test the feasibility of solutions and refine assumptions before larger-scale deployment.",
  },
  {
    number: "03",
    title: "Governance and operational management",
    description:
      "We set up an AI committee responsible for steering initiatives and ensuring the consistency of technological choices. This governance is based on performance monitoring via adapted KPIs to measure and adjust the effectiveness of the solutions and services implemented. Our continuous optimization approach includes re-evaluating models in production, improving data pipelines and managing versioning.",
  },
  {
    number: "04",
    title: "Industrialization and scalability",
    description:
      "We industrialize models in production using a MLOps approach. This includes automating monitoring, retraining and adapting models to changes in data. Integration with existing systems is facilitated by APIs and high-performance data pipelines. We draw up an evolution strategy to anticipate your future needs and ensure the scalability of your organization's artificial intelligence applications.",
  },
];

export const AIProcess = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-24 bg-top-right-glow text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Animated background glows */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-white/15 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 10, repeat: Infinity, delay: 1 }}
            className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-blue-500 rounded-full blur-3xl"
          />
        </div>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col md:flex-row justify-between text-white/80"
        >
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tight">
              DO YOU HAVE AN
            </h2>
            <h4 className="text-4xl md:text-5xl lg:text-6xl italic font-light px-4 md:px-12">
              — AI PROJECT?
            </h4>
          </div>

          <p className="text-lg md:text-xl max-w-md mt-6 md:mt-0">
            The adoption of artificial intelligence is not limited to the simple
            implementation of algorithms. It requires a structured, iterative
            and data-driven approach, guaranteeing both performance and
            alignment of the project with your business challenges.
          </p>
        </motion.div>

        {/* Steps Section */}
        <div className="grid gap-10">
          {steps.map((step, index) => (
            <div key={step.number}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 p-6 sm:p-8 rounded-2xl"
              >
                {/* Left: Step Number + Title */}
                <div>
                  <h2 className="text-5xl md:text-6xl font-bold mb-2">
                    {step.number}
                  </h2>
                  <h4 className="text-lg sm:text-2xl font-semibold tracking-tight">
                    {step.title}
                  </h4>
                </div>

                {/* Right: Description */}
                <p className="text-base sm:text-lg md:text-xl leading-relaxed text-white/80 sm:max-w-xl">
                  {step.description}
                </p>
              </motion.div>

              {/* Divider (Line) — show except for last item */}
              {index < steps.length - 1 && (
                <motion.div
                  initial={{ width: 0, opacity: 0 }}
                  whileInView={{ width: "100%", opacity: 1 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  className="h-[1px] bg-white/80 rounded-full my-8"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
