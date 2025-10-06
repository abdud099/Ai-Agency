"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { ArrowRight, Paperclip } from "lucide-react";

export default function ContactForm() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  return (
    <section
      ref={ref}
      className="relative py-20 px-6 sm:px-8 lg:py-28 bg-top-right-glow overflow-hidden"
    >
      {/* Background animation */}
      <div className="absolute inset-0 -z-10" id="contact">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.25, 0.45, 0.25] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-white/15 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 12, repeat: Infinity, delay: 1 }}
          className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-blue-500/30 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-between gap-16">
        {/* LEFT SIDE TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-white/80 flex-1"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight">
            ENTRUST YOUR
          </h2>
          <h3 className="text-4xl sm:text-5xl lg:text-6xl italic font-light mt-2 text-white">
            — AI PROJECT
          </h3>
          <p className="mt-6 text-base sm:text-lg max-w-lg">
            Because every project is unique, we provide a tailor-made solution
            designed to meet your specific needs.
          </p>
        </motion.div>

        {/* RIGHT SIDE FORM */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 w-full backdrop-blur-2xl bg-white/10 border border-white/20 
                     rounded-3xl p-8 sm:p-10 lg:p-14 shadow-[0_0_40px_rgba(0,0,0,0.3)]"
        >
          <h4 className="text-center text-lg font-medium mb-8 text-white">
            Directly exchange with our experts
          </h4>

          <form className="space-y-6">
            {/* Name Fields */}
            <div className="grid md:grid-cols-2 gap-6">
              <Input
                placeholder="Your first name*"
                className="h-12 rounded-full bg-transparent border-white/30 text-white placeholder:text-white/60
                           focus:bg-transparent focus:border-white/50 focus:ring-0 focus-visible:ring-0 transition-all"
              />
              <Input
                placeholder="Your last name*"
                className="h-12 rounded-full bg-transparent border-white/30 text-white placeholder:text-white/60
                           focus:bg-transparent focus:border-white/50 focus:ring-0 focus-visible:ring-0 transition-all"
              />
            </div>

            {/* Contact Fields */}
            <div className="grid md:grid-cols-2 gap-6">
              <Input
                type="email"
                placeholder="Email*"
                className="h-12 rounded-full bg-transparent border-white/30 text-white placeholder:text-white/60
                           focus:bg-transparent focus:border-white/50 focus:ring-0 focus-visible:ring-0 transition-all"
              />
              <Input
                type="tel"
                placeholder="Phone number*"
                className="h-12 rounded-full bg-transparent border-white/30 text-white placeholder:text-white/60
                           focus:bg-transparent focus:border-white/50 focus:ring-0 focus-visible:ring-0 transition-all"
              />
            </div>

            {/* Company */}
            <Input
              placeholder="Enterprise"
              className="h-12 rounded-full bg-transparent border-white/30 text-white placeholder:text-white/60
                         focus:bg-transparent focus:border-white/50 focus:ring-0 focus-visible:ring-0 transition-all"
            />

            {/* Project */}
            <Textarea
              placeholder="Tell us, how can we help you?*"
              rows={6}
              className="rounded-3xl resize-none bg-transparent border-white/30 text-white placeholder:text-white/60
                         focus:bg-transparent focus:border-white/50 focus:ring-0 focus-visible:ring-0 transition-all"
            />

            {/* Checkboxes */}
            <div className="space-y-3">
              <label className="flex items-start gap-3 cursor-pointer text-sm text-white/70 hover:text-white">
                <Checkbox
                  id="private"
                  className="mt-1 border-white/40 text-white"
                />
                This project is private
              </label>

              <label className="flex items-start gap-3 cursor-pointer text-sm text-white/70 hover:text-white">
                <Checkbox
                  id="nda"
                  className="mt-1 border-white/40 text-white"
                />
                I want to receive a non-disclosure agreement
              </label>
            </div>

            {/* Buttons */}
            <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <Button
                type="button"
                variant="outline"
                className="flex items-center gap-2 bg-transparent border-white/40 text-white rounded-full 
                           hover:bg-white/10 transition-all w-full sm:w-auto justify-center cursor-pointer"
              >
                <Paperclip className="w-4 h-4" />
                Attachments
              </Button>

              <Button
                type="submit"
                size="lg"
                className="w-full sm:w-auto px-10 rounded-full bg-white text-black font-medium shadow-md 
                           hover:scale-105 hover:bg-white/90 transition-transform cursor-pointer"
              >
                Send
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
