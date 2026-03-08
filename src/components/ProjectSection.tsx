"use client";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { projects } from "@/utils/projects";

export default function ProjectSection() {
  return (
    <div className="max-w-5xl mx-auto px-8 pt-16">
      <div className="">
        <h1 className="text-5xl font-bold text-black dark:text-white text-start pl-2">
          Featured Projects
        </h1>
        <p className="text-slate-400 p-4 text-base text-start">
          Selected product builds that reflect my work in AI integration, enterprise workflows, and scalable SaaS architecture.
        </p>
      </div>

      <div>
        <HoverEffect items={projects} />
      </div>
    </div>
  );
}
