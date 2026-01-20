// components/SafeLink.js
"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SafeLink({
  href,
  children,
  className,
  onClick,
  ...props
}) {
  const router = useRouter();

  const handleClick = (e) => {
    if (onClick) onClick(e);

    // 🔥 If target is _blank, let browser handle it
    if (props.target === "_blank") {
      return;
    }

    if (!e.defaultPrevented) {
      e.preventDefault();

      if (window.HearthMotion?.cleanup) {
        try {
          window.HearthMotion.cleanup();
        } catch (error) {
          console.warn("HearthMotion cleanup during navigation:", error);
        }
      }

      setTimeout(() => {
        router.push(href);
        setTimeout(() => window.scrollTo(0, 0), 11);
      }, 10);
    }
  };

  return (
    <Link href={href} className={className} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
}
