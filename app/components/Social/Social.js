import React from "react";
import {
  BsFacebook,
  BsGithub,
  BsLinkedin,
  BsTwitterX,
  BsWhatsapp,
} from "react-icons/bs";

const Social = () => {
  return (
    <div className="w-full lg:w-25 bg-container lg:rounded-2xl p-4 h-fit lg:h-full flex items-center">
      <div className="gap-4 grid grid-cols-5 lg:grid-cols-1 justify-center items-center w-10/12 mx-auto lg:w-full">
        <a
          href="https://github.com/shakib-mia"
          target="_blank"
          rel="noreferrer"
          className="inline-flex justify-center items-center w-full aspect-square hover:bg-primary hover:shadow-primary transition rounded-full shadow-high"
        >
          <BsGithub className="text-3xl" />
        </a>
        <a
          href="https://linkedin.com/in/mdshakibmia"
          target="_blank"
          rel="noreferrer"
          className="inline-flex justify-center items-center w-full aspect-square hover:bg-primary hover:shadow-primary transition rounded-full shadow-high"
        >
          <BsLinkedin className="text-3xl" />
        </a>
        <a
          href="https://x.com/md_shakib_mia"
          target="_blank"
          rel="noreferrer"
          className="inline-flex justify-center items-center w-full aspect-square hover:bg-primary hover:shadow-primary transition rounded-full shadow-high"
        >
          <BsTwitterX className="text-3xl" />
        </a>

        <a
          href="https://www.facebook.com/abdullahalsamad.sakib/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex justify-center items-center w-full aspect-square hover:bg-primary hover:shadow-primary transition rounded-full shadow-high"
        >
          <BsFacebook className="text-3xl" />
        </a>

        <a
          href="https://web.whatsapp.com/send/?phone=%2B8801832492467&text&type=phone_number&app_absent=0"
          target="_blank"
          rel="noreferrer"
          className="inline-flex justify-center items-center w-full aspect-square hover:bg-primary hover:shadow-primary transition rounded-full shadow-high"
        >
          <BsWhatsapp className="text-3xl" />
        </a>
      </div>
    </div>
  );
};

export default Social;
