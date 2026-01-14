import Button from "@/app/components/Button/Button";
import GallerySlider from "@/app/components/GallerySlider/GallerySlider";
import { projectsCollection } from "@/app/lib/mongodb";
import { notFound } from "next/navigation";
import React from "react";

export async function generateStaticParams() {
  const projects = await projectsCollection.find({}).toArray();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

const page = async ({ params }) => {
  const { slug } = await params;
  const project = await projectsCollection.findOne({ slug });

  if (project === null) {
    return notFound();
  }

  return (
    <main className="space-y-8">
      {/* <aside className="lg:sticky top-0 h-fit"> */}
      <section>
        <h1 className="font-bold!">
          {project?.title} - {project?.category}
        </h1>
        <p className="my-4">{project?.overview}</p>

        <GallerySlider
          images={
            project.otherImages
              ? [project.image, ...project.otherImages]
              : [project.image]
          }
        />
      </section>
      <Button href={project?.livePreview} target="_blank">
        Live Preview
      </Button>
      <section>
        <h2 className="font-bold!">Objective</h2>
        <p>{project?.objective}</p>
      </section>
      <section>
        <h2 className="font-bold!">Role and Responsibilities</h2>
        <ul className="list-disc pl-8">
          {project?.roleAndResponsibilities?.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>
      <section>
        <h2 className="font-bold!">Solution Strategy</h2>
        <p>{project?.solutionStrategy}</p>
      </section>
      <section>
        <h2 className="font-bold!">Key Features</h2>
        <ul className="list-disc pl-8">
          {project?.keyFeatures?.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </section>
      <section>
        <h2 className="font-bold!">Tech Stack</h2>
        <div className="space-y-4 ml-8">
          {project?.techStack?.frontend && (
            <div>
              <h3 className="font-bold!">Frontend:</h3>
              <ul className="list-disc pl-8">
                {project?.techStack?.frontend?.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            </div>
          )}
          {project?.techStack?.styling && (
            <div>
              <h3 className="font-bold!">Styling:</h3>
              <ul className="list-disc pl-8">
                {project?.techStack?.styling?.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            </div>
          )}
          {project?.techStack?.architecture && (
            <div>
              <h3 className="font-bold!">Architecture:</h3>
              <ul className="list-disc pl-8">
                {project?.techStack?.architecture?.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            </div>
          )}
          {project?.techStack?.seo && (
            <div>
              <h3 className="font-bold!">SEO:</h3>
              <ul className="list-disc pl-8">
                {project?.techStack?.seo?.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            </div>
          )}
          {project?.techStack?.performance && (
            <div>
              <h3 className="font-bold!">Performance:</h3>
              <ul className="list-disc pl-8">
                {project?.techStack?.performance?.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>
      <section>
        <h2 className="font-bold!">Performance and Optimization</h2>
        <p>{project?.performanceAndOptimization}</p>
      </section>
      <section>
        <h2 className="font-bold!">Challenges and Learnings</h2>
        <p>{project?.challengesAndLearnings}</p>
      </section>
      <section>
        <h2 className="font-bold!">Final Outcome</h2>
        <p>{project?.finalOutcome}</p>
      </section>
      <section>
        <h2 className="font-bold!">Ideal Use Cases</h2>
        <ul className="list-disc pl-8">
          {project?.idealUseCases?.map((useCase, index) => (
            <li key={index}>{useCase}</li>
          ))}
        </ul>
      </section>
      {/* </aside> */}
    </main>
  );
};

export default page;
