"use client";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import HomeSection from "@/components/HomeSection";
import ProjectSection from "@/components/ProjectSection";
import SkillsTools from "@/components/Skills&Tools";
import { Analytics } from "@vercel/analytics/react";

export default function Home() {
  return (
    <div>
      <Analytics />
      <HomeSection />
      <AboutSection />
      <SkillsTools />
      <ProjectSection />
      <ContactSection />
    </div>
  );
}
