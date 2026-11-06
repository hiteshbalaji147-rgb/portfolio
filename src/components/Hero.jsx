import React from "react";
import { siteConfig } from "../config/site";
import { smoothScrollTo } from "../utils/scroll";
import { ArrowUpRight, MapPin, Play, ChevronDown, Plus } from "lucide-react";

export function Hero({ onOpenReel }) {
  const handleScrollClick = (e, targetId) => {
    e.preventDefault();
    smoothScrollTo(targetId);
  };

  return (
    <section className="hero" id="home">
      {/* Top Metadata & Availability Bar */}
      <div className="hero-top">
        <span>{siteConfig.identity.profession}</span>
        <div className="availability">
          <i />
          <span>{siteConfig.identity.availability}</span>
        </div>
      </div>

      {/* Giant Background Title */}
      <div className="hero-title display" aria-hidden="true">
        {siteConfig.identity.fullName.toUpperCase()}
      </div>

      {/* Center Portrait / Silhouette Layer */}
      <div className="hero-portrait">
        <img
          src={siteConfig.identity.portrait}
          alt={siteConfig.identity.fullName}
          loading="eager"
          decoding="async"
        />
      </div>

      {/* Hero Intro Block (Bottom-Left) */}
      <div className="hero-intro">
        <span className="handwriting">Hello, I am</span>
        <h1>
          {siteConfig.identity.fullName.split(" ")[0]} <span>{siteConfig.identity.fullName.split(" ").slice(1).join(" ")}</span>
        </h1>
        <div className="hero-role">{siteConfig.identity.roleLine2}</div>
        <p className="hero-description">{siteConfig.identity.intro}</p>
        
        <div className="hero-actions">
          <a
            href="#work"
            className="primary-link"
            onClick={(e) => handleScrollClick(e, "work")}
          >
            <span>Explore Work</span>
            <ArrowUpRight size={16} />
          </a>
          <a
            href="#contact"
            className="secondary-link"
            onClick={(e) => handleScrollClick(e, "contact")}
          >
            <span>Get In Touch</span>
          </a>
        </div>

        <div className="hero-location">
          <MapPin size={12} />
          <span>Based in {siteConfig.identity.location}</span>
        </div>
      </div>

      {/* Hero Side Block (Bottom-Right) */}
      <div className="hero-side">
        <div className="hero-manifesto">
          <div className="crosshair">
            <Plus size={22} />
          </div>
          <p>{siteConfig.identity.headline}</p>
        </div>

        <div className="hero-stats">
          {siteConfig.metrics.map((stat, idx) => (
            <div key={idx}>
              <div className="display">{stat.value}</div>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Hero Bottom Bar */}
      <div className="hero-bottom">
        <button
          type="button"
          className="reel-button"
          onClick={onOpenReel}
          aria-label="Watch interactive demo reel"
        >
          <div className="play-circle">
            <Play size={12} fill="currentColor" />
          </div>
          <span>Watch Reel (0:45)</span>
        </button>

        <a
          href="#work"
          className="hero-scroll"
          onClick={(e) => handleScrollClick(e, "work")}
          aria-label="Scroll down to projects"
        >
          <span>Scroll to explore</span>
          <ChevronDown size={14} />
        </a>

        <span className="edition">EDITION 2026 // RELEASE 3.4</span>
      </div>
    </section>
  );
}
