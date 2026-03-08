"use client";

import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <>
      <div className=" max-w-6xl mx-auto ">
        <p className="text-5xl font-bold pt-20 pb-16 text-center md:text-start">
          Content Creator
        </p>
        <div className="flex gap-16 pb-10 flex-col items-center justify-center md:flex-row">
          <div className="w-1/2">
            <p className="text-2xl font-bold">Description:</p>
            <p className="text-slate-400 sm:text-start text-lg  text-center pt-4">
              An AI-powered content generation platform that helps
              professionals create personalized LinkedIn posts based on resume
              context and selected topics.
            </p>

            <Link
              href="/contact"
              className="text-blue-500 hover:text-blue-700 flex gap-2 pt-3"
            >
              Discuss this project
              <Image
                src="/external-link.svg"
                alt="external-link"
                width={15}
                height={15}
              />
            </Link>
          </div>

          <div className="w-1/2 ">
            <div>
              <p className="text-2xl font-bold ">Domain:</p>
              <p className="text-slate-400 sm:text-start text-lg  text-center pt-4">
                AI Product Development.
              </p>
            </div>
            <div>
              <p className="text-2xl font-bold pt-6">Technologies/Tools:</p>
              <p className="text-slate-400 sm:text-start text-lg  text-center pt-4">
                Next.js, TypeScript, OpenAI APIs, prompt workflows, and REST
                integrations.
              </p>
            </div>
          </div>
        </div>

        <div>
          <p className="text-2xl font-bold text-center md:text-start px-6 md:px-0 ">
            Introduction
          </p>
          <p className="text-slate-400 sm:text-start text-lg  text-center pt-4">
            Content Creator focuses on reducing the time required to produce
            high-quality professional content while maintaining tone and context
            relevance for each user.
          </p>
        </div>

        <div className="pb-20 text-center md:text-start px-4">
          <p className="text-2xl font-bold pt-6">Future Direction</p>
          <p className="text-slate-400 sm:text-start text-lg  text-center pt-4">
            The roadmap expands beyond LinkedIn into broader content generation
            for blogs and social channels with reusable AI workflows.
          </p>
        </div>

        <div className="pb-16 text-center md:text-start px-4">
          <p className="text-2xl font-bold">Engineering Notes</p>
          <p className="text-slate-400 sm:text-start text-lg  text-center  pt-4">
            The platform is built with a product-first architecture: reusable
            generation pipelines, clean API boundaries, and extensible content
            modules for future platform growth.
          </p>
        </div>

        <div className="h-px m-auto bg-gray-500 mx-4 md:mx-0"></div>
        <div className="text-4xl font-bold py-6 text-center md:text-start">
          Thank You!
        </div>
        <div className="py-20 flex items-center justify-center">
          <button className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-6 py-3 rounded-full ">
            <Link href="/projects">
              <span>Back to Projects</span>
            </Link>
            <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
          </button>
        </div>
      </div>
    </>
  );
};
export default page;
