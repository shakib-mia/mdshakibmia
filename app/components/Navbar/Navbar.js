"use client";
import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import { usePathname } from "next/navigation";
import SafeLink from "../SafeLink/SafeLink";
import portfolio from "@/app/assets/portrait.jpg";
import {
  MdOutlineHome,
  MdOutlinePerson,
  MdOutlineWork,
  MdOutlineBuild,
  MdOutlineLayers,
  MdOutlineMail,
} from "react-icons/md";
import Image from "next/image";
import { IoMdClose, IoMdDownload } from "react-icons/io";
import { FaChevronLeft } from "react-icons/fa";
import { Tooltip } from "react-tooltip";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [phoneNav, showPhoneNav] = useState(false);
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [indicatorPos, setIndicatorPos] = useState(0);

  // const isHome = pathname === "/";

  // 📌 effect
  useEffect(() => {
    const updatePos = () => {
      const id = pathname === "/" ? "home" : pathname.split("/")[1];
      const el = document.getElementById(id);
      console.log({ id, el });
      if (el) setIndicatorPos(el.offsetTop);
    };

    // defer to next frame
    const raf = requestAnimationFrame(updatePos);

    return () => cancelAnimationFrame(raf);
  }, [pathname, open]); // ✅ open change er sathe update

  // 🔹 Navbar items array
  const navItems = [
    { icon: <MdOutlineHome />, name: "Home", id: "home", href: "/" },
    {
      icon: <MdOutlinePerson />,
      name: "My Journey",
      id: "my-journey",
      href: "/my-journey",
    },
    {
      icon: <MdOutlineWork />,
      name: "Projects",
      id: "projects",
      href: "/projects",
    },
    { icon: <MdOutlineBuild />, name: "Skills", id: "skills", href: "/skills" },
    {
      icon: <MdOutlineLayers />,
      name: "Experience",
      id: "experience",
      href: "/experience",
    },
    {
      icon: <MdOutlineMail />,
      name: "Contact",
      id: "contact",
      href: "/contact",
    },
  ];

  return (
    <nav
      id="navbar"
      className={`bg-container lg:rounded-2xl relative transition-all duration-300 whitespace-nowrap w-full ${
        open ? "lg:w-90" : "lg:w-29"
      }`}
      // onMouseEnter={() => setOpen(true)}
      // onMouseLeave={() => setOpen(false)}
    >
      <div
        className="hidden lg:block absolute top-7 -right-4 p-1 rounded-r-2xl text-base bg-container cursor-pointer"
        // style={{ right: -12 }}
        onClick={() => setOpen(!open)}
      >
        <FaChevronLeft
          className={`transition-transform ${open ? "rotate-0" : "rotate-180"}`}
        />
      </div>
      <div className="flex lg:flex-col h-fit lg:h-full justify-between relative p-4 items-center">
        {/* Logo */}
        <SafeLink
          href="/"
          className="flex items-center font-gilroy-bold cursor-pointer gap-2 h-fit w-full overflow-hidden"
        >
          <Image
            src={portfolio}
            alt="logo"
            className={`${
              open ? "w-16" : "w-16.25"
            } aspect-square rounded-full`}
          />
          {/* {open && ( */}
          <aside className={open ? "block" : "lg:hidden"}>
            <h3 className="font-bold!">Md. Shakib Mia</h3>
            {/* <h3 className="hidden lg:block font-bold!">Md. Shakib Mia</h3> */}
            <p className="text-xs! lg:text-sm!">Full Stack Developer</p>
          </aside>
          {/* )} */}
        </SafeLink>
        {/* Desktop Menu */}
        {/* // 📌 ul wrapper */}
        <ul className="hidden lg:block relative w-full font-normal">
          {/* Active Indicator */}
          <span
            className="absolute left-0 w-full h-14 z-0 bg-primary rounded transition-all duration-300 shadow shadow-primary"
            style={{
              top: indicatorPos,
            }}
          />

          {navItems.map((item) => (
            <li
              className="relative h-14 flex items-center"
              id={item.id}
              key={item.href}
            >
              <SafeLink
                href={item.href}
                className={`transition px-4 inline-flex  w-full ${
                  open ? "gap-2" : "justify-center"
                } items-center h-full ${
                  item.href === "/"
                    ? pathname === item.href
                      ? "hover:text-white"
                      : "hover:text-primary"
                    : pathname.includes(item.href)
                      ? "hover:text-white"
                      : "hover:text-primary"
                }`}
                data-tooltip-id={`tooltip-${item.id}`} // unique ID
                data-tooltip-content={item.name} // tooltip content
              >
                <span className="text-3xl">{item.icon}</span>
                {open && item.name}
              </SafeLink>
              {open || <Tooltip id={`tooltip-${item.id}`} place="right" />}
            </li>
          ))}
        </ul>
        <Button
          href="https://drive.google.com/uc?export=download&id=1VxhSd9Wdi9RxLYFHc6IMcoffDyegOmnO"
          target="_blank"
          className="hidden! lg:inline-flex! justify-center gap-2 items-center w-full p-4! overflow-hidden"
          data-tooltip-id={`tooltip-dl-resume`} // unique ID
          data-tooltip-content="Download Resume" // tooltip content
        >
          {open && "Download Resume"}
          <IoMdDownload className="inline-block mb- text-2xl" />
        </Button>
        <Tooltip id={`tooltip-dl-resume`} place="right" />
        {/* CTA & Hamburger */}
        <div className="flex lg:hidden items-center h-fit">
          {/* <Button className="hidden! lg:block!" href="/login" target="_blank">
            Get Started
          </Button> */}

          <button
            className="lg:hidden focus:outline-none ml-2 text-5xl"
            onClick={() => showPhoneNav(!phoneNav)}
          >
            {phoneNav ? (
              <IoMdClose className="text-4xl" />
            ) : (
              <RxHamburgerMenu className="text-4xl" />
            )}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        className={`absolute top-full left-0 w-full bg-container text-white shadow-lg shadow-primary/20 lg:hidden max-h-89 transition-[height] overflow-hidden ${
          phoneNav ? "h-96" : "h-0"
        }`}
      >
        <ul className="flex flex-col divide-y divide-white/20 font-medium">
          {navItems.map((item) => (
            <li className="" key={item.href}>
              <SafeLink
                href={item.href}
                className="hover:bg-primary hover:text-white inline-block w-full py-3 transition"
              >
                <div className="container mx-auto">{item.name}</div>
              </SafeLink>
            </li>
          ))}
          <li className="container py-3">
            <Button
              href="https://drive.google.com/uc?export=download&id=1VxhSd9Wdi9RxLYFHc6IMcoffDyegOmnO"
              target="_blank"
              className="inline-block w-full text-center"
            >
              Get Started
            </Button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
