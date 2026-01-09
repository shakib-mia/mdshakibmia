import { projectsCollection } from "@/app/lib/mongodb";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "../Button/Button";

const Projects = async ({ pathname }) => {
  const projects = await projectsCollection
    .find({})
    .limit(pathname === "/" ? 3 : 0)
    .toArray();
  return (
    <section className="mt-12">
      <h1 className="font-bold! mb-4 text-center">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Link href={`/projects/${project.slug}`} key={project._id}>
            <Image
              src={project.image}
              alt={project.title}
              width={400}
              height={400}
              className="w-full object-cover mb-4 rounded-lg"
              // unoptimized
            />
            <h3 className="font-bold">
              {project.title} - {project.category}
            </h3>
          </Link>
        ))}
      </div>
      {pathname === "/" && (
        <div className="flex justify-center mt-6">
          <Button href="/projects">View All Projects</Button>
        </div>
      )}
    </section>
  );
};

export default Projects;
