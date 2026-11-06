import React, { useState } from "react";
import { siteConfig } from "../config/site";
import { Mail, ArrowUpRight, Copy, Check, Play, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "./Icons";

export function Contact({ onOpenReel }) {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "Full Web Application",
    budget: "$5k - $15k",
    message: ""
  });

  const handleCopyEmail = (e) => {
    e.preventDefault();
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(siteConfig.contact.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in your name, email, and message.");
      return;
    }
    // Simulate instantaneous confirmed submission
    setFormSubmitted(true);
  };

  return (
    <section className="section-wrap contact" id="contact">
      <div className="contact-grid">
        {/* Intro */}
        <div className="contact-intro">
          <span className="eyebrow">Contact & Inquiries</span>
          <h2>
            Let's Build <br />
            <span className="accent">Something Extraordinary.</span>
          </h2>
          <p>
            Whether you need a high-performance web application built from the ground up, a design system overhaul, or senior engineering consultation, I am ready to collaborate.
          </p>
          <a href={`mailto:${siteConfig.contact.email}`} className="primary-link" style={{ marginTop: 24 }}>
            <span>Send Direct Email</span>
            <ArrowUpRight size={16} />
          </a>
        </div>

        {/* Channels */}
        <div className="contact-links">
          {/* Email with copy button */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div className="contact-icon">
                <Mail size={16} />
              </div>
              <div>
                <small>Direct Email</small>
                <span>{siteConfig.contact.email}</span>
              </div>
            </div>
            <button
              type="button"
              className="outline-button"
              style={{ minHeight: 36, padding: "6px 12px", fontSize: 11 }}
              onClick={handleCopyEmail}
              aria-label="Copy email address"
            >
              {copied ? <Check size={14} className="accent" /> : <Copy size={14} />}
              <span>{copied ? "Copied" : "Copy"}</span>
            </button>
          </div>

          {/* GitHub */}
          {siteConfig.contact.github && (
            <a href={siteConfig.contact.github} target="_blank" rel="noopener noreferrer">
              <div className="contact-icon">
                <GithubIcon size={16} />
              </div>
              <div>
                <small>Open Source & Code</small>
                <span>github.com/hiteshbalaji147-rgb</span>
              </div>
              <ArrowUpRight size={16} className="muted" style={{ marginLeft: "auto" }} />
            </a>
          )}

          {/* LinkedIn */}
          {siteConfig.contact.linkedin && (
            <a href={siteConfig.contact.linkedin} target="_blank" rel="noopener noreferrer">
              <div className="contact-icon">
                <LinkedinIcon size={16} />
              </div>
              <div>
                <small>Professional Network</small>
                <span>linkedin.com/in/{siteConfig.contact.linkedinHandle || "hitesh-balaji"}</span>
              </div>
              <ArrowUpRight size={16} className="muted" style={{ marginLeft: "auto" }} />
            </a>
          )}

          {/* Twitter / X */}
          {siteConfig.contact.twitter && (
            <a href={siteConfig.contact.twitter} target="_blank" rel="noopener noreferrer">
              <div className="contact-icon">
                <TwitterIcon size={16} />
              </div>
              <div>
                <small>Discussions & Insights</small>
                <span>X / Twitter</span>
              </div>
              <ArrowUpRight size={16} className="muted" style={{ marginLeft: "auto" }} />
            </a>
          )}
        </div>

        {/* 3D Tilted Interactive Reel Card */}
        <div className="contact-reel">
          <button
            type="button"
            onClick={onOpenReel}
            aria-label="Watch interactive reel"
          >
            <div className="reel-screen">
              <div className="reel-screen-top">
                <span>REC // 00:45:12</span>
                <span>4K 60FPS</span>
              </div>
              <div className="reel-screen-title display">
                WATCH <br />
                <span>DEMO REEL</span>
              </div>
              <div className="play-circle">
                <Play size={18} fill="currentColor" />
              </div>
            </div>
            <span className="reel-caption">CLICK TO PLAY INTERACTIVE SHOWCASE ↗</span>
          </button>
        </div>
      </div>

      {/* Project Inquiry / Brief Accordion */}
      {siteConfig.preferences.showContactForm && (
        <details className="project-brief" open>
          <summary>
            <span>Start a Project Brief // Scope & Timelines</span>
            <ArrowUpRight size={18} className="accent" />
          </summary>

          {formSubmitted ? (
            <div className="form-success" role="alert">
              <strong>Thank you, {formData.name}!</strong> Your inquiry has been dispatched. I will review your requirements and respond to <em>{formData.email}</em> within 24 hours.
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <label>
                <span>Your Name *</span>
                <input
                  type="text"
                  required
                  placeholder="e.g. Eleanor Vance"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </label>

              <label>
                <span>Email Address *</span>
                <input
                  type="email"
                  required
                  placeholder="e.g. eleanor@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </label>

              <label>
                <span>Project Focus</span>
                <select
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                >
                  <option value="Full Web Application">Full Web Application</option>
                  <option value="High-Performance Frontend">High-Performance Frontend</option>
                  <option value="Design System & UI Library">Design System & UI Library</option>
                  <option value="Mobile Application">Mobile Application</option>
                  <option value="Code Review & Consultation">Code Review & Consultation</option>
                </select>
              </label>

              <label>
                <span>Estimated Budget</span>
                <select
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                >
                  <option value="< $5k">&lt; $5k (Sprint / Audit)</option>
                  <option value="$5k - $15k">$5k — $15k (Core Build)</option>
                  <option value="$15k - $30k">$15k — $30k (Full Product System)</option>
                  <option value="$30k+">$30k+ (Enterprise Architecture)</option>
                </select>
              </label>

              <label className="brief-message">
                <span>Project Scope & Goals *</span>
                <textarea
                  rows={4}
                  required
                  placeholder="Outline your project scope, target timeline, key integrations, or any reference products..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </label>

              <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
                <button type="submit" className="solid-button">
                  <span>Send Project Brief</span>
                  <Send size={15} />
                </button>
                <span className="muted" style={{ fontSize: 11 }}>
                  Guaranteed confidential response within 24 business hours.
                </span>
              </div>
            </form>
          )}
        </details>
      )}
    </section>
  );
}
