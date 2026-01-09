"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import gsap from "gsap";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const switchTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");

    gsap.to(".theme-toggle", {
      rotation: 360,
      duration: 0.5,
      ease: "back.out(2)",
    });
  };

  return (
    <div
      className="theme-toggle cursor-pointer"
      onClick={switchTheme}
    >
      <span>{theme === "dark" ? "☀️" : "🌙"}</span>
    </div>
  );
}
