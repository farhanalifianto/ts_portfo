import React from "react";
import ProjectCard from "../sub/ProjectCard";
import Link from "next/link";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <Link href="https://keyybyte.vercel.app/">
          {" "}
          <ProjectCard
            src="/keyybyte.png"
            title="KeyyByte beta"
            description="Created a cloud-based storage using Next.js and Appwrite."
          />
        </Link>
        <ProjectCard
          src="/nikecone.png"
          title="Clone Nike Landing Page"
          description="Clone Nike Landing Page including users and stock management, and integration with Midtrans Payment Gateway."
        />
      </div>
    </div>
  );
};

export default Projects;
