import React from "react";
import Button from "../Button/Button";

const AboutText = () => {
  return (
    <>
      <aside className="space-y-6 text-white">
        <h1 className="font-bold! mb-6">
          From Zero to Full Stack – My Web Development Journey
        </h1>

        <p className="text-white-2 leading-relaxed">
          During the COVID pandemic, I was in my first year of honours. Classes
          had barely started when everything suddenly shut down. Sitting at home
          with too much time and too many questions, I kept thinking,
          <em className="text-white">
            “I need to do something productive with my life.”
          </em>
        </p>

        <p className="text-white-2 leading-relaxed">
          I initially tried learning logo design, but very quickly realized that
          design wasn’t really my strength. What did excite me, though, was
          programming. Ever since my higher secondary days, I had been curious
          about how websites actually worked. So I decided to give web
          development a real shot.
        </p>

        <p className="text-white-2 leading-relaxed">
          With no money for paid courses, I started learning on my own using
          free resources—mostly YouTube. I built small projects, broke things,
          fixed them again, and slowly started understanding how the web works.
        </p>

        <p className="text-white-2 leading-relaxed">
          At one point, I reconnected with a senior from my school who was
          already working as a web developer. He suggested that I join a
          bootcamp to learn in a more structured, deadline-driven environment. I
          spoke to my mom about the fees, and thankfully, she supported me. In
          January 2022, I joined a full-stack MERN bootcamp.
        </p>

        <p className="text-white-2 leading-relaxed">
          The bootcamp was intense—but exactly what I needed. In just four
          months, I built a solid foundation in full-stack MERN development. The
          pressure of deadlines pushed me to grow faster than I ever had before.
          After finishing, I challenged myself:{" "}
          <strong className="text-white">get a job within four months.</strong>
        </p>

        <p className="text-white-2 leading-relaxed">
          That challenge paid off. In July 2022, I landed a React Developer
          internship at{" "}
          <strong className="text-white">Banao Technologies</strong> in
          Karnataka, India. There, I worked on real-world React applications,
          built reusable UI components, integrated REST APIs, and improved
          front-end state management. My internship was extended from six months
          to nine months due to performance.
        </p>

        <p className="text-white-2 leading-relaxed">
          In February 2023, I joined{" "}
          <strong className="text-white">Adztronaut</strong> as a MERN Stack
          Developer. This was a major turning point in my career. I worked on
          multiple front-end multipage websites and built a complete{" "}
          <strong className="text-white">
            music distribution platform (GeetBazaar)
          </strong>{" "}
          from scratch— including dashboards, release workflows, royalty
          tracking, account management, and an Ollama-based AI chatbot.
        </p>

        <p className="text-white-2 leading-relaxed">
          Alongside this, I completed a{" "}
          <strong className="text-white">
            Software Engineering Internship at CloudLumos
          </strong>{" "}
          (Nov 2023 – Feb 2024), where I assisted with API integrations, built
          modular components, improved UI workflows, and optimized state
          management for better user experience.
        </p>

        <p className="text-white-2 leading-relaxed">
          In January 2024, I joined{" "}
          <strong className="text-white">Raddito LLC</strong> as a Full Stack
          Web Developer. Here, I worked on production applications, improved UX
          flows, fixed performance bottlenecks, and developed structured admin
          workflows. During this time, I built over{" "}
          <strong className="text-white">20 high-quality web templates</strong>,
          strengthening my skills in responsiveness, animations, and performance
          optimization.
        </p>

        <p className="text-white-2 leading-relaxed">
          Looking back, my journey—from experimenting with design, to learning
          web development from free resources, to building full-scale production
          systems—has been full of challenges, mistakes, and growth. It taught
          me the value of persistence, self-learning, and taking ownership of
          what I build.
        </p>

        <p className="text-white font-medium">
          And even today, I’m still learning, still building, and still excited
          for whatever comes next.
        </p>

        <Button href="/projects">Explore My Projects</Button>
      </aside>
    </>
  );
};

export default AboutText;
