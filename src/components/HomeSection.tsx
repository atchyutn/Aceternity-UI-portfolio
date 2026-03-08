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
          <p className="text-slate-400 font-bold text-3xl">Software Engineer</p>
          <h1 className="text-5xl font-semibold text-indigo-600 pt-4">
            Atchyut Nagabhairava
          </h1>
          <h2 className="text-lg font-semibold text-pink-300 mt-2 font-mono">
            Full Stack Developer | AI Builder | Hyderabad, India
          </h2>
          <p className="text-slate-400 text-lg pt-4">
            I build scalable SaaS products and AI-enabled web applications using
            Next.js, React, Ruby on Rails, and modern API-driven architectures.
            <br />
            My focus is shipping reliable systems that solve real user and
            business problems.
          </p>
          <div className="pb-4 md:pb-0 pt-8">
            <button className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white sm:px-10 sm:py-4 px-6 py-2 rounded-full mr-4">
              <Link href="/about">
                <span>About Me</span>
              </Link>
              <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px" />
            </button>
            <button className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white sm:px-10 sm:py-4 px-6 py-2 rounded-full mr-4">
              <Link href="/projects">
                <span>Featured Projects</span>
              </Link>
              <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px" />
            </button>
            <button className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white sm:px-10 sm:py-4 px-6 py-2 rounded-full mr-2">
              <Link href="/contact">
                <span>Contact</span>
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
