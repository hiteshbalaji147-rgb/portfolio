import React, { useState, useEffect } from "react";
import { siteConfig } from "../config/site";
import { toggleSwarm } from "../swarm/swarmEngine";
import { smoothScrollTo } from "../utils/scroll";
import { Sparkles, Menu, X, ArrowUpRight, Mail } from "lucide-react";

export function Header({ activeSection }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [swarmTriggered, setSwarmTriggered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMotionClick = () => {
    setSwarmTriggered(true);
    toggleSwarm();
  };

  const navLinks = [
    { label: "Work", href: "#work", id: "work" },
    { label: "Architecture", href: "#breakdown", id: "breakdown" },
    { label: "Studio", href: "#about", id: "about" },
    { label: "Experience", href: "#experience", id: "experience" },
    { label: "Contact", href: "#contact", id: "contact" }
  ];

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    smoothScrollTo(targetId);
  };

  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
      {/* Brand Wordmark - Click scrolls smoothly to top */}
      <a
        href="#home"
        className="wordmark"
        onClick={(e) => handleNavClick(e, "home")}
        aria-label={`${siteConfig.identity.displayName} Home`}
      >
        {siteConfig.identity.displayName}
        <span>.</span>
      </a>

      {/* Desktop Navigation */}
      <nav className="desktop-nav" aria-label="Main Navigation">
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={link.href}
            onClick={(e) => handleNavClick(e, link.id)}
            className={activeSection === link.id ? "active" : ""}
          >
            {link.label}
          </a>
        ))}
      </nav>

      {/* Header Actions */}
      <div className="header-actions">
        {/* Standalone Swarm Motion Button */}
        {siteConfig.preferences.showSwarmMotion && (
          <button
            type="button"
            className="motion-button"
            onClick={handleMotionClick}
            title="Trigger Swarm Multiplayer Rebuild Animation"
            aria-label="Trigger Swarm Live Rebuild Animation"
          >
            <span className="motion-badge" />
            <Sparkles size={13} className="accent" />
            <span>MOTION</span>
          </button>
        )}

        {/* Contact CTA */}
        <a
          href="#contact"
          className="header-contact"
          onClick={(e) => handleNavClick(e, "contact")}
        >
          <Mail size={14} />
          <span>Say Hello</span>
          <ArrowUpRight size={14} />
        </a>

        {/* Mobile Menu Hamburger Toggle */}
        <button
          type="button"
          className="menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu" role="dialog" aria-modal="true">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.id)}
            >
              <span>{link.label}</span>
              <ArrowUpRight size={16} className="muted" />
            </a>
          ))}
          <button
            type="button"
            className="motion-button"
            style={{ width: "100%", justifyContent: "center", marginTop: 12, height: 46 }}
            onClick={() => {
              setMobileMenuOpen(false);
              handleMotionClick();
            }}
          >
            <span className="motion-badge" />
            <Sparkles size={14} className="accent" />
            <span>TRIGGER SWARM REBUILD</span>
          </button>
        </div>
      )}
    </header>
  );
}
