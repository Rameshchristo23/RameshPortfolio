"use client";

import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import content from "@/data/content.json";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  useEffect(() => {
    const scrollContainer = document.querySelector(".horizontal-scroll");

    gsap.to(".horizontal-scroll", {
      x: () => -(scrollContainer.scrollWidth - window.innerWidth + 100),
      ease: "none",
      scrollTrigger: {
        trigger: ".horizontal-wrapper",
        pin: true,
        scrub: 1,
        end: () => `+=${scrollContainer.scrollWidth}`,
        invalidateOnRefresh: true,
      },
    });
  }, []);

  return (
    <section className="horizontal-wrapper" id="projects">
      <h2 className="section-title">Featured Projects</h2>

      <div className="horizontal-scroll">
        {content.projects.map((p, i) => (
          <div key={i} className="h-card">{p.name}</div>
        ))}
      </div>
    </section>
  );
}
