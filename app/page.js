"use client";

import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import PageWrapper from "@/components/PageWrapper";
import content from "@/data/content.json";
import Link from "next/link";
import GlassCube from "@/components/GlassCube";

gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
  useEffect(() => {
  const ctx = gsap.context(() => {
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

    // Navbar
    gsap.from("nav", {
      opacity: 0,
      y: -50,
      duration: 1,
      delay: 0.2,
      ease: "power4.out",
    });

    // Horizontal Scroll
    const scrollContainer = document.querySelector(".horizontal-scroll");

    if (scrollContainer) {
      gsap.to(".horizontal-scroll", {
        x: () =>
          -(scrollContainer.scrollWidth - window.innerWidth + 100),
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
  });

  return () => {
    ctx.revert(); // IMPORTANT: Clean up GSAP animations when leaving the page
    ScrollTrigger.killAll(); // Optional but recommended for pages with multiple triggers
  };
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
              {content.personal.role} 
            </p>

            <Link className="btn line-3" href="/projects">
              Explore My Work
            </Link>
          </div>

          {/* HERO IMAGE */}
          <div className="hero-image">
            {/* <div className="hero-image-bg"></div> */}

            {/* <div className="hero-image-wrapper">
              <img src={content.hero?.image || "/assets/ram.png"} alt="Ramesh" />
            </div> */}
             <GlassCube image={content.hero?.image || "/assets/ram.png"} />
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
   <div
  key={index}
  className="project-card"
  style={{
    backgroundImage: `url(${project.image})`,
  }}
>
  <div className="card-overlay"></div>
  
  <div className="card-content">
    <h3 className="project-title">{project.name}</h3>
    <p className="project-desc">{project.description}</p>
    <div className="accent-line"></div>
  </div>
  
  <div className="shine-effect"></div>
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
