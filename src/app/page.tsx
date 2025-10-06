"use client";

import { Achievements } from "@/components/Achievements";
import { AIProcess } from "@/components/AlProcess";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { GenAIWorkshops } from "@/components/GenAiWorkShops";
import { Hero } from "@/components/Hero";
import { Navigation } from "@/components/Navigation";
import { Offers } from "@/components/Offers";
import { Testimonial } from "@/components/Testimonial";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Achievements />
      <Offers />
      <GenAIWorkshops />
      <AIProcess />
      <Testimonial />
      <ContactForm />
      <Footer />
    </div>
  );
}
