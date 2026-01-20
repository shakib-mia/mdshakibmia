import React from "react";
import AboutText from "../components/AboutText/AboutText";
import about from "@/app/assets/about.jpg";
import Image from "next/image";

export const metadata = {
  metadataBase: new URL(process.env.DOMAIN_NAME),
  title: {
    default: "My Journey - Md. Shakib Mia",
    template: "%s | Md. Shakib Mia",
  },
  description:
    "Discover the journey of Md. Shakib Mia, a Full Stack Web Developer specialized in MERN stack, building scalable and SEO-optimized websites.",

  keywords: [
    "Full Stack Developer",
    "MERN Stack",
    "React.js",
    "Next.js",
    "Web Development Portfolio",
    "About Me",
    "Md. Shakib Mia",
    "Frontend Developer",
    "Backend Developer",
    "Portfolio",
  ],

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "My Journey - Md. Shakib Mia",
    description:
      "Discover the journey of Md. Shakib Mia, a Full Stack Web Developer specialized in MERN stack, building scalable and SEO-optimized websites.",
    url: `${process.env.DOMAIN_NAME}my-journey`,
    type: "website",
    siteName: "Md. Shakib Mia Portfolio",
    locale: "en_US",
    // images: [] // kono image na thakle empty or comment
  },

  twitter: {
    card: "summary_large_image",
    title: "My Journey - Md. Shakib Mia",
    description:
      "Discover the journey of Md. Shakib Mia, a Full Stack Web Developer specialized in MERN stack, building scalable and SEO-optimized websites.",
    site: "@shakib_mia",
    // image: undefined
  },

  alternates: {
    canonical: `${process.env.DOMAIN_NAME}my-journey`,
  },
};

const page = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <aside className="lg:sticky top-0 h-fit">
        <Image
          src={about}
          alt="About Me"
          className="w-full aspect-square object-cover rounded-md"
        />
        <h1 className="font-bold! mt-4 text-end w-5/6 ml-auto">
          Grounded by responsibility,{" "}
          <span className="text-primary/90">pulled forward</span> by ambition.
        </h1>
      </aside>
      <AboutText />
    </div>
  );
};

export default page;
