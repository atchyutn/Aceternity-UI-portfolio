"use client";

// import therapyGeniusProject from "@/utils/therapyGeniusProject";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <>
      <div className="max-w-6xl mx-auto">
        <p className="text-4xl sm:text-5xl font-bold pt-20 pb-16 text-center sm:text-start">
          Therapy Genius
        </p>
        {/* description */}
        <div className="flex gap-16 pb-10 flex-col items-center sm:flex-row">
          <div className="w-1/2">
            <p className="text-2xl font-bold">Description:</p>
            <p className="text-slate-400 text-lg pt-4">
              Therapy Genius is an AI-powered therapy center management platform built for child development and rehabilitation centers. It combines therapist scheduling, session tracking, progress monitoring, AI-assisted insights, and operational dashboards in one system.
            </p>

            <Link
              href="https://therapygenius.tech/"
              target="_blank"
              className="text-indigo-500 hover:text-indigo-700 flex gap-2 pt-3"
            >
              View Project
              <Image
                src="/external-link.svg"
                alt="external-link"
                width={15}
                height={15}
              />
            </Link>
          </div>

          {/* domain and tools */}
          <div className="w-1/2">
            <div>
              <p className="text-2xl font-bold">Domain:</p>
              <p className="text-slate-400 text-lg pt-4">
                Full-Stack Development.
              </p>
            </div>
            <div>
              <p className="text-2xl font-bold pt-6">Technologies/Tools:</p>
              <p className="text-slate-400 sm:text-start text-lg text-center pt-4">
                Next.js, TypeScript, Tailwind CSS, REST APIs, OpenAI APIs, scalable cloud deployment.
              </p>
            </div>
          </div>
        </div>

        {/* introduction and landing page */}
        <div className="text-center px-4 sm:text-start sm:px-0">
          <p className="text-2xl font-bold">Introduction</p>
          <p className="text-slate-400 sm:text-start text-lg text-center pt-4">
            The platform was designed to reduce administrative overhead while improving the quality of care delivery. Therapists and operations teams can manage scheduling, sessions, and progress in a centralized workflow with AI-assisted recommendations.
          </p>
        </div>

        {/* landing page */}
        <div className="text-center px-4 sm:text-start sm:px-0 pb-20">
          <p className="text-2xl font-bold pt-6">Landing Page</p>
          <p className="text-slate-400 sm:text-start text-lg text-center pt-4">
            The product experience is focused on clarity and operational speed, helping teams quickly access sessions, therapist availability, and progress data while keeping parent and patient communication structured.
          </p>
        </div>

        {/* step and images */}
        {/* <div className="bg-slate-800 flex flex-col items-center justify-center rounded-xl pt-8 mb-16 px-4">
          {therapyGeniusProject.map((project) => (
            <div key={project.id} className="max-w-3xl pb-8">
              <p className="text-2xl font-bold pt-6">{project.step}</p>
              <p className="text-slate-400 sm:text-start text-lg text-center pt-4">
                {project.description}
              </p>
              <div>
                <Image
                  src={project.src}
                  alt={project.alt}
                  width={800}
                  height={600}
                  className="pt-8"
                />
              </div>
            </div>
          ))}
        </div> */}

        {/* technologies used */}
        <div className="text-center px-4 sm:text-start sm:px-0 pb-16">
          <p className="text-2xl font-bold">Technologies Used:</p>
          <ul className="list-disc text-slate-400 sm:text-start text-lg text-center pt-4">
            <li>
              <span className="font-bold">Next.js:</span> For building App
              Router rendering and static web applications using React.
            </li>
            <li>
              <span className="font-bold">TypeScript:</span> To catch mistakes
              early through a type system and to make JavaScript development
              more efficient.
            </li>
            <li>
              <span className="font-bold">Tailwind CSS:</span> For designing and
              styling the application efficiently.
            </li>
            <li>
              <span className="font-bold">DynamoDB:</span> For scalable and
              flexible database management.
            </li>
            <li>
              <span className="font-bold">Cloudflare pages:</span> For efficient
              and secure web hosting.
            </li>
            <li>
              <span className="font-bold">OpenAI API:</span> For generating
              personalized therapy activities using AI.
            </li>
          </ul>
        </div>

        {/* conclusion */}
        <div className="text-center px-4 sm:text-start sm:px-0 pb-16">
          <p className="text-2xl font-bold">Conclusion</p>
          <p className="text-slate-400 sm:text-start text-lg text-center pt-4">
            Therapy Genius demonstrates how AI can be integrated into healthcare operations in a practical, user-centered way. The system helps centers scale workflows while enabling therapists to focus more on child outcomes.
          </p>
        </div>

        {/* line */}
        <div className="h-px m-auto bg-gray-500 mx-4 sm:mx-0"></div>

        {/* Thank You! */}
        <div className="text-4xl font-bold py-6 px-4 text-center sm:text-start">
          Thank You!
        </div>

        {/* back to projects */}
        <div className="py-20 flex items-center justify-center">
          <button className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-6 py-3 rounded-full">
            <Link href="/projects">
              <span>Back to Projects</span>
            </Link>
            <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px" />
          </button>
        </div>
      </div>
    </>
  );
};
export default page;
