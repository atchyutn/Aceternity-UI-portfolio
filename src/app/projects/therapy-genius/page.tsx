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
              Therapy Genius is an AI-driven platform designed to generate
              personalized therapy activities for children with ADHD, Autism,
              and similar conditions. It enhances therapy sessions by providing
              tailored activities that cater to the unique needs of each child,
              ensuring effective and engaging therapy experiences.
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
                Next.js, TypeScript, DynamoDB, Cloudflare pages, Tailwind CSS,
                OpenAI API.
              </p>
            </div>
          </div>
        </div>

        {/* introduction and landing page */}
        <div className="text-center px-4 sm:text-start sm:px-0">
          <p className="text-2xl font-bold">Introduction</p>
          <p className="text-slate-400 sm:text-start text-lg text-center pt-4">
            Therapy Genius is a groundbreaking AI solution designed to assist
            therapy centers in managing their operations and delivering
            personalized therapy activities. By leveraging advanced AI
            technology, Therapy Genius tailors activities to the individual
            needs of children, enhancing the effectiveness and engagement of
            therapy sessions.
          </p>
        </div>

        {/* landing page */}
        <div className="text-center px-4 sm:text-start sm:px-0 pb-20">
          <p className="text-2xl font-bold pt-6">Landing Page</p>
          <p className="text-slate-400 sm:text-start text-lg text-center pt-4">
            Upon visiting the Therapy Genius landing page, users can explore the
            features of the platform, understand its benefits, and get insights
            into how it can enhance therapy sessions. The landing page offers a
            seamless and informative experience, guiding users through the
            functionalities and advantages of using Therapy Genius.
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
            Therapy Genius revolutionizes the way therapy sessions are conducted
            by providing personalized, AI-generated activities. This platform
            not only enhances the therapy experience for children but also
            streamlines operations for therapy centers. Join Therapy Genius
            today and transform your therapy sessions with innovative AI
            solutions.
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
