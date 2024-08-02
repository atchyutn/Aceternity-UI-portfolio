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
        <title>Atchyut Nagabhairava | Web Development & AI Solutions</title>
        <meta
          name="description"
          content="Atchyut Nagabhairava offers expert consultations and web development services, specializing in AI solutions, automating tasks, and helping businesses build innovative web apps. Explore my portfolio of projects in Next.js, DynamoDB, Tailwind CSS, and more."
        />
        <meta
          name="keywords"
          content="web development, consultations, AI solutions, Atchyut Nagabhairava, build web apps, automation, emerging finance tools, Next.js, DynamoDB, Tailwind CSS"
        />
        <meta name="author" content="Atchyut Nagabhairava" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          property="og:title"
          content="Atchyut Nagabhairava | Web Development & AI Solutions"
        />
        <meta
          property="og:description"
          content="Atchyut Nagabhairava offers expert consultations and web development services, specializing in AI solutions, automating tasks, and helping businesses build innovative web apps."
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
          content="Atchyut Nagabhairava | Web Development & AI Solutions"
        />
        <meta
          name="twitter:description"
          content="Atchyut Nagabhairava offers expert consultations and web development services, specializing in AI solutions, automating tasks, and helping businesses build innovative web apps."
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
