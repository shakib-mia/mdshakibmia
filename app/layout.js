import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import { inter, raleway } from "./fonts";
import Social from "./components/Social/Social";
import "react-tooltip/dist/react-tooltip.css";

export const metadata = {
  title: "Md. Shakib Mia | Full Stack MERN Developer & Web App Specialist",
  description:
    "Md. Shakib Mia is a Full Stack MERN Developer with 3+ years of experience building scalable, high-performance web applications, dashboards, SaaS platforms, and AI-integrated solutions.",
  keywords: [
    "Md. Shakib Mia",
    "Full Stack Web Developer",
    "MERN Developer",
    "Next.js Developer",
    "React Developer",
    "Web App Developer",
    "SaaS Developer",
    "Bangladesh Web Developer",
  ],
  authors: [{ name: "Md. Shakib Mia" }],
  creator: "Md. Shakib Mia",
  openGraph: {
    title: "Md. Shakib Mia | Full Stack MERN Developer",
    description:
      "Building scalable, high-impact web applications using MERN, Next.js, and modern web technologies.",
    url: "https://mdshakibmia.vercel.app/",
    siteName: "Md. Shakib Mia Portfolio",
    images: [
      {
        url: "./favicon.ico",
        width: 1200,
        height: 630,
        alt: "Md. Shakib Mia – Full Stack Web Developer",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Md. Shakib Mia | Full Stack MERN Developer",
    description:
      "Full Stack MERN developer crafting scalable dashboards, SaaS platforms, and AI-powered web applications.",
    images: ["./favicon.ico"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${raleway.className} ${inter.className}`}>
      <head>
        <meta
          name="google-site-verification"
          content="6mY5DUE_r-6_TFQBAgw6akpZgBgyjYxF4GXrYDaz6lI"
        />
      </head>
      <body
        className={`antialiased w-full items-center lg:container lg:mx-auto h-screen! lg:px-0 lg:py-6`}
      >
        <div className="flex h-full flex-col lg:flex-row gap-y-4 lg:gap-6 justify-between">
          <Navbar />
          <div className="w-full bg-container rounded-2xl p-4 overflow-y-auto h-full overflow-x-hidden">
            {children}
          </div>
          <Social />
        </div>
      </body>
    </html>
  );
}
