import Image from "next/image";
import React from "react";
import Button from "../Button/Button";
import hero from "./../../assets/hero.jpg";
import { IoMdDownload } from "react-icons/io";

const Hero = () => {
  return (
    <header className="grid grid-cols-12 gap-4 items-center">
      <aside className="col-span-12 lg:col-span-5">
        <Image
          src={hero}
          alt="hero"
          width={600}
          height={400}
          className="rounded-2xl aspect-video object-cover object-[0_15%] w-full"
        />
      </aside>

      <aside className="col-span-12 lg:col-span-7">
        <h1 className="font-bold! mb-4">
          Building Scalable, <br className="hidden lg:block" /> High-Impact Web
          Apps
        </h1>
        <p className="mb-2">
          I’m Md. Shakib Mia, a Full Stack MERN developer with 3+ years of
          experience building high-performance web applications. I specialize in
          creating dashboards, automation workflows, and AI-integrated solutions
          that enhance user experience and drive real results for businesses and
          startups.
        </p>
        <p className="mb-4">
          Alongside core development, I integrate AI-powered features and
          automation to streamline workflows and improve efficiency. My goal is
          to build practical, future-ready solutions that balance functionality,
          performance, and user experience.
        </p>
        <div className="flex gap-4">
          <Button className="w-1/2 lg:w-fit p-4! lg:py-2!" href="/contact">
            Get Started
          </Button>
          <Button
            href="https://drive.google.com/uc?export=download&id=1VxhSd9Wdi9RxLYFHc6IMcoffDyegOmnO"
            target="_blank"
            className="inline-flex lg:hidden! justify-center gap-2 items-center w-1/2 p-4! overflow-hidden whitespace-nowrap"
          >
            {"Download Resume"}
          </Button>
        </div>
      </aside>
    </header>
  );
};

export default Hero;
