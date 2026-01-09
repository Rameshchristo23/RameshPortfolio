"use client";

import { useEffect } from "react";
import gsap from "gsap";
import content from "@/data/content.json";
import ThemeToggle from "./ThemeToggle";

export default function Hero() {
  useEffect(() => {
    gsap.from(".line-1", { opacity: 0, x: -100, duration: 1, delay: 0.5 });
    gsap.from(".line-2", { opacity: 0, x: -80, duration: 1, delay: 0.8 });
    gsap.from(".line-3", { opacity: 0, y: 30, duration: 1, delay: 1.1 });
    gsap.from(".hero-image-wrapper", {
      opacity: 0,
      scale: 0.5,
      duration: 1.2,
      delay: 0.6,
    });
  }, []);

  return (
    <section className="hero" id="home">
      <ThemeToggle />

      <div className="hero-content">
        <div className="hero-text">
          <h2 className="line-1">
            {content.hero.title} <span>Ramesh</span>
          </h2>
          <p className="line-2">{content.hero.subtitle}</p>

          <button className="btn line-3">{content.hero.buttonText}</button>
        </div>

        <div className="hero-image">
          <div className="hero-image-bg"></div>

          <div className="hero-image-wrapper">
            <img src={content.hero.image} alt="Ramesh" />
          </div>
        </div>
      </div>

      <div className="scroll-indicator"></div>
    </section>
  );
}
