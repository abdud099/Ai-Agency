"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Experties } from "./Experties";
import { ClientLogos } from "./ClientLogo";

export const Hero = () => {
  return (
    <section className="relative min-h-screen bg-top-right-glow overflow-hidden">
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

      {/* Main Hero Content */}
      <div className="relative max-w-7xl mx-auto pt-40 md:pt-32 lg:pt-10 px-4 md:px-6">
        <div className="grid lg:grid-cols-2 items-center gap-12 min-h-[80vh]">
          {/* Left Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.2 } },
            }}
            className="space-y-8"
          >
            {/* Heading */}
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: -40, scale: 0.95 },
                visible: { opacity: 1, y: 0, scale: 1 },
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl md:text-5xl lg:text-6xl text-white mb-6 tracking-tight"
            >
              AI AGENCY
            </motion.h1>

            {/* Divider + Subtext */}
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -40 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex items-center gap-4 mb-8"
            >
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
                className="w-12 h-0.5 bg-white/60 origin-left"
              />
              <motion.p
                variants={{
                  hidden: { opacity: 0, x: 40 },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
                className="text-xl text-white/90 max-w-lg tracking-tight"
              >
                Transform your business with the power of AI and GenAI
              </motion.p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <a href="#achievement">
                <Button
                  size="lg"
                  className="bg-white hover:bg-white/90 rounded-full px-8 group cursor-pointer"
                >
                  Our use cases
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <a href="#offer">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 rounded-full px-8 group cursor-pointer"
                >
                  Our offers
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="space-y-6 max-w-xl"
          >
            <h2 className="text-3xl lg:text-4xl font-light text-white/90 italic leading-relaxed">
              A specialized AI agency to implement your technological ambitions.
            </h2>
            <p className="text-lg text-white/80 leading-relaxed">
              With over 10 years&apos; experience in AI research and
              development, our AI agency designs solutions that are modern and
              customized for ETIs, SMEs, and major accounts.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Client Logos */}
      <ClientLogos />

      {/* Expertises Section */}
      <Experties />
    </section>
  );
};
