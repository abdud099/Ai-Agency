"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const offers = [
  {
    title: "GenAI Workshop",
    subtitle: "Dedicated training to help you build your AI roadmap.",
    points: [
      "Raise your teams' awareness: develop a concrete understanding of the strengths and limitations of LLMs",
      "Build your AI vision: define a strategy aligned with your objectives",
      "Plan for the future: receive a customized, pragmatic and immediately actionable roadmap",
    ],
    cta: "Get an audit",
  },
  {
    title: "AI Accelerator",
    subtitle: "Go from idea to practice in 3 weeks.",
    points: [
      "Move quickly to action: turn your ideas into reality by developing relevant use cases",
      "Accelerate your results: deploy your case studies to validate their impact",
      "Rely on our expertise: benefit from customized support throughout the process",
    ],
    cta: "Plan your actions",
  },
  {
    title: "AI Change",
    subtitle: "Drive your AI-generated transformations with confidence.",
    points: [
      "Drive change: ensure that AI projects are aligned with your strategic objectives",
      "Benefit from monthly support: strategic advice, personalized follow-up",
      "Guarantee success: monthly follow-up including targeted training and tailored advice",
    ],
    cta: "Accelerate your project",
  },
  {
    title: "CIR/CII AI",
    subtitle: "Optimize your AI projects with advantageous financing.",
    points: [
      "Benefit from significant savings: save up to 30% on your projects",
      "Optimize your funding: identify grant opportunities for your AI initiatives",
      "Secure your innovation budget: work with an experienced and reliable partner",
    ],
    cta: "Launch your project",
  },
  {
    title: "AI Diagnostic",
    subtitle: "Assess your AI maturity and governance.",
    points: [
      "Measure your level of maturity: identify your strengths and challenges",
      "Strengthen your governance: benefit from tools, training and analysis",
      "Accelerate your transformation: receive concrete recommendations",
    ],
    cta: "Request an audit",
  },
  {
    title: "AI Training",
    subtitle: "Master AI technologies and boost your skills.",
    points: [
      "Training tailored to your needs: flexible modules for functional and technical profiles",
      "Learn from our experts: benefit from the advice of our AI/Data specialists",
      "Get concrete results: automate tasks, optimize processes and achieve gains",
    ],
    cta: "Train in AI",
  },
];

export const Offers = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      ref={ref}
      className="py-20 md:py-28 relative overflow-hidden bg-top-right-glow"
    >
      <div id="offer" className="max-w-7xl mx-auto px-4 sm:px-6">
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
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14 flex flex-col md:flex-row justify-between gap-8 text-white/80"
        >
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tight text-white">
              OUR AI
            </h2>
            <h4 className="text-3xl md:text-5xl lg:text-6xl italic font-light px-4 md:px-10 text-white/90">
              — CUSTOM OFFERS
            </h4>
          </div>

          <p className="text-base sm:text-lg md:text-xl max-w-md">
            Our AI agency offers a range of artificial intelligence services
            designed to meet your specific requirements. Each offer can be
            modulated and supplemented by additional options, enabling total
            adaptation to your business needs.
          </p>
        </motion.div>

        {/* Offers Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {offers.map((offer, index) => (
            <motion.div
              key={offer.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ scale: 1.03 }}
              className="group"
            >
              <div className="bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 p-6 sm:p-8 rounded-2xl shadow-md transition-all duration-500 flex flex-col h-full">
                <h4 className="text-2xl sm:text-3xl font-semibold mb-3 text-white">
                  {offer.title}
                </h4>

                <p className="text-sm sm:text-base md:text-lg text-white/90 mb-4">
                  {offer.subtitle}
                </p>

                <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-white/80 flex-1">
                  {offer.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
                <a href="#contact">
                  <Button
                    variant="outline"
                    className="w-full mt-6 bg-white text-black rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer"
                  >
                    {offer.cta}
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>

                {/* Gradient Underline Animation */}
                <div className="mt-4 w-0 h-0.5 bg-white/80 transition-all duration-500 group-hover:w-20"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
