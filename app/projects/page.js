import React from "react";
import Projects from "../components/Projects/Projects";

export const metadata = {
  metadataBase: new URL(process.env.DOMAIN_NAME),
  title: {
    default: "Projects - Md. Shakib Mia",
    template: "%s | Md. Shakib Mia",
  },
  description:
    "Explore my full-stack web development projects built with React, Next.js, Node.js, Express, MongoDB, TailwindCSS, Redux, and AI integrations.",

  keywords: [
    "Full Stack Developer Projects",
    "React Projects",
    "Next.js Projects",
    "Node.js Projects",
    "Express.js Projects",
    "MongoDB Projects",
    "TailwindCSS Projects",
    "Redux Projects",
    "OpenAI Integration",
    "Ollama Integration",
    "Portfolio Projects",
    "Web Development Portfolio",
  ],

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Projects - Md. Shakib Mia",
    description:
      "Explore my full-stack web development projects built with React, Next.js, Node.js, Express, MongoDB, TailwindCSS, Redux, and AI integrations.",
    url: `${process.env.DOMAIN_NAME}/projects`,
    type: "website",
    siteName: "Md. Shakib Mia Portfolio",
    locale: "en_US",
    // images: [] // image na thakle empty or comment kore rakho
  },

  twitter: {
    card: "summary_large_image",
    title: "Projects - Md. Shakib Mia",
    description:
      "Explore my full-stack web development projects built with React, Next.js, Node.js, Express, MongoDB, TailwindCSS, Redux, and AI integrations.",
    site: "@shakib_mia",
    // image: undefined // optional
  },

  alternates: {
    canonical: `${process.env.DOMAIN_NAME}/projects`,
  },
};

const page = () => {
  return (
    <>
      <Projects />
    </>
  );
};

export default page;
