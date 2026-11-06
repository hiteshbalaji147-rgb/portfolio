import React, { useState, useEffect } from "react";
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

export function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("home");
  const [selectedProject, setSelectedProject] = useState(null);
  const [reelOpen, setReelOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress(window.scrollY / totalScroll);
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

    const handleKeyDown = (e) => {
      // Alt + Shift + S to trigger swarm effect from anywhere
      if (e.altKey && e.shiftKey && (e.key === "S" || e.key === "s")) {
        e.preventDefault();
        toggleSwarm();
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("scroll", handleScroll);
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

      {/* Sticky Header with Navigation and Motion Button */}
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
