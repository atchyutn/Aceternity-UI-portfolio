"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const HomeSection = () => {
  return (
    <>
      <main className="flex items-center justify-center gap-8 md:h-screen flex-col md:flex-row">
        <div className="pt-4 px-8 md:px-0 md:pt-0">
          <Image
            src="/projects/profile.jpg"
            alt="Atchyut Nagabhairava"
            width={600}
            height={600}
            className="rounded-b-full"
          />
        </div>
        <div className="text-center px-4 md:text-start">
          <p className="text-slate-400 font-bold text-3xl">Hello There👋🏻</p>
          <h1 className="text-5xl font-semibold text-indigo-600 pt-4">
            I'm Atchyut Nagabhairava
          </h1>
          <h2 className="text-lg font-semibold text-pink-300 mt-2 font-mono">
            Engineer | Innovator | AI Enthusiast
          </h2>
          <p className="text-slate-400 text-lg pt-4">
            Passionate about solving real-world problems with AI and automation.
            <br />
            My mission is to blend technology with empathy to create affordable solutions.
          </p>
          {/* <div className="flex justify-center md:justify-start space-x-4 pt-4">
            <img src="/icons/nextjs.svg" alt="Next.js" className="h-8 w-8" />
            <img src="/icons/prisma.svg" alt="Prisma" className="h-8 w-8" />
            <img src="/icons/aws.svg" alt="AWS" className="h-8 w-8" />
            <img
              src="/icons/tailwindcss.svg"
              alt="Tailwind CSS"
              className="h-8 w-8"
            />
          </div> */}
          <div className="pb-4 md:pb-0 pt-8">
            <button className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white sm:px-10 sm:py-4 px-6 py-2 rounded-full mr-4">
              <Link href="/about">
                <span>Learn More About Me</span>
              </Link>
              <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px" />
            </button>
            <button className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white sm:px-10 sm:py-4 px-6 py-2 rounded-full mr-4">
              <Link href="/projects">
                <span>My Projects</span>
              </Link>
              <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px" />
            </button>
            <button className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white sm:px-10 sm:py-4 px-6 py-2 rounded-full mr-2">
              <Link href="#">
                <span>Hire Me</span>
              </Link>
              <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px" />
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default HomeSection;
