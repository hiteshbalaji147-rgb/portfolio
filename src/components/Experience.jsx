import React, { useState } from "react";
import { experienceData } from "../data/experience";
import { ChevronDown, ArrowUpRight } from "lucide-react";

export function Experience() {
  const [openIds, setOpenIds] = useState(new Set([experienceData[0]?.id]));

  const toggleRow = (id) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <section className="section-wrap journey" id="experience">
      <div className="section-heading">
        <div>
          <span className="eyebrow">Career Trajectory</span>
          <h2>Experience & Engineering Impact</h2>
        </div>
      </div>

      <div className="journey-grid">
        <div className="experience-list">
          {experienceData.map((exp) => {
            const isOpen = openIds.has(exp.id);
            return (
              <div
                key={exp.id}
                className={`experience-row ${isOpen ? "is-open" : ""}`}
              >
                <button
                  type="button"
                  onClick={() => toggleRow(exp.id)}
                  aria-expanded={isOpen}
                  aria-controls={`desc-${exp.id}`}
                >
                  <span className="experience-date">{exp.period}</span>
                  <span>
                    <h3>{exp.role}</h3>
                    <span className="experience-place">{exp.company}</span>
                  </span>
                  <ChevronDown
                    size={18}
                    style={{
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.3s ease"
                    }}
                  />
                </button>

                {isOpen && (
                  <div className="experience-content" id={`desc-${exp.id}`}>
                    <p>{exp.description}</p>
                    {exp.skills && (
                      <div className="exp-skills">
                        {exp.skills.map((s, idx) => (
                          <span key={idx}>{s}</span>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
