import React, { useState, useMemo } from "react";
import { projectsData, projectCategories } from "../data/projects";
import { ArrowUpRight, Search, ExternalLink } from "lucide-react";

export function ProjectGrid({ onSelectProject }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(6);

  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const matchesCategory =
        activeCategory === "All" || project.category === activeCategory;
      const matchesQuery =
        searchQuery === "" ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tools.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section className="section-wrap" id="work">
      {/* Section Heading */}
      <div className="section-heading">
        <div>
          <span className="eyebrow">Selected Works (2024 — 2026)</span>
          <h2>Crafted with Precision & Performance</h2>
        </div>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-link"
        >
          <span>View GitHub Archive</span>
          <ArrowUpRight size={16} />
        </a>
      </div>

      {/* Portfolio Toolbar: Filters + Search */}
      <div className="portfolio-toolbar">
        <div className="filters" role="tablist">
          {projectCategories.map((category) => (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={activeCategory === category}
              className={activeCategory === category ? "selected" : ""}
              onClick={() => setActiveCategory(category)}
            >
              {category}
              {activeCategory === category && <div className="filter-line" />}
            </button>
          ))}
        </div>

        <div className="search-box">
          <Search size={14} />
          <input
            type="text"
            placeholder="Search projects or stack..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Search projects by title or technology"
          />
        </div>
      </div>

      {/* Projects Grid */}
      <div className="project-grid">
        {filteredProjects.slice(0, visibleCount).map((project, index) => {
          const formattedNumber = String(index + 1).padStart(2, "0");
          return (
            <article
              key={project.id}
              className="project-card"
              onClick={() => onSelectProject(project)}
            >
              <button
                type="button"
                className="project-open"
                aria-label={`View details for ${project.title}`}
              >
                <div className="project-picture">
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="project-frame" />
                <span className="project-type">{project.category}</span>
                <span className="project-year">{project.year}</span>
                <div className="project-hover">
                  <ArrowUpRight size={22} />
                </div>
              </button>

              <div className="project-caption">
                <span className="project-number display">{formattedNumber}</span>
                <span>
                  <h3>{project.title}</h3>
                  <span className="project-category">{project.category}</span>
                </span>
                <ArrowUpRight size={18} />
              </div>
            </article>
          );
        })}

        {filteredProjects.length === 0 && (
          <div className="empty-state">
            <span className="display accent" style={{ fontSize: 48 }}>00</span>
            <h3>No matching projects found</h3>
            <p>Try adjusting your search query or switching categories.</p>
          </div>
        )}
      </div>

      {filteredProjects.length > visibleCount && (
        <div style={{ textAlign: "center", marginTop: 40 }}>
          <button
            type="button"
            className="outline-button"
            onClick={() => setVisibleCount((prev) => prev + 6)}
          >
            <span>Load More Projects ({filteredProjects.length - visibleCount} remaining)</span>
            <ArrowUpRight size={16} />
          </button>
        </div>
      )}
    </section>
  );
}
