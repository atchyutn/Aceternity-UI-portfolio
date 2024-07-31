"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
import Link from "next/link";

const AboutSection = () => {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-black py-8 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-4xl"
      >
        &apos;Know&apos; me, Before you &apos;No&apos; me
      </motion.h1>
      <motion.p
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="text-center text-slate-300 pt-2 hidden sm:block text-lg"
      >
        With a blend of technical expertise and a business-oriented mindset,
        <br />
        I am dedicated to driving innovation and efficiency in every project.
        <br />
        My passion lies in creating solutions that not only meet but exceed
        business goals.
        <br />
        Let &apos;s collaborate to transform ideas into impactful and
        sustainable outcomes.
      </motion.p>
      <motion.div
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="pt-12 flex justify-center flex-col space-y-8 sm:flex-row sm:space-x-20 sm:space-y-0"
      >
        <button className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white sm:px-10 sm:py-4 px-6 py-2 rounded-full">
          <Link
            href="https://drive.google.com/file/d/1Rg_sd9fVit5iNHkb9HvffIoq28jR1YPp/view?usp=sharing"
            target="_blank"
          >
            <span>My Resume</span>
          </Link>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent  h-px" />
        </button>
        <button className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white sm:px-10 sm:py-4 px-6 py-2 rounded-full">
          <Link href="/projects">
            <span>My Projects</span>
          </Link>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent  h-px" />
        </button>
      </motion.div>
    </LampContainer>
  );
};
export default AboutSection;
