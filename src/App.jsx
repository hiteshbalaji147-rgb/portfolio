import React, { useState, useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ProjectGrid } from "./components/ProjectGrid";
import { Breakdown } from "./components/Breakdown";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ProjectDialog } from "./components/ProjectDialog";
import { ReelModal } from "./components/ReelModal";
import { toggleSwarm } from "./swarm/swarmEngine";
import { smoothScrollTo } from "./utils/scroll";

export function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("home");
  const [selectedProject, setSelectedProject] = useState(null);
  const [reelOpen, setReelOpen] = useState(false);

  useEffect(() => {
    // Initialize Lenis smooth scroll engine
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: false,
    });

    window.__lenis = lenis;

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    const handleScroll = () => {
      const scrollY = lenis.scroll;
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress(scrollY / totalScroll);
      }

      // Section scroll spy
      const sections = ["contact", "experience", "about", "breakdown", "work", "home"];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 250) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    lenis.on("scroll", handleScroll);

    // Global in-page anchor interceptor for seamless smooth scrolling
    const handleAnchorClick = (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      if (anchor) {
        const href = anchor.getAttribute("href");
        if (href && href !== "#") {
          e.preventDefault();
          smoothScrollTo(href);
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);

    const handleKeyDown = (e) => {
      // Alt + Shift + S to trigger swarm effect from anywhere
      if (e.altKey && e.shiftKey && (e.key === "S" || e.key === "s")) {
        e.preventDefault();
        toggleSwarm();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      window.__lenis = null;
      document.removeEventListener("click", handleAnchorClick);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="portfolio-app">
      {/* Scroll-Linked Reading Progress Bar */}
      <div
        className="reading-progress"
        style={{ transform: `scaleX(${scrollProgress})` }}
      />

      {/* Sticky Header with Smooth Navigation and Motion Button */}
      <Header activeSection={activeSection} />

      <main>
        {/* Full-Height Editorial Hero */}
        <Hero onOpenReel={() => setReelOpen(true)} />

        {/* Selected Work Portfolio Grid */}
        <ProjectGrid onSelectProject={(project) => setSelectedProject(project)} />

        {/* Interactive Architecture Breakdown Slider */}
        <Breakdown />

        {/* Studio, Education, Process & Philosophy */}
        <About />

        {/* Career Timeline Accordion */}
        <Experience />

        {/* Inquiries, Brief Form & Direct Channels */}
        <Contact onOpenReel={() => setReelOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Accessible Project Detail Modal */}
      <ProjectDialog
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Interactive Showreel Modal */}
      <ReelModal
        isOpen={reelOpen}
        onClose={() => setReelOpen(false)}
      />
    </div>
  );
}
