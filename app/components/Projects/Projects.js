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
    <section className={pathname === "/" && "mt-12"}>
      {pathname === "/" ? (
        <h2 className="font-bold! mb-2 text-center">Featured Works</h2>
      ) : (
        <h1 className="font-bold! mb-2 text-center">Featured Works</h1>
      )}
      <p className="lg:w-5/12 mx-auto text-center">
        A selection of featured projects including website templates, SaaS
        websites, agency platforms, and real-world products—built with a focus
        on performance, usability, and modern design.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {projects.map((project) => (
          <Link href={`/projects/${project.slug}`} key={project._id}>
            <Image
              src={project.image}
              alt={project.title}
              width={400}
              height={400}
              className="w-full object-cover mb-2 rounded-lg"
              // unoptimized
            />
            <h3 className="font-semibold!">
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
