"use client";

import Aos from "aos";
import { useEffect } from "react";

export const useAos = () => {
  useEffect(() => {
    Aos.init({
      once: true,
      duration: 1000,
    });
  }, []);
  // return;
};
