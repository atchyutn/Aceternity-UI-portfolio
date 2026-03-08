"use client";
import Head from "next/head";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import HomeSection from "@/components/HomeSection";
import ProjectSection from "@/components/ProjectSection";
import SkillsTools from "@/components/Skills&Tools";
import { Analytics } from "@vercel/analytics/react";

export default function Home() {
  return (
    <div>
      <Head>
        <title>
          Atchyut Nagabhairava | Software Engineer | Full Stack Developer
        </title>
        <meta
          name="description"
          content="Software Engineer at TCS focused on enterprise applications, AI integration, and scalable full-stack product development."
        />
        <meta
          name="keywords"
          content="Atchyut Nagabhairava, Software Engineer, Full Stack Developer, Hyderabad, Next.js, React, Ruby on Rails, OpenAI APIs, SaaS architecture"
        />
        <meta name="author" content="Atchyut Nagabhairava" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          property="og:title"
          content="Atchyut Nagabhairava | Software Engineer & AI Product Builder"
        />
        <meta
          property="og:description"
          content="Portfolio showcasing enterprise software engineering, AI-powered product development, and scalable SaaS systems."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://atchyutn.com" />
        <meta
          property="og:image"
          content="https://www.atchyutn.com/_next/image?url=%2Fprojects%2Fprofile.jpg&w=1200&q=75"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Atchyut Nagabhairava | Software Engineer & AI Product Builder"
        />
        <meta
          name="twitter:description"
          content="Enterprise engineering, AI integrations, and product-focused full-stack development."
        />
        <meta
          name="twitter:image"
          content="https://www.atchyutn.com/_next/image?url=%2Fprojects%2Fprofile.jpg&w=1200&q=75"
        />
      </Head>
      <Analytics />
      <HomeSection />
      <AboutSection />
      <SkillsTools />
      <ProjectSection />
      <ContactSection />
    </div>
  );
}
