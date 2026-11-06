import React, { useEffect, useRef } from "react";
import { X, ArrowUpRight, ExternalLink } from "lucide-react";
import { GithubIcon } from "./Icons";

export function ProjectDialog({ project, onClose }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      className="dialog-backdrop"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="dialog-title"
    >
      <div className="project-dialog" ref={dialogRef}>
        {/* Header Bar */}
        <div className="dialog-heading">
          <span className="eyebrow">{project.category} // {project.year}</span>
          <button
            type="button"
            className="icon-button"
            onClick={onClose}
            aria-label="Close dialog"
            style={{ width: 36, height: 36, border: "none" }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Media Preview */}
        <div className="dialog-media">
          <img src={project.coverImage} alt={project.title} />
        </div>

        {/* Dialog Body */}
        <div className="dialog-body">
          <div className="dialog-header-row">
            <div>
              <h2 id="dialog-title">{project.title}</h2>
              <span className="accent" style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.02em" }}>
                {project.role}
              </span>
            </div>

            <div className="dialog-actions">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="primary-link"
                  style={{ minHeight: 42, padding: "10px 18px", fontSize: 11 }}
                >
                  <span>Launch Live App</span>
                  <ExternalLink size={14} />
                </a>
              )}
              {project.sourceUrl && (
                <a
                  href={project.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="outline-button"
                  style={{ minHeight: 42, padding: "10px 18px", fontSize: 11 }}
                >
                  <GithubIcon size={14} />
                  <span>Source Code</span>
                </a>
              )}
            </div>
          </div>

          <p className="dialog-description">{project.description}</p>

          {/* Meta Specifications Grid */}
          <div className="dialog-meta-grid">
            <div className="dialog-meta-item">
              <small>Technologies Used</small>
              <div className="dialog-tools">
                {project.tools.map((tool, idx) => (
                  <span key={idx}>{tool}</span>
                ))}
              </div>
            </div>

            <div className="dialog-meta-item">
              <small>Architecture & Role</small>
              <p>{project.role}</p>
            </div>

            {project.stats && (
              <div className="dialog-meta-item">
                <small>Key Performance Telemetry</small>
                <div style={{ display: "flex", gap: 14, marginTop: 4 }}>
                  {Object.entries(project.stats).map(([key, val]) => (
                    <div key={key}>
                      <span className="accent display" style={{ fontSize: 18 }}>{val}</span>
                      <small style={{ textTransform: "capitalize", margin: 0 }}>{key}</small>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
