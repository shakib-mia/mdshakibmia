import React from "react";
import { FaReact, FaNodeJs, FaDatabase, FaPython } from "react-icons/fa";
import {
  SiExpress,
  SiJsonwebtokens,
  SiMongodb,
  SiNextdotjs,
  SiOllama,
  SiOpenai,
  SiRedux,
  SiTailwindcss,
  SiVercel,
} from "react-icons/si";
import { TbBrandFirebase, TbBrandOauth } from "react-icons/tb";

const page = () => {
  const skills = [
    {
      category: "Frontend",
      items: [
        {
          name: "React.js",
          icon: (
            <FaReact className="text-blue-500 group-hover:text-white w-10 h-10 transition" />
          ),
        },
        {
          name: "Next.js",
          icon: <SiNextdotjs className="w-10 h-10 transition" />,
        },
        {
          name: "TailwindCSS",
          icon: (
            <SiTailwindcss className="text-sky-400 group-hover:text-white w-10 h-10 transition" />
          ),
        },
        {
          name: "Redux",
          icon: (
            <SiRedux className="text-purple-700 group-hover:text-white w-10 h-10 transition" />
          ),
        },
      ],
    },
    {
      category: "Backend & Auth",
      items: [
        {
          name: "Node.js",
          icon: (
            <FaNodeJs className="text-green-600 w-10 h-10 transition group-hover:text-white" />
          ),
        },
        {
          name: "Express.js",
          icon: <SiExpress className="w-10 h-10 transition" />,
        },
        {
          name: "MongoDB",
          icon: (
            <SiMongodb className="text-green-500 w-10 h-10 transition group-hover:text-white" />
          ),
        },
        {
          name: "Firebase Auth",
          icon: (
            <TbBrandFirebase className="text-yellow-500 w-10 h-10 transition group-hover:text-white" />
          ),
        },
        {
          name: "Google OAuth",
          icon: <TbBrandOauth className="w-10 h-10 transition" />,
        },
        {
          name: "JWT",
          icon: <SiJsonwebtokens className="w-10 h-10 transition" />,
        },
      ],
    },
    {
      category: "AI Integration",
      items: [
        { name: "Ollama", icon: <SiOllama className="w-10 h-10 transition" /> },
        {
          name: "OpenAI API Workflows",
          icon: <SiOpenai className="w-10 h-10 transition" />,
        },
      ],
    },
    {
      category: "Other",
      items: [
        // { name: "REST APIs", icon: <SiRest className="w-10 h-10 transition" /> },
        {
          name: "File Upload Systems",
          icon: <FaDatabase className="w-10 h-10 transition" />,
        },
        {
          name: "Payment Flows",
          icon: <FaPython className="w-10 h-10 transition" />,
        },
        {
          name: "Deployment",
          icon: <SiVercel className="w-10 h-10 transition" />,
        },
      ],
    },
  ];

  return (
    <div>
      <h1 className="font-bold! text-center mb-8">My Skills</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skills.map((skillCategory, index) => (
          <aside key={index}>
            <h2 className="font-semibold! text-lg mb-4">
              {skillCategory.category}
            </h2>
            <ul className="gap-3 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {skillCategory.items.map((item, idx) => (
                <li
                  className="bg-white/20 group flex flex-col items-center justify-center p-4 aspect-square w-full text-center rounded-lg shadow-high hover:shadow-primary hover:bg-primary transition"
                  key={idx}
                >
                  {item.icon}
                  <h4 className="mt-2">{item.name}</h4>
                </li>
              ))}
            </ul>
          </aside>
        ))}
      </div>
    </div>
  );
};

export default page;
