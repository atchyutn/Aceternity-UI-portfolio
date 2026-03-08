"use client";

import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <>
      <div className=" max-w-6xl mx-auto ">
        <p className="text-5xl font-bold pt-20 pb-16 text-center md:text-start">
          Therapy Center ERP
        </p>
        <div className="flex gap-16 pb-10 flex-col items-center justify-center md:flex-row">
          <div className="w-1/2">
            <p className="text-2xl font-bold">Description:</p>
            <p className="text-slate-400 sm:text-start text-lg  text-center pt-4">
              A comprehensive ERP platform designed for therapy centers to
              manage cross-functional operations in a single, reliable system.
              It supports role-based access, department workflows, scheduling,
              invoicing, attendance, finance tracking, lead management, and
              reporting.
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
                Full-Stack SaaS Product Engineering.
              </p>
            </div>
            <div>
              <p className="text-2xl font-bold pt-6">Technologies/Tools:</p>
              <p className="text-slate-400 sm:text-start text-lg  text-center pt-4">
                Next.js, React, TypeScript, REST APIs, role-based authorization,
                reporting workflows, and cloud deployment.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center md:items-start md:justify-start px-4">
          <p className="text-2xl font-bold">Introduction</p>
          <p className="text-slate-400 sm:text-start text-lg  text-center pt-4">
            This product centralizes therapy center operations so teams can work
            with standardized workflows and real-time visibility across
            departments.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center md:items-start md:justify-start px-4 pb-20">
          <p className="text-2xl font-bold pt-6">Core Capabilities</p>
          <p className="text-slate-400 sm:text-start text-lg  text-center pt-4">
            Role-based access, scheduling, invoicing, finance tracking,
            attendance, lead management, and analytics designed for operational
            consistency and scale.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center md:items-start md:justify-start px-4 pb-16">
          <p className="text-2xl font-bold">Technical Focus</p>
          <ul className="list-disc text-slate-400 sm:text-start text-lg text-center pt-4">
            <li>Scalable, modular full-stack architecture.</li>
            <li>Clear API boundaries for maintainable integrations.</li>
            <li>Reliable workflows for finance and operations.</li>
            <li>Product decisions guided by day-to-day user tasks.</li>
          </ul>
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
