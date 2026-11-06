import React, { useState, useEffect } from "react";
import { siteConfig } from "../config/site";
import { ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "./Icons";

export function Footer() {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format as IST / Bengaluru local time
      const timeString = now.toLocaleTimeString("en-US", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false
      });
      setCurrentTime(timeString);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      {/* Brand Wordmark */}
      <a href="#" className="wordmark" aria-label="Back to top">
        {siteConfig.identity.displayName}
        <span>.</span>
      </a>

      {/* Local Time & Location */}
      <span style={{ letterSpacing: "0.04em" }}>
        BENGALURU, IN // {currentTime ? `${currentTime} IST` : "UTC+5:30"}
      </span>

      {/* Copyright */}
      <span>
        © {new Date().getFullYear()} {siteConfig.identity.fullName}. Every pixel has a purpose.
      </span>

      {/* Social Links & Back-To-Top */}
      <div className="footer-socials">
        {siteConfig.contact.github && (
          <a
            href={siteConfig.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
          >
            <GithubIcon size={15} />
          </a>
        )}
        {siteConfig.contact.linkedin && (
          <a
            href={siteConfig.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon size={15} />
          </a>
        )}
        {siteConfig.contact.twitter && (
          <a
            href={siteConfig.contact.twitter}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter / X Profile"
          >
            <TwitterIcon size={15} />
          </a>
        )}
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Scroll back to top of page"
        >
          <ArrowUp size={15} />
        </button>
      </div>
    </footer>
  );
}
