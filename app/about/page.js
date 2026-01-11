import React from "react";
import AboutText from "../components/AboutText/AboutText";
import about from "@/app/assets/about.jpg";
import Image from "next/image";

const page = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <aside className="lg:sticky top-0 h-fit">
        <Image
          src={about}
          alt="About Me"
          className="w-full h-fit object-cover rounded-md"
        />
      </aside>
      <AboutText />
    </div>
  );
};

export default page;
