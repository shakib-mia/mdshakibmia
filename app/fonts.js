// fonts.js

import { Inter, Lato, Montserrat, Raleway } from "next/font/google";

export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "variable",
  display: "swap",
});

export const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  display: "swap",
});

export const raleway = Raleway({
  subsets: ["latin"],
  weight: "variable",
  display: "swap",
});

export const inter = Inter({
  subsets: ["latin"],
  weight: "variable",
  display: "swap",
});
