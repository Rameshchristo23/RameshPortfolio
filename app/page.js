"use client";

import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import PageWrapper from "@/components/PageWrapper";
import content from "@/data/content.json";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
  useEffect(() => {
    // Hero Animations
    gsap.from(".line-1", {
      opacity: 0,
      x: -100,
      duration: 1,
      delay: 0.5,
      ease: "power4.out",
    });

    gsap.from(".line-2", {
      opacity: 0,
      x: -80,
      duration: 1,
      delay: 0.8,
      ease: "power4.out",
    });

    gsap.from(".line-3", {
      opacity: 0,
      y: 30,
      duration: 1,
      delay: 1.1,
      ease: "power4.out",
    });

    gsap.from(".hero-image-wrapper", {
      opacity: 0,
      scale: 0.5,
      duration: 1.2,
      delay: 0.6,
      ease: "back.out(1.7)",
    });

    // Navbar entrance
    gsap.from("nav", {
      opacity: 0,
      y: -50,
      duration: 1,
      delay: 0.2,
      ease: "power4.out",
    });

    // Horizontal Scroll (Projects)
    const scrollContainer = document.querySelector(".horizontal-scroll");

    if (scrollContainer) {
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
    }
  }, []);

  return (
    <PageWrapper>
      {/* HERO SECTION */}
      <section id="home" className="hero">
        <div className="hero-content">
          {/* HERO TEXT */}
          <div className="hero-text">
            <h2 className="line-1">
              Hi, I'm{" "}
              <span>
                {content.personal.name}
              </span>
            </h2>

            <p className="line-2 text-gray-300">
              {content.personal.role} • UI Animator • GSAP Specialist
            </p>

            <Link className="btn line-3" href="/projects">
              Explore My Work
            </Link>
          </div>

          {/* HERO IMAGE */}
          <div className="hero-image">
            <div className="hero-image-bg"></div>

            <div className="hero-image-wrapper">
              <img src={content.hero?.image || "/assets/ram.png"} alt="Ramesh" />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator"></div>
      </section>

      {/* FEATURED PROJECTS */}
      <section id="projects" className="horizontal-wrapper">
        <h2
          className="section-title"
        >
          Featured Projects
        </h2>

        <div className="horizontal-scroll">
          {content.projects.map((project, index) => (
            <div key={index} className="h-card">
              {project}
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        © 2025 Ramesh. All Rights Reserved. Crafted with passion ✨
      </footer>
    </PageWrapper>
  );
}
