import React from "react";
import laptop from "@/app/assets/laptop.jpg";
import Image from "next/image";

const page = () => {
  const experiences = [
    {
      role: "MERN Stack Developer",
      company: "Adztronaut",
      duration: "February 2023 – January 2026",
      description: [
        "Worked on multi-page front-end websites and a full-stack music distribution platform.",
        "Built internal dashboards, release workflows, and integrated an Ollama-powered AI chatbot.",
      ],
    },
    {
      role: "Full Stack Web Developer",
      company: "Raddito LLC",
      duration: "January 2024 – January 2025",
      description: [
        "Developed feature modules and admin workflows for production client platforms.",
        "Improved UX flow and resolved performance bottlenecks in live applications.",
      ],
    },
    {
      role: "Software Engineering Intern",
      company: "CloudLumos",
      duration: "November 2023 – February 2024",
      description: [
        "Assisted with API integrations and modular component development.",
        "Optimized UI workflows and improved state management for better usability.",
      ],
    },
    {
      role: "React Developer Intern",
      company: "Banao Tech",
      duration: "July 2022 – May 2023",
      description: [
        "Built reusable UI components and optimized front-end state handling.",
        "Integrated REST APIs and improved data-fetching workflows.",
      ],
    },
  ];

  return (
    <>
      <div className="lg:w-1/2 mx-auto text-center">
        <h1 className="font-bold!">Professional Experience</h1>
        <p>
          Hands-on experience working on production-ready web applications, SaaS
          platforms, and digital products—focused on performance, clean
          architecture, and real-world usability.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-8 items-center">
        <Image
          src={laptop}
          className="h-fit rounded-lg aspect-video lg:aspect-square object-center object-cover"
          alt="Laptop"
        />
        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <section key={index}>
              <div className="flex items-end gap-3">
                <h2 className="text-xl font-semibold!">{exp.role}</h2>
              </div>
              <p className="text-white mb-2">
                {exp.company}{" "}
                <span className="text-sm text-white-2">({exp.duration})</span>
              </p>
              <ul className="list-disc pl-5 space-y-1">
                {exp.description.map((desc, i) => (
                  <li key={i} className="text-white-2">
                    {desc}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </>
  );
};

export default page;
